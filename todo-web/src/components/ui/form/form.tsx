"use client";
import React from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

import { cn } from "@/utils/cn";

interface FormProps<TFormValues extends FieldValues> {
  onSubmit: SubmitHandler<TFormValues>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: ZodType<TFormValues, any, any>;
  className?: string;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
}

export const Form = <TFormValues extends FieldValues>(
  props: FormProps<TFormValues>
) => {
  const { onSubmit, children, className, options, id, schema } = props;

  const form = useForm<TFormValues>({
    ...options,
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...form}>
      <form
        className={cn("space-y-6", className)}
        onSubmit={form.handleSubmit(onSubmit)}
        id={id}
      >
        {children(form)}
      </form>
    </FormProvider>
  );
};
