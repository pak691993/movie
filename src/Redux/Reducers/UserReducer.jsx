import * as types from '../Constants/UserConstant';

const stateDefault = {
    isLogin: localStorage.getItem('userLogin') ? localStorage.getItem('userLogin') : false,
    userLogin: [],
    userSignin: [],
    thongTinNguoiDung: [],
    thongTinNguoiDungCapNhat: []
}
const userReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case types.DANG_NHAP: {
            state.isLogin = action.isLogin;
            state.userLogin = action.userLogin;
            return { ...state }
        }
        case types.DANG_KY: {
            return { ...state }
        }
        case types.DANG_XUAT: {
            state.isLogin = action.isLogin;
            return { ...state }
        }
        case types.LAY_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung
            return { ...state }
        }
        case types.CAP_NHAT_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDungCapNhat = action.thongTinNguoiDungCapNhat
            return { ...state }
        }
        default:
    }
    return { ...state }
}
export default userReducer