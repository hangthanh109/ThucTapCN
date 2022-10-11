import React, { useRef, useState } from "react";
import "./FormInput.scss";
const FormInput = (props) => {
  const { id, label, handleChange, errorMsg, ...otherProps } = props;

  const [focus, setFocus] = useState(false);

  const refInputPass = useRef();
  const refIconPass = useRef();

  const handleFocus = () => {
    setFocus(true);
  };
  const handleShowPass = () => {
    if (refInputPass.current.type == "password") {
      refInputPass.current.type = "text";
      refIconPass.current.innerHTML = "visibility_off";
    } else {
      refInputPass.current.type = "password";
      refIconPass.current.innerHTML = "visibility";
    }
  };
  return (
    <div>
      <div className="form-input">
        <label htmlFor={props.name}>{label}</label>
        {props.type == "password" ? (
          <div className="input-password">
            <input
              ref={refInputPass}
              {...otherProps}
              onChange={handleChange}
              onBlur={handleFocus}
              focused={focus.toString()}
            />
            <span
              ref={refIconPass}
              onClick={handleShowPass}
              className="eye-pass material-icons-outlined"
            >
              visibility
            </span>
            {/* <span className="eye-pass material-icons-outlined">
              visibility_off
            </span> */}
            <span className="errorMsg">{errorMsg}</span>
          </div>
        ) : (
          <>
            <input
              {...otherProps}
              onChange={handleChange}
              onBlur={handleFocus}
              focused={focus.toString()}
            />
            <span className="errorMsg">{errorMsg}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default FormInput;
