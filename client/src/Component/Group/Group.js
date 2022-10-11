import React, { useEffect } from "react";
import "./Group.scss";
import dichvu from "./dich-vu.svg";
import thucan from "./thuc-an.svg";
import phukien from "./phu-kien.svg";
import dodung from "./do-dung.svg";
import thoitrang from "./thoi-trang.svg";
import thuoc from "./thuoc.svg";
import dogcat from "./dog-cat.png";
import fastdelivery from "./fast-delivery.svg";
import pig from "./piggy-bank-3.svg";
import male from "./male-telemarketer.svg";
import dinamond from "./diamond.svg";
import checked from "./checked-3.svg";
import vitamin from "./vitamin-e.svg";
import AOS from "aos";

const Group = () => {
  const group = [
    { name: "Dịch vụ", img: dichvu },
    { name: "Thức ăn", img: thucan },
    { name: "Phụ kiện", img: phukien },
    { name: "Đồ dùng", img: dodung },
    { name: "Thời Trang", img: thoitrang },
    { name: "Thuốc", img: thuoc },
  ];

  return (
    <div>
      <div className="section section-service">
        <div className="container">
          <h2>{"Nhóm dịch vụ & sản phẩm"}</h2>
          <div className="service-body">
            <div className="inner">
              {group.map((item, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    key={index}
                    className="item"
                  >
                    <a href="#">
                      <div className="image">
                        <img src={item.img} alt="img" />
                      </div>
                      <div className="content">
                        <p className="title">{item.name}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="section section-why">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            VÌ SAO CHỌN CHÚNG TÔI?
          </h2>
          <div className="box-body">
            <div className="inner left">
              <div data-aos="fade-up" data-aos-duration="1500" className="item">
                <div className="icon">
                  <img src={fastdelivery} alt="img" />
                </div>
                <p>Vận chuyển nhanh</p>
                <span>
                  Xử lý yêu cầu nhanh chóng, vận chuyển kịp thời, đảm bảo tiến
                  độ cam kết.
                </span>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                className="item"
              >
                <div className="icon">
                  <img src={pig} alt="img" />
                </div>
                <p>GIÁ THÀNH HỢP LÝ</p>
                <span>
                  Không cam kết rẻ nhất nhưng chắc chắn giá thành sẽ tương xứng
                  với chất lượng dịch vụ.
                </span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="item"
              >
                <div className="icon">
                  <img src={male} alt="img" />
                </div>
                <p>TƯ VẤN 24/7</p>
                <span>
                  Chúng tôi luôn sẵn sàng tư vấn cho thú cưng của bạn ở bất cứ
                  đâu, trong mọi thời điểm.
                </span>
              </div>
            </div>
            <div className="bg">
              <img src={dogcat} alt="img" />
            </div>
            <div className="inner right">
              <div data-aos="fade-up" data-aos-duration="1500" className="item">
                <div className="icon">
                  <img src={dinamond} alt="img" />
                </div>
                <p>CHẤT LƯỢNG</p>
                <span>
                  Pet Shop luôn cam kết mang đến khách hàng dịch vụ chăm sóc thú
                  cưng chất lượng nhất.
                </span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="item"
              >
                <div className="icon">
                  <img src={checked} alt="img" />
                </div>
                <p>AN TOÀN</p>
                <span>
                  Thú cưng của bạn sẽ được chăm sóc bằng sự tận tâm, yêu thương,
                  đảm bảo an toàn.
                </span>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                className="item"
              >
                <div className="icon">
                  <img src={vitamin} alt="img" />
                </div>
                <p>ĐẦY ĐỦ DƯỠNG CHẤT</p>
                <span>
                  Thực phẩm dành cho thú cưng tại Pet Shop không những kích
                  thích pet ăn ngon mà còn đầy đủ dưỡng chất.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
