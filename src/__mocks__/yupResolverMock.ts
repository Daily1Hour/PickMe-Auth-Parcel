import { vi } from "vitest";

export const yupResolverMock = vi.fn();

vi.mock("@hookform/resolvers/yup", async () => {
    const actual = await vi.importActual("@hookform/resolvers/yup");
    return {
        ...actual,
        yupResolver: yupResolverMock,
    };
});
