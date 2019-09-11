import * as types from '../Constants/ModalConstant.jsx'

export const pushComponentAction = (Component) => {
    return {
        type: types.OPEN_FORM,
        ComponentModal: Component
    }
}