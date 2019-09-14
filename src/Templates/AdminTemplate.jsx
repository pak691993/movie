import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import SideNav from '../Common/Components/SideNav/sideNav';

const AdminLayout = ({ children, ...rest }) => {
  return (
    <Fragment>
      {/* <SideNav /> */}
      {children}
    </Fragment>
  )
}
const AdminTemplate = ({ Component, ...rest }) => {
  return <Route {...rest} render={(props) => {
    if (localStorage.getItem('userLogin')) {
      let userLogin = JSON.parse(localStorage.getItem('userLogin'))
      if (userLogin.maLoaiNguoiDung === 'QuanTri') {
        return (
          <AdminLayout>
            <Component {...props} />
          </AdminLayout>
        )
      }
      else {
        alert('Bạn cần quyền để truy cập liên kết này')
        return <Redirect to='/' />
      }
    }
    alert('Bạn chưa đăng nhập')
    return <Redirect to='/login' />
  }} />
}

export default AdminTemplate