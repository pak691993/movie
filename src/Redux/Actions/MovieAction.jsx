import * as types from '../Constants/MovieConstant'
import axios from 'axios';
import * as config from '../../Common/Config/config';

let api = config.domian
let maNhom = config.maNhom
// let maNhom = 'GP02'

export const layDanhSachPhimAction = (callback = () => { }) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: api + `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        }).then(result => {
            callback()
            dispatch({
                type: types.LAY_DANH_SACH_PHIM,
                danhSachPhim: result.data
            })
        }).catch(error => {
            // console.log(error.response.data);
        })
    }
}

export const layThongTinHeThongRapAction = () => {
    return dispatch => {
        axios({
            method: 'GET',
            url: api + 'QuanLyRap/LayThongTinHeThongRap'
        }).then(result => {
            dispatch({
                type: types.LAY_THONG_TIN_HE_THONG_RAP,
                thongTinHeThongRap: result.data
            })
        }).catch(error => {
            // console.log(error.response.data);
        })
    }
}

export const thongTinLichChieuAction = (maHeThongRap) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: api + `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`
        }).then(result => {
            dispatch({
                type: types.LAY_THONG_TIN_LICH_CHIEU,
                thongTinLichChieu: result.data,
            })
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}

export const layChiTietPhimAction = (maPhim) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: api + `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        }).then(result => {
            dispatch({
                type: types.LAY_CHI_TIET_PHIM,
                chiTietPhim: result.data
            })
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}

export const layThongTinLichChieuHeThongRapAction = (maHeThongRap) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: api + `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`
        }).then(result => {
            dispatch({
                type: types.LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
                thongTinLichChieuHeThongRap: result.data,
            })
        }).catch(error => {
            // console.log(error.response.data);
        })
    }
}

export const layChiTietPhongVeAction = (maLichChieu) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: api + `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        }).then(result => {
            dispatch({
                type: types.LAY_THONG_TIN_LICH_CHIEU,
                thongTinLichChieu: result.data
            })
        }).catch(error => {
            console.log(error.response.data)
        })
    }
}

export const datVeAction = (thongTinDatVe) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: api + `QuanLyDatVe/DatVe`,
            data: thongTinDatVe,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then(result => {
            alert(result.data);
            window.location.reload()
            dispatch({
                type: types.DAT_VE
            })
            
        }).catch(error => {
            console.log(error.response.data)
        })
    }
}

export const datGheAction = (gheDangDat) => {
    return dispatch => {
        dispatch({
            type: types.DAT_GHE,
            gheDangDat
        })
    }
}
