import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { layThongTinNguoiDungAction, capNhatThongTinNguoiDungAction } from '../../../Redux/Actions/UserAction';
import './InfoPage.css'


function InfoPage(props) {

    const [edit, setEdit] = useState(false);
    const [values, setValues] = useState({})

    const handleSubmid = (e) => {
        e.preventDefault();
        props.capNhatThongTinNguoiDung(values)
        console.log(values);
    }



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
                <p>Tài Khoản :{thongTinNguoiDung.taiKhoan}</p>
                <div className="form-group">
                    <input name="taiKhoan" type="text" onChange={handleChange} placeholder="Tài Khoản" values={thongTinNguoiDung.taiKhoan} />
                </div>
                <div className="form-group">
                    <input name="maNhom" type="text" onChange={handleChange} placeholder="Mã Nhóm" values={thongTinNguoiDung.maNhom} />
                </div>
                <div className="form-group">
                    <input name="maLoaiNguoiDung" type="text" onChange={handleChange} placeholder="Loại người dùng" values={thongTinNguoiDung.maLoaiNguoiDung}/>
                </div>
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
        <div id="infoPage" className="container">
            <div >
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
                    {edit ?
                        renderEdit() : ''}
                </div>
            </div>
            <div className="veInfo">
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
    )
}
const mapStateToProps = (state) => {
    return {
        thongTinNguoiDung: state.userReducer.thongTinNguoiDung
    }
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