import React from "react";
import "./Footer.scss";
import logo from "../Navbar/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="box-footer">
        <div className="container">
          <div className="wrapper">
            <div className="col-4 footer-1">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="img" />
                </a>
              </div>
              <div className="info">
                <p>Pet Shop | Shop - Spa - Hotel Thú Cưng</p>
              </div>
            </div>
            <div className="col-4 footer-2">
              <h4>Hỗ trợ</h4>
              <ul>
                <li>
                  <a href="">Hỗ trợ mua hàng</a>
                </li>
                <li>
                  <a href="#">Chính sách đổi trả </a>
                </li>
              </ul>
              <h4>Liên hệ</h4>
              <p>
                <span className="material-icons-outlined">location_on</span>
                Thị Trấn Trâu Qùy, Gia Lâm, Hà Nội
              </p>
              <p>
                <span className="material-icons-outlined">call</span>
                0123456789
              </p>
              <p>
                <span className="material-icons-outlined">email</span>
                petshop@gmail.com
              </p>
            </div>
            <div className="col-4 footer-2">
              <h4>FANPAGE</h4>
            </div>
          </div>
        </div>
        <hr />
        <footer>
          <p>@2022. All Rights Reserved</p>
          <span>Website được xây dựng và phát triển bởi nhóm TTCN</span>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
