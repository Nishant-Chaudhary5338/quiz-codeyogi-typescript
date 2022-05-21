/** @format */

import { FC, InputHTMLAttributes, LabelHTMLAttributes, memo } from "react";
type InputProps = {
  error?: string;
  id: string;
} & InputHTMLAttributes<HTMLInputElement> &
  LabelHTMLAttributes<HTMLLabelElement>;

const Input: FC<InputProps> = ({ id, error, ...rest }) => {
  return (
    <>
      <div>
        <label htmlFor={id}>{id}</label>
        <input
          className="w-full py-2 border-2 border-gray-300"
          type="text"
          {...rest}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
