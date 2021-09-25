import { useState } from "react";

interface UserFormProps {
  [key: string]: any;
}

export const useForm = (initialValues: UserFormProps) => {
  const [values, setValues] = useState<UserFormProps>(initialValues);

  function handleChange(event: React.SyntheticEvent): void {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
  }

  return [values, handleChange];
};
