import React, { useState } from "react";
import FormInput from "./FormInput";
import "./Login.scss";
const Register = () => {
  const [values, setValues] = useState([
    {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  ]);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Tên người dùng",
      label: "Tên người dùng",
      errorMsg:
        "Tên người dùng phải có độ dài 3-16 kí tự và không có kí tự đặc biệt",
      pattern: "^[a-zA-Z0-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Tên Email",
      errorMsg: "Định dạng Email nhập chưa chính xác !",
      pattern: `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`,
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Mật khẩu",
      errorMsg:
        "Mật khẩu phải có độ dài 8-20 kí tự,có ít nhất 1 số, 1 chữ , 1 kí tự đặc biệt",
      label: "Mật khẩu",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Nhập lại Mật khẩu",
      errorMsg: "Mật khẩu không khớp, vui lòng kiểm tra lại !",
      label: "Nhập lại mật khẩu",
      pattern: values.password,
      required: true,
    },
  ];
  return (
    <div>
      <div className="box-login">
        <div className="fooprint">
          <div className="container">
            <div className="main-login">
              <form
                className="form-login form-register"
                onSubmit={handleSubmit}
                action="#"
              >
                <div className="text-login">
                  <h2>Đăng ký</h2>
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
                <button>Đăng ký</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
