import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  layThongTinNguoiDungAction,
  capNhatThongTinNguoiDungAction
} from "../../../Redux/Actions/UserAction";
import "./InfoPage.css";
import avatar from "../../../img/avatar.png";

function InfoPage(props) {
  const [edit, setEdit] = useState(false);
  const [values, setValues] = useState({
    taiKhoan: JSON.parse(localStorage.getItem("userLogin")).taiKhoan,
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: JSON.parse(localStorage.getItem("userLogin")).maNhom,
    maLoaiNguoiDung: JSON.parse(localStorage.getItem("userLogin"))
      .maLoaiNguoiDung,
    hoTen: ""
  });

  const handleSubmid = e => {
    e.preventDefault();
    props.capNhatThongTinNguoiDung(values);
    console.log(values);
  };

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let taiKhoanNguoiDung = {
      taiKhoan: JSON.parse(localStorage.getItem("userLogin")).taiKhoan
    };
    props.layThongTinNguoiDung(taiKhoanNguoiDung);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let { thongTinNguoiDung } = props;

  const renderEdit = () => {
    return (
      <form onSubmit={handleSubmid}>
        <div className="form-group">
          <input
            name="hoTen"
            type="text"
            onChange={handleChange}
            placeholder="Tên"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="soDt"
            type="text"
            onChange={handleChange}
            placeholder="Số Điện Thoại"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="matKhau"
            type="text"
            onChange={handleChange}
            placeholder="Mật khẩu"
            required
          />
        </div>
        <button type="submit">Xác nhận</button>
      </form>
    );
  };

  return (
    <section id="infoPage">
      <div class="container">
        <div class="userInfo row">
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3  user__info">
            <div className="user__avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div>{thongTinNguoiDung.hoTen}</div>
            <div>
              <div>
                <i className="fa fa-users" aria-hidden="true"></i> Tài khoản
              </div>
              <div>
                <button
                  onClick={() => setEdit(!edit)}
                  className="fa fa-cog"
                  aria-hidden="true"
                > Cập nhật thông tin</button>
               
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9 ">
            <h3 className="text-center">Thông Tin Cá Nhân</h3>
            <div className="ndInfo row">
              <div className="col-md-12">
                <p>Tài Khoản: {thongTinNguoiDung.taiKhoan}</p>
                <p>Email: {thongTinNguoiDung.email}</p>
                <p>Số điện thoại: {thongTinNguoiDung.soDT}</p>
                <p>Mật khẩu: {thongTinNguoiDung.matKhau}</p>
                <div>{edit ? renderEdit() : ""}</div>
              </div>
              <div className="bookingInfo">
                <h3 className="text-center">Thông Tin Ðặt Vé</h3>
                <div>
                  {thongTinNguoiDung.thongTinDatVe
                    ? thongTinNguoiDung.thongTinDatVe.map((ttDatVe, index) => {
                        return (
                          <div key={index}>
                            <p>Phim: {ttDatVe.tenPhim}</p>
                            <p>Xuất chiếu: {ttDatVe.ngayDat}</p>
                            <p>Thời Lượngng: {ttDatVe.thoiLuongPhim} phút</p>
                            <p>
                              <span>Tên Rạp: {ttDatVe.ghe.tenHeThongRap} </span>
                              <span> - {ttDatVe.ghe.tenCumRap}</span>
                              <span> - Ghế :{ttDatVe.ghe.tenGhe}</span>
                            </p>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = state => {
  return {
    thongTinNguoiDung: state.userReducer.thongTinNguoiDung
  };
};
const mapDispatchToProps = dispatch => {
  return {
    layThongTinNguoiDung: taiKhoan => {
      dispatch(layThongTinNguoiDungAction(taiKhoan));
    },
    capNhatThongTinNguoiDung: thongTinNguoiDung => {
      dispatch(capNhatThongTinNguoiDungAction(thongTinNguoiDung));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoPage);
