import { vi } from "vitest";

const mockUseFormContext = vi.fn(() => ({
    handleSubmit: (onSubmit) => {
        return (event: React.SyntheticEvent) => {
            event?.preventDefault?.();

            console.log("------------------", event)
            const form = event.target as HTMLFormElement;
            console.log("form", form);
            const inputs = form.querySelectorAll("input");
            console.log("inputs", inputs);
            const data: Record<string, string> = {};

            inputs.forEach((input) => {
                if (input.name) data[input.name] = input.value;
            });

            onSubmit(data, event);
        };
    },
    register: vi.fn(),
    formState: { errors: {} },
}));

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
        useFormContext: mockUseFormContext,
    };
});
