import React from "react";
import "./Product.scss";
const Product = () => {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="box-title">
            <h1>Sản phẩm</h1>
          </div>
        </div>
        <div className="main-content fooprint">
          <div className="container">
            <div className="box-main">
              <div className="container-wrapper">
                <div className="box-filter">
                  <ul>
                    <li className="active">
                      <a href="#">Tất cả sản phẩm</a>
                    </li>
                    <li>
                      <a href="#">Chó cưng</a>
                    </li>
                    <li>
                      <a href="#">Mèo cưng</a>
                    </li>
                  </ul>
                </div>
                <div className="box-product">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="item-product"
                  >
                    <div className="image">
                      <a href="#">
                        <img src="" alt="img" />
                      </a>
                    </div>
                    <div className="category">
                      <a href="#">
                        <span>Thức ăn hạt</span>
                      </a>
                    </div>
                    <div className="title-product">
                      <h5>
                        <a href="#">
                          Thực phẩm chức năng cho mèo bị sỏi thận Royal Canin
                          Urinary
                        </a>
                      </h5>
                    </div>
                    <div className="price-product">
                      <span>135.000</span>
                      <sup>đ</sup>
                      <a className="buying" href="#">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="navigation-home section">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
