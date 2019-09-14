import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { layThongTinNguoiDungAction, capNhatThongTinNguoiDungAction } from '../../../Redux/Actions/UserAction';
import './InfoPage.css'

function InfoPage(props) {

    const [edit, setEdit] = useState(false);
    const [values, setValues] = useState({
        taiKhoan:JSON.parse(localStorage.getItem('userLogin')).taiKhoan,
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: JSON.parse(localStorage.getItem('userLogin')).maNhom,
        maLoaiNguoiDung:JSON.parse(localStorage.getItem('userLogin')).maLoaiNguoiDung,
        hoTen: ""
    })    
  
    const handleSubmid = (e) => {
        e.preventDefault();
        props.capNhatThongTinNguoiDung(values)
        console.log(values);
    };
    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        let taiKhoanNguoiDung = {
            "taiKhoan": JSON.parse(localStorage.getItem('userLogin')).taiKhoan
        }
        props.layThongTinNguoiDung(taiKhoanNguoiDung)
    }, [])

    let { thongTinNguoiDung } = props;
    
    const renderEdit = () => {
        return (
            <form className="col-md-6" onSubmit={handleSubmid} >
                <div className="form-group">
                    <input name="hoTen" type="text" onChange={handleChange} placeholder="Tên" />
                </div>
                <div className="form-group">
                    <input name="email" type="text" onChange={handleChange} placeholder="Email" />
                </div>
                <div className="form-group">
                    <input name="soDt" type="text" onChange={handleChange} placeholder="Số Điện Thoại" />
                </div>
                <div className="form-group">
                    <input name="matKhau" type="text" onChange={handleChange} placeholder="Mật khẩu" />
                </div>
                <button type="submit">Xác nhận</button>
            </form>
        )
    }

    return (
        <Fragment>
            <div className="container">
                <div className="userInfo">
                    <h3 className="text-center">Thông Tin Cá Nhân</h3>
                    <div className="ndInfo row">
                        <div className="col-md-5">
                            <p>Tài Khoản: {thongTinNguoiDung.taiKhoan}</p>
                            <p>Tên: {thongTinNguoiDung.hoTen}</p>
                            <p>Email: {thongTinNguoiDung.email}</p>
                            <p>Số điện thoại: {thongTinNguoiDung.soDT}</p>
                            <p>Mật khẩu: {thongTinNguoiDung.matKhau}</p>
                            <button onClick={() => setEdit(!edit)}>Thay đổi thông tin</button>
                        </div>
                        <div className="mt-5">
                        {edit ?
                            renderEdit() : ''}
                        </div>
                    </div>
                </div>
                <div className="bookingInfo">
                    <h3 className="text-center">Thông Tin Đặt Vé</h3>
                    <div>
                        {thongTinNguoiDung.thongTinDatVe ? thongTinNguoiDung.thongTinDatVe.map((ttDatVe, index) => {
                            return (<div key={index}>
                                <p>Phim: {ttDatVe.tenPhim}</p>
                                <p>Xuất chiếu: {ttDatVe.ngayDat}</p>
                                <p>Thời Lượng: {ttDatVe.thoiLuongPhim} phút</p>
                                <p>
                                    <span>Tên Rạp: {ttDatVe.ghe.tenHeThongRap} </span>
                                    <span> - {ttDatVe.ghe.tenCumRap}</span>
                                    <span> - Ghế :{ttDatVe.ghe.tenGhe}</span>
                                </p>
                            </div>)
                        }) : ''}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        thongTinNguoiDung: state.userReducer.thongTinNguoiDung,    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinNguoiDung: (taiKhoan) => {
            dispatch(layThongTinNguoiDungAction(taiKhoan))
        },
        capNhatThongTinNguoiDung: (thongTinNguoiDung) => {
            dispatch(capNhatThongTinNguoiDungAction(thongTinNguoiDung))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)