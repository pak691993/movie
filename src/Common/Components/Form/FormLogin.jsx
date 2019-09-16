import React, { useState } from 'react';
import { connect } from 'react-redux';
import { dangNhapAction } from '../../../Redux/Actions/UserAction';

import './Form.css'

function FormLogin(props) {

	const [values, setValues] = useState({})
	const handleSubmit = (e) => {
		e.preventDefault();
		props.dangNhap(values);
	}

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	return (
		<form className="flex col-1 row" id="form" onSubmit={handleSubmit}>
			<div className="col">
				<div className="col-spacer">
					<div className="form-header">
						<i className="fa fa-lock icon txtglow" />
						<span>Đăng Nhập</span>
					</div>
				</div>
				<div className="input-wrap">
					<div className="input-icon">
						<div className="icon"><i className="fa fa-user" /></div>
						<input type="text" name="taiKhoan" onChange={handleChange} required placeholder="Tài Khoản" />
					</div><a className="input-desc" href="#">Quên tài khoản?</a>
				</div>
				<div className="input-wrap">
					<div className="input-icon">
						<div className="icon"><i className="fa fa-key" /></div>
						<input type="password" name="matKhau" onChange={handleChange} required placeholder="Mật Khẩu" />
					</div><a className="input-desc" href="#">Quên mật khẩu?</a>
				</div>
				<div className="flex space mt-5">
					<div className="cb-wrap">
						<input className="glow" id="remember" type="checkbox" name="rembember" />
						<label htmlFor="remember">Remember me</label>
					</div>
					<button className="primary big" type="submit">Đăng Nhập</button>
				</div>
			</div>
		</form >

	)
}
const mapDispatchToProps = (dispatch) => {
	return {
		dangNhap: (user) => {
			dispatch(dangNhapAction(user))
		}
	}
}
export default connect(null, mapDispatchToProps)(FormLogin)