import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { layChiTietPhimAction } from "../../../Redux/Actions/MovieAction";
import "./DetailMovies.css";
import { NavLink } from "react-router-dom";
// import $ from 'jquery'

function DetailMovies(props) {
  useEffect(() => {
    let { maPhim } = props.match.params;
    props.layChiTietPhim(maPhim);
  }, []);

  let { chiTietPhim } = props;

  const showRating = rating => {
    var result = [];
    if (rating > 0) {
      for (var k = 1; k <= rating; k++) {
        result.push(<i key={k} className="fa fa-star"></i>);
      }
      for (var h = k; h <= 5 - rating; h++) {
        result.push(<i key={h} className="fa fa-star-o"></i>);
      }
    }
    return result;
  };

  return (
    <section id="detailMovie">
      <Fragment>
        <div className=" container">
          <div className="detail row">
            <div className="detail-img col-md-4 p-5">
              <div className="hinhAnhPhim">
                <img className="" src={chiTietPhim.hinhAnh} alt="/" />
                <span
                  type="button"
                  className="btnPlay"
                  data-toggle="modal"
                  data-target="#modalTrailer"
                >
                  <i className="fa fa-play"></i>
                </span>
              </div>
              <div>
                <div
                  className="modal fade"
                  id="modalTrailer"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="modelTitleId"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="stop-button"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <div className="modal-body">
                        <div className="trailer">
                          <iframe
                            id="video"
                            src={chiTietPhim.trailer}
                            frameBorder="1"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="/"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detailMovie-desc col-md-8">
              <div>
                <h1>{chiTietPhim.tenPhim}</h1> <br />
                <p>{chiTietPhim.moTa}</p>
                <p>Showing: {chiTietPhim.ngayKhoiChieu}</p>
                <p>
                  Rating:{" "}
                  <span className="rating">
                    {showRating(chiTietPhim.danhGia)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <ul className="nav nav-tabs">
              {chiTietPhim.heThongRapChieu
                ? chiTietPhim.heThongRapChieu.map((htr, index) => {
                    if (index === 0) {
                      return (
                        <li key={index} className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href={`#${htr.maHeThongRap}`}
                          >
                            {htr.tenHeThongRap}
                          </a>
                        </li>
                      );
                    } else {
                      return (
                        <li key={index} className="nav-item ">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href={`#${htr.maHeThongRap}`}
                          >
                            {htr.tenHeThongRap}
                          </a>
                        </li>
                      );
                    }
                  })
                : ""}
            </ul>

            <div className="tab-content">
              {chiTietPhim.heThongRapChieu
                ? chiTietPhim.heThongRapChieu.map((htr, index) => {
                    if (index === 0) {
                      return (
                        <div
                          key={index}
                          className="tab-pane container active"
                          id={htr.maHeThongRap}
                        >
                          {htr.cumRapChieu
                            ? htr.cumRapChieu.map((cumRap, index) => {
                                return (
                                  <div key={index} className="card text-left">
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        {cumRap.tenCumRap}
                                      </h4>
                                      {cumRap.lichChieuPhim
                                        ? cumRap.lichChieuPhim.map(
                                            (lichChieu, index) => {
                                              return (
                                                <NavLink
                                                  key={index}
                                                  className="display-5 text-success"
                                                  to={`/booking/${lichChieu.maLichChieu}`}
                                                >
                                                  {" "}
                                                  {lichChieu.ngayChieuGioChieu}
                                                </NavLink>
                                              );
                                            }
                                          )
                                        : ""}
                                    </div>
                                  </div>
                                );
                              })
                            : ""}
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={index}
                          className="tab-pane container"
                          id={htr.maHeThongRap}
                        >
                          {htr.cumRapChieu
                            ? htr.cumRapChieu.map((cumRap, index) => {
                                return (
                                  <div key={index} className="card text-left">
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        {cumRap.tenCumRap}
                                      </h4>
                                      {cumRap.lichChieuPhim
                                        ? cumRap.lichChieuPhim.map(
                                            (lichChieu, index) => {
                                              return (
                                                <NavLink
                                                  key={index}
                                                  className="display-5 text-success"
                                                  to={`/booking/${lichChieu.maLichChieu}`}
                                                >
                                                  {" "}
                                                  {
                                                    lichChieu.ngayChieuGioChieu
                                                  }{" "}
                                                </NavLink>
                                              );
                                            }
                                          )
                                        : ""}
                                    </div>
                                  </div>
                                );
                              })
                            : ""}
                        </div>
                      );
                    }
                  })
                : ""}
            </div>
          </div>
        </div>
      </Fragment>
    </section>
  );
}
const mapStateToProps = state => {
  return {
    chiTietPhim: state.StorePhimReducer.chiTietPhim
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layChiTietPhim: maPhim => {
      dispatch(layChiTietPhimAction(maPhim));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailMovies);
