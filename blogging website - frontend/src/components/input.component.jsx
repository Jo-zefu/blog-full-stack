import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const InputBox = ({ id, name, placeholder, type, value, inputIcon }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const iconStyle = "w-5 h-5 input-icon left-[auto] right-4 cursor-pointer";
  return (
    <div className="relative w-[100%] mb-4">
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={
          type == "password" ? (passwordVisible ? "text" : "password") : type
        }
        defaultValue={value}
        className="input-box"
      />
      {inputIcon || ""}
      {type == "password" ? (
        <>
          {passwordVisible ? (
            <EyeIcon
              className={iconStyle}
              onClick={() => setPasswordVisible((pre) => !pre)}
            />
          ) : (
            <EyeSlashIcon
              className={iconStyle}
              onClick={() => setPasswordVisible((pre) => !pre)}
            />
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;
