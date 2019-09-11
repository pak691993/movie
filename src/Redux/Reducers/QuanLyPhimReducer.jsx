import * as types from '../Constants/MovieConstant';
const stateDefault = {
    danhSachPhim: [],
    chiTietPhim: {},
    thongTinLichChieu: [],
    danhSachGheDangDat: [],
    thongTinHeThongRap: [],
    thongTinLichChieuHeThongRap: [],
    heThongRap: [],
}

export const StorePhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case types.LAY_DANH_SACH_PHIM: {
            state.danhSachPhim = action.danhSachPhim
            return { ...state }
        }
        case types.LAY_THONG_TIN_HE_THONG_RAP: {
            state.thongTinHeThongRap = action.thongTinHeThongRap
            return { ...state }
        }
        case types.LAY_THONG_TIN_LICH_CHIEU: {
            state.thongTinLichChieu = action.thongTinLichChieu
            return { ...state }
        }
        case types.LAY_CHI_TIET_PHIM: {
            state.chiTietPhim = action.chiTietPhim
            return { ...state }
        } case types.LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP: {
            state.thongTinLichChieuHeThongRap = action.thongTinLichChieuHeThongRap;
            return { ...state }
        }
        case types.DAT_GHE: {

            let dsGheDangDatUpdate = [...state.danhSachGheDangDat];
            if (action.gheDangDat.dangDat)
            {
                dsGheDangDatUpdate.push(action.gheDangDat);
            } else {
                dsGheDangDatUpdate = dsGheDangDatUpdate.filter(gheDangDat => gheDangDat.maGhe !== action.gheDangDat.maGhe);
            }
            state.danhSachGheDangDat = dsGheDangDatUpdate;
            console.log(state.danhSachGheDangDat);
            return { ...state }
        }

    }

    return { ...state }
}
export default StorePhimReducer