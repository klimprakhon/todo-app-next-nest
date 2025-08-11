"use client";

import { z } from "zod";
import { Form, Input } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

interface LoginFormProps {
  onSuccess: () => void;
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const t = useTranslations();
  const handleSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log("Submitted", data);
    onSuccess();
  };

  return (
    <Form schema={loginSchema} onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <>
          <Input
            label={t("auth.email")}
            type="email"
            registration={register("email")}
            error={formState.errors.email}
          />
          <Input
            label={t("auth.password")}
            type="password"
            registration={register("password")}
            error={formState.errors.password}
          />
          <Button type="submit">{t("auth.login")}</Button>
        </>
      )}
    </Form>
  );
};
