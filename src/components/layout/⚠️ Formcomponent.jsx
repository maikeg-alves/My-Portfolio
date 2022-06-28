import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const FormGrup = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    margin-bottom: 30px;
`;

const InputBase = styled.input`
    padding: 10px;
    border-radius: 7px;
    margin-bottom: 10px;
    border: 1px solid #b7b7b7;
`;

const SelectOption = styled.select`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
`;


export function Form({ defaultValues, children, onSubmit }) {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <FormGrup onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name
                  }
                })
              : child;
          })
        : children}
    </FormGrup>
  );
}

export function Input({ register, placeholder, name, ...rest }) {
  return <InputBase placeholder={placeholder} {...register(name)} {...rest} />;
}

export function Select({ register, placeholder, options, name, ...rest }) {
  return (
    <SelectOption placeholder={placeholder} {...register(name)} {...rest}>
      {options.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </SelectOption>
  );
}
