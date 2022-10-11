import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const refHeader = useRef();
  const refIconMenu = useRef();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > refHeader.current.offsetTop) {
        refHeader.current.classList.add("sticky");
      } else {
        refHeader.current.classList.remove("sticky");
      }
    });
  }, []);

  const onOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div ref={refHeader} className="main-menu">
      <div className="container">
        <ul className="menu-header">
          <li className="sanpham">
            <p className="name-menu">
              <span
                ref={refIconMenu}
                onClick={onOpenMenu}
                className="material-icons-outlined"
              >
                menu
              </span>
              <span>Danh mục sản phẩm</span>
            </p>
            <ul className="menu-nav">
              <li className="menu-level1">
                <p>
                  <a href="#">Dành cho chó cưng</a>
                  <span class="material-icons-outlined">expand_more</span>
                </p>

                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li className="menu-level1">
                <p>
                  <a href="#">Dành cho mèo cưng cưng</a>
                  <span class="material-icons-outlined">expand_more</span>
                </p>

                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
                <ul className="menu-level2">
                  <li>
                    <p>
                      <a href="#">
                        <span class="material-icons-outlined">arrow_right</span>
                        Thức ăn
                      </a>
                      <span class="material-icons-outlined">expand_more</span>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="active">
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/gioithieu">Giới thiệu</Link>
          </li>
          <li>
            <Link to="#">Dịch vụ</Link>
            <ul className="dropdown-level1">
              <li>
                <span className="material-icons-outlined">navigate_next</span>
                <Link to="/login">Khách sạn cho mèo cưng</Link>
              </li>
              <li>
                <span className="material-icons-outlined">navigate_next</span>
                <Link to="/login">Cắt tỉa lông cho mèo cưng</Link>
              </li>
              <li>
                <span className="material-icons-outlined">navigate_next</span>
                <Link to="/login">Khách sạn cho chó cưng</Link>
              </li>
              <li>
                <span className="material-icons-outlined">navigate_next</span>
                <Link to="/login">Cắt tỉa lông cho chó cưng</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">Liên hệ</Link>
          </li>
          <li>
            <a href="#">Tài khoản</a>
            <ul className="dropdown-level1">
              <li>
                <span className="material-icons-outlined">navigate_next</span>
                <Link to="/login">Đăng nhập</Link>
              </li>
              <li>
                <span className="material-icons-outlined">navigate_next</span>
                <Link to="/register">Đăng kí</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="plugin-search">
          <form className="form-search" action="">
            <label className="search-label" htmlFor="search-label">
              <input
                type="text"
                name="keyword"
                className="search-input"
                placeholder="Tìm Kiếm"
              />
              <button type="submit">
                <span className="material-icons-outlined">search</span>
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
