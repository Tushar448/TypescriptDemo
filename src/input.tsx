import React from "react";
export interface InputProps {
  type: string;
  placeholder: string;
  onChangeForm: (event: any) => void;
  name: string;
  value: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChangeForm,
  name,
  value
}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeForm}
        name={name}
        value={value}
      />
    </React.Fragment>
  );
};

export default Input;
