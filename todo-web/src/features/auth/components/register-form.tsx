"use client";

import { Button } from "@/components/ui/button";
import { Form, Input } from "@/components/ui/form";
import { useTranslations } from "next-intl";
import z from "zod";

const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

interface RegisterFormProps {
  onSuccess: () => void;
}

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const t = useTranslations();
  const handleSubmit = (data: z.infer<typeof registerSchema>) => {
    console.log("Submitted", data);
    onSuccess();
  };

  return (
    <Form schema={registerSchema} onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <>
          <Input
            label="Email"
            type="email"
            registration={register("email")}
            error={formState.errors.email}
          />
          <Input
            label="Password"
            type="password"
            registration={register("password")}
            error={formState.errors.password}
          />
          <Button type="submit">{t("auth.register")}</Button>
        </>
      )}
    </Form>
  );
};
