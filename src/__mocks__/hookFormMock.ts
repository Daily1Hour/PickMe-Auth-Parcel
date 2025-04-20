import { vi } from "vitest";

const mockUseForm = vi.fn(() => ({
    register: vi.fn(),
    handleSubmit: vi.fn(),
    formState: { isSubmitting: false },
    control: {},
}));

vi.mock("react-hook-form", async () => {
    const actual = await vi.importActual("react-hook-form");
    return {
        ...actual,
        useForm: mockUseForm,
    };
});
