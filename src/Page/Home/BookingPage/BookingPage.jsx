import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { layChiTietPhongVeAction, datVeAction } from '../../../Redux/Actions/MovieAction'
import Seat from '../../../Common/Components/Seat/Seat';
import './BookingPage.css'

function BookingPage(props) {

  useEffect(() => {
    let { maLichChieu } = props.match.params
    props.layChiTietPhongVe(maLichChieu)
  }, [])

  const datVe = () => {
    if (props.danhSachGheDangDat.length > 0) {
      if (localStorage.getItem('userLogin').taiKhoan) {
        let { maLichChieu } = props.match.params
        let thongTinDatVe = {
          "maLichChieu": maLichChieu,
          "danhSachVe": props.danhSachGheDangDat,
          "taiKhoanNguoiDung": JSON.parse(localStorage.getItem('userLogin')).taiKhoan
        }
        props.datVe(thongTinDatVe)
        props.layChiTietPhongVe(maLichChieu);
      }
      else {
        alert('Bạn cần đăng nhập')
      }
    } else {
      alert('Bạn chưa chọn ghế!');
    }
  }

  let { thongTinLichChieu } = props
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div>
            <div className="screen">
              <p>Màn Hình</p>
            </div >
            <div className="seatList">
              {/* Load danh sách ghế */}{thongTinLichChieu.danhSachGhe ? thongTinLichChieu.danhSachGhe.map((ghe, index) => {
                return (
                  <Fragment key={index}>
                    <Seat ghe={ghe} />
                    {(index + 1) % 16 === 0 ? <br /> : ''}
                  </Fragment>
                )
              }) : ''}
            </div>
          </div>
          <div className="col-md-12">
            <div className="typeseats">
              <span className="typeseat">
                <span className="colorseat colornull">  1  </span>
                <span className="nameseat">Ghế Trống</span>
              </span>
              <span className="typeseat">
                <span className="colorseat colorvip">  1  </span>
                <span className="nameseat">Ghế VIP</span>
              </span>
              <span className="typeseat">
                <span className="colorseat colorchoosing">  1  </span>
                <span className="nameseat">Ghế đang chọn</span>
              </span>
              <span className="typeseat">
                <span className="colorseat colorblock">  x  </span>
                <span className="nameseat">Ghế đã có người chọn</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="listBooking">
            <h3>Danh Sách Ghế Đặt</h3><br />
            <div>
              Ghế đang chọn: {props.danhSachGheDangDat.map((gheDangDat, index) => {
                return <Fragment key={index}>
                  <span className="text-danger"> {gheDangDat.stt}</span>
                </Fragment>
              })}
            </div>
            <br />
            <div>
              Tổng tiền :{props.danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                return tongTien + ghe.giaVe;
              }, 0).toLocaleString()}
            </div>

            <div className="listBookingBtn">
              <button onClick={datVe}>Đặt vé</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    thongTinLichChieu: state.StorePhimReducer.thongTinLichChieu,
    danhSachGheDangDat: state.StorePhimReducer.danhSachGheDangDat
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    layChiTietPhongVe: (maLichChieu) => {
      dispatch(layChiTietPhongVeAction(maLichChieu))
    },
    datVe: (thongTinDatVe) => {
      dispatch(datVeAction(thongTinDatVe))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingPage)