import { FormProvider as Form, useForm } from 'react-hook-form';

export default function FormProvider() {
  const methods = useForm();

  return <Form {...methods}>{children}</Form>;
}
