import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { dangKyAction } from '../../../Redux/Actions/UserAction'

function FormSignin(props) {

  const [values, setValues] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    props.dangKy(values)
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <form className="flex col-1 row" id="form" onSubmit={handleSubmit}>
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
            <input name="hoTen" onChange={handleChange} type="text" placeholder="Họ và Tên" />
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
            <input name="matKhau" onChange={handleChange} type="text" placeholder="Mật Khẩu" required />
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
        <div className="input-wrap ">
          <div className="input-icon">
            <div className="icon"><i className="fa fa-user" /></div>
            <input name="maNhom" onChange={handleChange} type="text" placeholder="Mã Nhóm" required />
          </div>
        </div>
        <div className="input-wrap">
          <div className="cb-wrap">
            <input className="glow" id="check" name="maLoaiNguoiDung" value="khachHang" onChange={handleChange} type="checkbox" check="true" required />
            <label htmlFor="check">Khách Hàng</label>
          </div>
        </div>
        <div className="flex space mt-5">
          <div className="cb-wrap">
            <input className="glow" id="remember" type="checkbox" name="rembember" />
            <label htmlFor="remember">Remember me</label>
          </div>
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