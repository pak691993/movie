import axios from 'axios';
import * as types from '../Constants/UserConstant';
import * as config from '../../Common/Config/config';

let api = config.domian

export const dangNhapAction = (user) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: api + 'QuanLyNguoiDung/DangNhap',
            data: user
        }).then(result => {
            localStorage.setItem(config.accessToken, result.data.accessToken)
            localStorage.setItem(config.userLogin, JSON.stringify(result.data))
            dispatch({
                type: types.DANG_NHAP,
                isLogin: true,
                userLogin: result.data
            })
        }).catch(error => {
            dispatch({
                type: types.DANG_NHAP,
                isLogin: false
            })
            console.log(error.response.data);
        })
    }
}
export const dangKyAction = (user) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: api + 'QuanLyNguoiDung/DangKy',
            data: user
        }).then(result => {
            dispatch({
                type: types.DANG_KY,
                userSignin: result.data
            })
        }).catch(error => {
            console.log(error.response.data);
        })
    }

}
export const dangXuatAction = () => {
    let userLogin = {
        accessToken: '',
        email: "",
        hoTen: "",
        maLoaiNguoiDung: "",
        maNhom: "",
        soDT: "",
        taiKhoan: ""
    }
    return dispatch => {
        localStorage.setItem('userLogin',JSON.stringify(userLogin))
        localStorage.removeItem('accessToken')
        dispatch({
            type: types.DANG_XUAT,
            isLogin: false,
        })
    }

}
export const layThongTinNguoiDungAction = (taiKhoan) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: api + `QuanLyNguoiDung/ThongTinTaiKhoan`,
            data: taiKhoan,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then(result => {
            dispatch({
                type: types.LAY_THONG_TIN_NGUOI_DUNG,
                thongTinNguoiDung: result.data
            })
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}
export const capNhatThongTinNguoiDungAction = (thongTinNguoiDung) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: api + `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            data: thongTinNguoiDung,
            headers: {
                "Authorization": "Bearer  " + localStorage.getItem('accessToken')
            }
        }).then(result => {
            dispatch({
                type: types.CAP_NHAT_THONG_TIN_NGUOI_DUNG,
                thongTinNguoiDungCapNhat: result.data
            })
        }).catch(error => {
            // console.log(error.response.data);

            alert('that bai' + error.response.data)

        })
    }
}