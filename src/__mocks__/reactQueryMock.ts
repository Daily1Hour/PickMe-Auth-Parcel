import { vi } from "vitest";

export const mockUseQuery = vi.fn(
    () =>
        ({
            data: {},
            isSuccess: true,
        } as unknown),
);

export const mutateAsyncMock = vi.fn();
export const mockUseMutation = vi.fn(
    ({ onSuccess }) =>
        ({
            mutate: () => {
                onSuccess?.("success");
            },
            mutateAsync: mutateAsyncMock,
        } as unknown),
);

export const refetchQueriesMock = vi.fn();
export const mockUseQueryClient = vi.fn(() => ({
    refetchQueries: refetchQueriesMock,
}));

vi.mock("@tanstack/react-query", async () => {
    const actual = await vi.importActual<typeof import("@tanstack/react-query")>(
        "@tanstack/react-query",
    );

    return {
        ...actual,
        useQuery: mockUseQuery,
        useMutation: mockUseMutation,
        useQueryClient: mockUseQueryClient,
    };
});
