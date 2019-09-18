import React, { Fragment } from "react";
import "./Carousel.css";

export default function Carousel(props) {
  // const _renderSlider = () => {
  //     const { danhSachPhim } = props;
  //     // if (!danhSachPhim) return;
  // // let temp = danhSachPhim.filter((item,index)=> index<3).map((phim, index) => {
  // let temp = danhSachPhim.map((phim, index) => {
  //     return (
  //         <div key={index}>
  //             <img src={phim.hinhAnh} alt={phim.maPhim} />
  //             <p>{phim.tenPhim}</p>
  //         </div>
  //     )
  // });

  //     return (
  //         <Slider {...settings}>
  //             {temp}
  //         </Slider>
  //     )

  // const { danhSachPhim } = props;
  return (
    <section id="myCarousel">
      <Fragment>
        <div id="carouselId" className="carousel slide" data-ride="carousel">
          {/* <ol className="carousel-indicators">
            <li
              data-target="#carouselId"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselId" data-slide-to={1} />
            <li data-target="#carouselId" data-slide-to={2} />
          </ol> */}
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/08/angel-15671377090495.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/08/hoi-15653240752724.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/09/buommmm-15677399454407.jpg"
                alt="Third slide"
              />
            </div>
          </div>
        </div>
      </Fragment>
    </section>
  );
}
