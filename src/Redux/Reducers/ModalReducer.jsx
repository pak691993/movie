import React from 'react';
import * as types from '../Constants/ModalConstant'



const stateDefault = {
    ComponentModal: function () { return <p></p> }
    // ComponentModal:[]
}
const ModalReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case types.OPEN_FORM: {
            state.ComponentModal = action.ComponentModal;
            return { ...state };
        }
    }
    return { ...state }
}
export default ModalReducer;