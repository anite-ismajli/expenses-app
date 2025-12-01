import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";
import { toast } from "sonner"

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    email: z.email(),
    password: z.string().min(6, {error: "Password must be at least 6 characters long."})
});

const LoginForm = () => {
        const form = useForm({
            resolver: zodResolver(formSchema),
            mode: "onChange",
            defaultValues: {
                email: "",
                password: "",
                }
        });

        function onSubmit(data) {
            toast ("You submitted the following values:", {
                description: (
                    <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
                        <code>{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
                position: "bottom-right",
                classNames: {
                    content: "flex flex-col gap-2",
                },
                style: {
                    "--border-radius": "calc(var(--radius)) + 4px)",
                },
        });
        }

        return (
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-2">
                    <div>
                        <h1 className="text-primary font-bold text-2xl mb-1">Login</h1>
                        <p className="text-muted-foreground">Welcome back, login to continue.</p>
                    </div>

                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Email</FieldLabel>
                            <Input 
                                {...field}
                                id="form-rhf-demo-title"
                                placeholder="Email..."
                                aria-invalid={fieldState.invalid}
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                    />  

                    <Controller
                        name="password"
                        control={form.control}
                        render={({ field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Password</FieldLabel>
                            <Input 
                                {...field}
                                type="password"
                                id="form-rhf-demo-title"
                                placeholder="******"
                                aria-invalid={fieldState.invalid}
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                    />

                <Button type="submit">Login</Button>
            </form>
        );
};

export default LoginForm;