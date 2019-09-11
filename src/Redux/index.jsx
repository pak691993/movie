import { combineReducers } from 'redux'
import StorePhimReducer from './Reducers/QuanLyPhimReducer';
import ModalReducer from './Reducers/ModalReducer';
import userReducer from './Reducers/UserReducer';
const rootReducer = combineReducers({
    StorePhimReducer,ModalReducer,userReducer
})
export default rootReducer