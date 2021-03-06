import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { layDanhSachPhimAction } from "../../../Redux/Actions/MovieAction";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ListMovie.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}


function ListMovies(props) {
  const settings = {
    
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    props.layDanhSachPhim();
  }, [props]);

  return (
    <Fragment>
      <section id="listMovie">
          <h3 className="listMovie-titile">Phim Đang Chiếu</h3>
          <Slider {...settings} className="container">
            {props.danhSachPhim.map((phim, index) => {
              return (
                <div key={index} className="myCard">
                  <div className="card">
                    <div className="myCard-content">
                      <img src={phim.hinhAnh} alt={phim.maPhim} />
                      <p>{phim.tenPhim}</p>
                    </div>
                    <div className="myCard-info">
                      <Link to={`/detailmovies/${phim.maPhim}`}>
                        <button>Mua Vé</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
      </section>
    </Fragment>
  );
}
const mapStateToProps = state => {
  return {
    danhSachPhim: state.StorePhimReducer.danhSachPhim
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layDanhSachPhim: () => {
      dispatch(layDanhSachPhimAction());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovies);
