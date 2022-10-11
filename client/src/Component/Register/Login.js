import React, { useState } from "react";
import FormInput from "./FormInput";
import "./Login.scss";
const Login = () => {
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Tên người dùng",
      errorMsg:
        "Tên người dùng phải có độ dài 3-16 kí tự và không có kí tự đặc biệt",
      label: "Tên người dùng",
      pattern: "^[a-zA-Z0-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Mật khẩu",
      errorMsg:
        "Mật khẩu phải có độ dài 8-20 kí tự,có ít nhất 1 số, 1 chữ , 1 kí tự đặc biệt",
      label: "Mật khẩu",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const [values, setValues] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div>
      <div className="box-login">
        <div className="fooprint">
          <div className="container">
            <div className="main-login">
              <form className="form-login" onSubmit={handleSubmit} action="#">
                <div className="text-login">
                  <h2>Đăng nhập</h2>
                </div>
                {inputs.map((item) => {
                  return (
                    <FormInput
                      key={item.id}
                      label={item.label}
                      errorMsg={item.errorMsg}
                      {...item}
                      handleChange={handleChange}
                    />
                  );
                })}
                <button>Đăng nhập</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
