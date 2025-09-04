"use client"

import { title } from "@/components/primitives";
import { Form, Input, Button } from "@heroui/react";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const scheme = z.object({
  name: z.string().min(1),
  surname: z.string().min(1),
  age: z.coerce.number().positive(),
  email: z.email().optional(),
  phone: z.string().regex(/^[0-9]+$/)
});

type PersonType = z.infer<typeof scheme>

export default function PricingPage() {
  const { handleSubmit, control, formState: { errors } } = useForm({ resolver: zodResolver(scheme) });

  const onSubmit = (data: PersonType) => console.log("Submit exitoso")
  const onSubmitInvalid = () => console.log("Submit fallido")

  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <Form className="w-full max-w-xs flex flex-col gap-3" onSubmit={handleSubmit(onSubmit, onSubmitInvalid)}>
        <Controller control={control} name="name"
          render={({ field: { onChange, value, name }, fieldState: { invalid, error } }) => (<>
            <Input value={value} isInvalid={invalid} label={name} labelPlacement="outside" onValueChange={onChange} />
            {error && <p>{error.message}</p>}
          </>
          )} />

        <Controller control={control} name="surname"
          render={({ field: { onChange, value, name }, fieldState: { invalid, error } }) => (<>
            <Input value={value} isInvalid={invalid} label={name} labelPlacement="outside" onValueChange={onChange} />
            {error && <p>{error.message}</p>}
          </>
          )} />
        <Controller control={control} name="age"
          render={({ field: { onChange, value, name }, fieldState: { invalid, error } }) => (<>
            <Input value={value as string} isInvalid={invalid} label={name} labelPlacement="outside" onValueChange={onChange} />

            {error && <p>{error.message}</p>}
          </>
          )} />

        <Controller control={control} name="email"
          render={({ field: { onChange, value, name }, fieldState: { invalid, error } }) => (
            <>
              <Input value={value} isInvalid={invalid} label={name} labelPlacement="outside" onValueChange={onChange} />

              {error && <p>{error.message}</p>}
            </>
          )} />

        <Controller control={control} name="phone"
          render={({ field: { onChange, value, name }, fieldState: { invalid, error } }) => (
            <>
              <Input value={value} isInvalid={invalid} label={name} labelPlacement="outside" onValueChange={onChange} />

              {error && <p>{error.message}</p>}
            </>
          )} />

        <div className="flex-row gap-3 w-full">
          <Button type="submit">Enviar</Button>
          <Button type="reset">Deshacer</Button>
        </div>
      </Form>
    </div>
  );
}
