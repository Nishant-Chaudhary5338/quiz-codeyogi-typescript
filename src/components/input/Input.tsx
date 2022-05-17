/** @format */

import { useField } from "formik";
import { FC, InputHTMLAttributes, LabelHTMLAttributes, memo } from "react";
type InputProps = {
  id: string;
  name: string;
  type?: "text" | "email" | "password" | "number";
} & InputHTMLAttributes<HTMLInputElement> &
  LabelHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ id, name, type, ...rest }) => {
  const [field, meta] = useField(name);
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={id}>{id}</label>
        <input
          className="py-4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block-w-96"
          id={id}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={name}
          {...rest}
        />
        {meta.touched && meta.error && (
          <span className="text-sm text-red-500 ">{meta.error}</span>
        )}
      </div>
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
