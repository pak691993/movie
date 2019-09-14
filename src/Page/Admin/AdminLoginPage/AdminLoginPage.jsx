import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { dangNhapAction } from '../../../Redux/Actions/UserAction';
import './AdminLoginPage.css'
import AdminPage from '../AdminPage/AdminPage';


class AdminLoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: '',
      matKhau: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onLogin = (e) => {
    e.preventDefault()
    this.props.dangNhap(this.state)
  }

  render() {
    var userLogin = JSON.parse(localStorage.getItem('userLogin'));
    if (userLogin != null && userLogin.maLoaiNguoiDung === 'QuanTri') {
      return <Redirect to="/admin" Component={AdminPage} />
    }

    return (
      <form className="adminLogin container" onSubmit={this.onLogin}>
        <div className="form-group">
          <label >Admin</label>
          <input name="taiKhoan" value={this.state.taiKhoan} onChange={this.handleChange} type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label >Passưord</label>
          <input name="matKhau" value={this.state.matKhau} onChange={this.handleChange} type="text" className="form-control" />
        </div>
        <button type="submit">Login</button>
        <NavLink to="/admin" ><button>Admin</button></NavLink>
      </form>
    )
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
    dangNhap: (adminLogin) => {
      dispatch(dangNhapAction(adminLogin))
    }
  }
}
export default connect(null, mapDispatchtoProps)(AdminLoginPage)