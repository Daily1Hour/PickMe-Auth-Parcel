import { FormProvider, useForm } from "react-hook-form";

import renderWithChakra from "./renderWithChakra";

const renderWithFormProvider = (children: React.ReactNode) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm({
        mode: "onSubmit",
        defaultValues: { username: "" },
    });

    return renderWithChakra(<FormProvider {...methods}>{children}</FormProvider>);
};

export default renderWithFormProvider;
