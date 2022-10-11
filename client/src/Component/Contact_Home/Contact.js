import React from "react";
import "./Contact.scss";
import img from "./img-contact.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Scrollbar, Autoplay, Pagination, Navigation } from "swiper";

const Contact = () => {
  const cmtCustomer = [
    {
      id: 1,
      name: "Ngọc Liên",
      image: "",
      address: "Hà Nội",
      comment:
        "Tận tình, chu đáo và chuyên nghiệp là những gì mình nhận thấy khi trải nghiệm dịch vụ cắt tỉa lông cho thú cưng tại Pet Shop. Chắc chắn sẽ quay trở lại sử dụng dịch vụ.",
    },
    {
      id: 1,
      name: "Nam Anh",
      address: "Hà Nội",
      comment:
        "Nhân viên nhiệt tình, giá thành dịch vụ hợp lý, pet nhà mình được chăm sóc rất tận tình. Cám ơn Pet Shop rất nhiều.",
    },
    {
      id: 1,
      name: "Tuấn Trần",
      address: "Hà Nội",
      comment:
        "Pet Shop là địa chỉ quen thuộc mình lựa chọn để mua thức ăn cho các em cún ở nhà. Giá thành hợp lý, nguồn gốc rõ ràng, mình rất an tâm khi mua ở đây.",
    },
    {
      id: 1,
      name: "Ngọc Anh",
      address: "Hà Nội",
      comment:
        "Lần đầu trải nghiệm dịch vụ Spa cho thú cưng tại Pet Shop, mình rất hài lòng về thái độ phục vụ của nhân viên cũng như chất lượng dịch vụ. Pet nhà mình được chăm rất tận tâm",
    },
  ];
  return (
    <div>
      <div className="box-contact">
        <div className="container">
          <div className="module-contact">
            <div className="img-left col-6">
              <img src={img} alt="" />
            </div>
            <div className="form-contact col-6">
              <div className="title-contact">
                ĐĂNG KÝ DỊCH VỤ
                <br />
                CHO THÚ CƯNG
              </div>
              <div className="form">
                <div className="group">
                  <span className="material-icons-outlined">person</span>
                  <input placeholder="Họ Tên" type="text" />
                </div>
                <div className="group">
                  <span className="material-icons-outlined">phone_iphone</span>
                  <input type="text" placeholder="Điện thoại" />
                </div>
                <div className="group">
                  <span selected="selected" className="material-icons-outlined">
                    pets
                  </span>
                  <select defaultValue="Chọn dịch vụ">
                    <option>Chọn dịch vụ</option>
                    <option value="">Cắt tỉa lông cho mèo cưng</option>
                    <option value="">Cắt tỉa lông cho chó cưng</option>
                    <option value="">Khách sạn cho mèo cưng</option>
                    <option value="">Khách sạn cho chó cưng</option>
                  </select>
                </div>
                <div className="group">
                  <span className="material-icons-outlined">date_range</span>
                  <input
                    type="date"
                    data-provide="datepicker"
                    name="date"
                    placeholder="Thời gian đăng kí"
                  />
                </div>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Nhập nội dung"
                ></textarea>
                <a href="#">Đăng ký</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cmt-customer">
        <div className="container">
          <div className="text-header">
            <h2 data-aos="fade-right" data-aos-duration="1500">
              Phản hồi từ khách hàng
            </h2>
          </div>

          <div className="container-wrapper">
            <div className="cmt-customer">
              <Swiper
                slidesPerView={2}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  769: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                }}
                scrollbar={true}
                navigation={false}
                pagination={{
                  clickable: true,
                }}
                modules={[
                  Autoplay,
                  Keyboard,
                  Scrollbar,
                  Navigation,
                  Pagination,
                ]}
                className="mySwiper"
              >
                {cmtCustomer.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="box-customer">
                        <figure data-aos="fade-right" data-aos-duration="1500">
                          <blockquote>
                            <div className="avatar">
                              <img
                                src="https://petnow.com.vn/frontend/home/images/pic1.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="customer">
                              <div className="name-customer">{item.name}</div>
                              <div className="address-customer">
                                {item.address}
                              </div>
                            </div>
                          </blockquote>
                          <div className="quote">{item.comment}</div>
                        </figure>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
