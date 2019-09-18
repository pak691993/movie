import React, { useState } from 'react';
import { connect } from 'react-redux';
import { dangKyAction } from '../../../Redux/Actions/UserAction'

function FormSignin(props) {

  const [values, setValues] = useState({
    taiKhoan:"",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom:"GP13",
    maLoaiNguoiDung:"KhachHang",
    hoTen: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dangKy(values)
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <form className="form flex col-1 row" onSubmit={handleSubmit}>
      <div className="left col">
        <div className="col-spacer">
          <div className="form-header">
            <i className="fa fa-lock icon txtglow" />
            <span>Đăng Ký</span>
          </div>
        </div>
        <div className="input-wrap">
          <div className="input-icon">
            <div className="icon"><i className="fa fa-user" /></div>
            <input name="taiKhoan" onChange={handleChange} type="text" placeholder="Tài Khoản" />
          </div>
        </div>
        <div className="input-wrap">
          <div className="input-icon">
            <div className="icon"><i className="fa fa-key" /></div>
            <input name="matKhau" onChange={handleChange} type="password"  autoComplete="password" placeholder="Mật Khẩu" required />
          </div>
        </div>
        <div className="input-wrap">
          <div className="input-icon">
            <div className="icon"><i className="fa fa-user" /></div>
            <input name="hoTen" onChange={handleChange} type="text" placeholder="Họ và Tên" />
          </div>
        </div>
        <div className="input-wrap">
          <div className="input-icon">
            <div className="icon"><i className="fa fa-envelope" /></div>
            <input name="email" onChange={handleChange} type="mail" placeholder="Email" required />
          </div>
        </div>
        <div className="input-wrap">
          <div className="input-icon">
            <div className="icon"><i className="fa fa-phone" /></div>
            <input name="soDT" onChange={handleChange} type="text" placeholder="Điện Thoại" required />
          </div>
        </div>
        <div className="flex space mt-5">
          <button className="primary big">Đăng Ký</button>
        </div>
      </div>
      <div className="right col flex column">
        <div className="col-spacer" />
        <button className="twitter social"><i className="fa fa-twitter fa-fw" />Sign in with Twitter</button>
        <button className="facebook social"><i className="fa fa-facebook-f fa-fw" />Sign in with Facebook</button>
        <button className="googleplus social"><i className="fa fa-google fa-fw" />Sign in with Google </button>
      </div>
    </form >
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    dangKy: (user) => {
      dispatch(dangKyAction(user))
    }
  }
}
export default connect(null, mapDispatchToProps)(FormSignin)