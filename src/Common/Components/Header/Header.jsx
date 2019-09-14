import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.svg';
import './Header.css';
import { FaAlignRight } from 'react-icons/fa';
import '../Modal/Modal'
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import FormSignin from '../Form/FormSignin'
import FormLogin from '../Form/FormLogin';
import { dangXuatAction } from '../../../Redux/Actions/UserAction'

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		}
	}
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}
	// _renderBtnLogin() {
	// 	let user = JSON.parse(localStorage.getItem('userLogin'));
	// 	if (!user || !user.taiKhoan) return (
	// 		<li className='header-item' data-toggle="modal" data-target="#modelId"  >
	// 			<div> Đăng Nhập</div>
	// 		</li>
	// 	)
	// 	return (
	// 		<li className="header-item user" >
	// 			{user.taiKhoan}
	// 			<div className="user-control">
	// 				<p ><Link to={`/thongTinCaNhan`}>Trang cá nhân</Link></p>
	// 				<p onClick={() => this.props.dangXuat()} ><Link to={`/`}>Đăng xuất</Link></p>
	// 			</div>
	// 		</li>
	// 	)
	// }

	render() {
		let user = JSON.parse(localStorage.getItem('userLogin'));
		return (
			<div className="myHeader">
				<div className="header-center container">
					<div className="header-content">
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
						<button className="header-btn">
							<FaAlignRight className="header-icon" onClick={this.handleToggle} />
						</button>
					</div>
					<ul className={this.state.isOpen ? "header-menu header-showmenu" : "header-menu"}>
						<li className='header-item'><a href="#listMovie">Lịch Chiếu</a></li>
						<li className='header-item'><a href="#theaters">Cụm Rạp</a></li>
						{this.props.isLogin ?
							<li className="header-item user" >
								<div>{user.taiKhoan}</div>
								<div className="user-control">
									<p ><Link to={`/thongTinCaNhan`}>Trang cá nhân</Link></p>
									<p onClick={() => this.props.dangXuat()} ><Link to={`/`}>Đăng xuất</Link></p>
								</div>
							</li>

							: <li className='header-item' data-toggle="modal" data-target="#modelId"  >
								<div> Đăng Nhập</div>
							</li>}
					</ul>
				</div>
				<Modal Component={FormSignin} tittle="Đăng Nhập" />
				<Modal Component={FormLogin} tittle="Đăng Ký" />
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		isLogin: state.userReducer.isLogin,
		userLogin: state.userReducer.userLogin
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		dangXuat: () => {
			dispatch(dangXuatAction())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)