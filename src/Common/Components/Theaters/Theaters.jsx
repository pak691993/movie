import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import {
  layThongTinHeThongRapAction,
  layThongTinLichChieuHeThongRapAction
} from "../../../Redux/Actions/MovieAction";
// import { NavLink } from "react-router-dom";
import "./Theaters.css";

function Theaters(props) {
  useEffect(() => {
    props.layThongTinHeThongRap();
    props.laythongTinLichChieuHeThongRap("BHDStar");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let { thongTinHeThongRap } = props;
  let { thongTinLichChieuHTR } = props;

  const handleClick = maRap => {
    props.laythongTinLichChieuHeThongRap(maRap);
  };

  return (
    <Fragment>
      <section id="theaters">
        <h3 className="text-center mb-5">Cụm rạp chiếu</h3>
        <div className="container">
          <ul className="nav">
            {thongTinHeThongRap
              ? thongTinHeThongRap.map((htr, index) => {
                  if (index === 0) {
                    return (
                      <li key={index} className="nav-item active">
                        <a
                          data-toggle="tab"
                          href={`#${htr.maHeThongRap}`}
                          onClick={() => handleClick(htr.maHeThongRap)}
                        >
                          <img
                            className="theaters-logo"
                            src={htr.logo}
                            alt="/"
                          />
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li key={index} className="nav-item">
                        <a
                          data-toggle="tab"
                          href={`#${htr.maHeThongRap}`}
                          onClick={() => handleClick(htr.maHeThongRap)}
                        >
                          <img
                            className="theaters-logo"
                            src={htr.logo}
                            alt="/"
                          />
                        </a>
                      </li>
                    );
                  }
                })
              : ""}
          </ul>
          <div className="tab-content">
            {thongTinLichChieuHTR
              ? thongTinLichChieuHTR.map((cumRap, index) => {
                  if (index === 0) {
                    return (
                      <div
                        key={index}
                        className="tab-pane active tablePhim"
                        id={cumRap.maHeThongRap}
                      >
                        {cumRap.lstCumRap
                          ? cumRap.lstCumRap.map((rap, index) => {
                              return (
                                <div key={index} className="list row">
                                  <div className="rap col-md-5 col-sm-12">
                                    <a href={`#${rap.tenCumRap}`}>
                                      {rap.tenCumRap}
                                    </a>
                                    <p>Địa chỉ: {rap.diaChi}</p>
                                  </div>
                                  <div className="phim col-md-7 col-sm-12 ">
                                    <div>
                                      <div>{rap.danhSachPhim[0].tenPhim}</div>
                                      {rap
                                        ? rap.danhSachPhim.map(
                                            (phim, index) => {
                                              return (
                                                <div key={index}>
                                                  {/* <NavLink to={`/booking/${phim.maPhim}`}>{phim.ngayChieuGioChieu}</NavLink> */}
                                                  <p>
                                                    {phim.ngayChieuGioChieu}
                                                  </p>
                                                </div>
                                              );
                                            }
                                          )
                                        : ""}
                                    </div>
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
                        className="tablePhim tab-pane"
                        id={cumRap.maHeThongRap}
                      >
                        {cumRap.lstCumRap
                          ? cumRap.lstCumRap.map((rap, index) => {
                              return (
                                <div className="list row" key={index}>
                                  <div className="rap col-md-5 col-sm-4 col-5">
                                    <a href={`#${rap.tenCumRap}`}>
                                      {rap.tenCumRap}
                                    </a>
                                  </div>
                                  <div className="phim col-md-7 col-sm-8 col-7">
                                    <div>
                                      {rap
                                        ? rap.danhSachPhim.map(
                                            (phim, index) => {
                                              return (
                                                <div key={index}>
                                                  {/* <div>{tenPhim}</div>
																	<NavLink to={`/booking/${phim.maPhim}`}>{phim.ngayChieuGioChieu}</NavLink> */}
                                                </div>
                                              );
                                            }
                                          )
                                        : ""}
                                    </div>
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
      </section>
    </Fragment>
  );
}
const mapStateToProps = state => {
  return {
    thongTinHeThongRap: state.StorePhimReducer.thongTinHeThongRap,
    thongTinLichChieuHTR: state.StorePhimReducer.thongTinLichChieuHeThongRap
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layThongTinHeThongRap: () => {
      dispatch(layThongTinHeThongRapAction());
    },

    laythongTinLichChieuHeThongRap: maHeThongRap => {
      dispatch(layThongTinLichChieuHeThongRapAction(maHeThongRap));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theaters);

// const _fortmatData = (arr) => {
// 	let temp = {};
// 	for (let index = 0; index < arr.length; index++) {
// 		const item = arr[index];
// 		let test = temp[item.maPhim];
// 		//test co hoac khong - test = item || test = undefine
// 		if(test){
// 			temp[item.maPhim].ngayChieuGioChieu.push(item.ngayChieuGioChieu)
// 		} else {
// 			temp[item.maPhim] = {...item, ngayChieuGioChieu: [item.ngayChieuGioChieu]}
// 		}
// 	}
// 	return Object.values(temp);
// }

// const data = [
// 	{
// 		"maPhim": 1359,
// 		"tenPhim": "Home",
// 		"maRap": "512",
// 		"tenRap": "Rạp 2",
// 		"ngayChieuGioChieu": "2019-01-01T10:10:00",
// 		"giaVe": 75000
// 	}]

// console.log(data);
// let check  = _fortmatData(data)
// console.log(check);
