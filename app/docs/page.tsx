"use client"
import { title } from "@/components/primitives";
import z, { email } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form";
import { Form, Button, Input } from "@heroui/react";

const scheme = z.object({
  name: z.string().min(1),
  surname: z.string().min(1),
  age: z.coerce.number().positive(),
  email: z.email().optional(),
  phone: z.string().regex(/^[0-9]+$/)
});

export default function DocsPage() {
  const { handleSubmit, register, formState: { errors }, control } = useForm({
    resolver: zodResolver(scheme)
  }
  );

  const onSubmit = () => {
    console.log("Submit exitoso")
   }
  const onSubmitInvalid = () => { }

  return (
    <div>
      <h1 className={title()}>Docs</h1>
      <Form className="w-full max-w-xs flex flex-col gap-3" onSubmit={handleSubmit(onSubmit, onSubmitInvalid)}>
        <Input {...register("name")}
          label="Nombre"
          isInvalid={errors.name?.message !== undefined}
          labelPlacement="outside"
        />
        <p>{errors.name?.message}</p>
        <Input {...register("surname")}
          label="Apellidos"
          isInvalid={errors.surname?.message !== undefined}
          labelPlacement="outside"
        />
        <p>{errors.surname?.message}</p>
        <Input {...register("age")}
          label="Edad"
          isInvalid={errors.age?.message !== undefined}
          labelPlacement="outside"
        />
        <p>{errors.age?.message}</p>
        <Input {...register("email")}
          label="Correo"
          isInvalid={errors.email?.message !== undefined}
          labelPlacement="outside"
        />
        <p>{errors.email?.message}</p>
        <Input {...register("phone")}
          label="Telefono"
          isInvalid={errors.phone?.message !== undefined}
          labelPlacement="outside"
        />
        <p>{errors.phone?.message}</p>
        <div className="flex-row gap-3 w-full">
          <Button type="submit">Enviar</Button>
          <Button type="reset">Deshacer</Button>
        </div>
      </Form>
    </div>
  );
}
