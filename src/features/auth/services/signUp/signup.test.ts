import {
    ICognitoUserAttributeData,
    ISignUpResult,
    CognitoUserPool,
    CognitoUser,
    CognitoUserAttribute,
} from "amazon-cognito-identity-js";

import { Response, signup } from "./signup";
import userPoolData from "../userPoolData";

jest.mock("amazon-cognito-identity-js");

describe("signup 함수 테스트", () => {
    let mockSignUp: jest.Mock;

    beforeAll(() => {
        mockSignUp = jest.fn((username, password, attributes, validationData, callback) => {
            const result: ISignUpResult = {
                user: new CognitoUser({
                    Username: username,
                    Pool: new CognitoUserPool(userPoolData),
                }),
                userConfirmed: false,
                userSub: "testUserSub",
                codeDeliveryDetails: {
                    AttributeName: "email",
                    DeliveryMedium: "EMAIL",
                    Destination: attributes[0].value,
                },
            };
            callback(undefined, result);
        });

        (CognitoUserPool as jest.MockedClass<typeof CognitoUserPool>).mockImplementation(
            (data, wrapRefreshSessionCallback) => ({
                signUp: mockSignUp,
                getUserPoolId: jest.fn(),
                getUserPoolName: jest.fn(),
                getClientId: jest.fn(),
                getCurrentUser: jest.fn(),
            }),
        );

        (CognitoUserAttribute as jest.MockedClass<typeof CognitoUserAttribute>).mockImplementation(
            // CognitoUserAttribute 랩핑은 테스트가 번거로워서 항등함수로 대체
            (attribute: ICognitoUserAttributeData) => attribute as any,
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("가입 성공", async () => {
        // Arrange
        const signupCredential = {
            username: "testuser",
            password: "testpassword",
            confirmPassword: "testpassword",
            email: "test@example.com",
        };

        // Act
        const result: Response = await signup(signupCredential);

        // Assert
        expect(result.message).toContain("success");
        expect(mockSignUp).toHaveBeenCalledWith(
            signupCredential.username,
            signupCredential.password,
            expect.arrayContaining([
                expect.objectContaining({ Name: "email", Value: signupCredential.email }),
            ]),
            expect.arrayContaining([
                expect.objectContaining({
                    Name: "email",
                    Value: signupCredential.email,
                }),
            ]),
            expect.any(Function),
        );
    });
});
