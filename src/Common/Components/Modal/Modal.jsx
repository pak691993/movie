import React, { useEffect, useState } from 'react';
import './Modal.css'
import { connect } from 'react-redux';
import FormSignin from './../Form/FormSignin'
import FormLogin from './../Form/FormLogin';
import { pushComponentAction } from '../../../Redux/Actions/ModalAction'
function Modal({ Component, props, ...restParam }) {

    let ComponentLogin = FormLogin;
    let ComponentSignin = FormSignin;

    return (

        <div>
            {/* Modal */}
            <div className="myModal modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <ul className="nav">
                                <li className="nav-item mr-4">
                                    <button  onClick={() => restParam.pushComponent(ComponentLogin)} className="modalBtn" data-toggle="tab" href="#login">Đăng Nhập</button>
                                </li>
                                <li className="nav-item">
                                    <button onClick={() => restParam.pushComponent(ComponentSignin)} className="modalBtn" data-toggle="tab" href="#signin">Đăng Ký</button>
                                </li>
                            </ul>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="text-white" aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div className="tab-content bg-dark">
                            <div className="tab-pane active" id="login">
                                <div className="modal-body">
                                    <FormLogin/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="signin">
                                <div className="modal-body">
                                    <FormSignin/>
                                </div>
                            </div>
                        </div>

                        {/* <div className="modal-footer  bg-dark">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>





    )
}

const mapStateToProps = (state) => {
    return {
        Component: state.ModalReducer.ComponentModal
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        pushComponent: (Component) => {
            dispatch(pushComponentAction(Component))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);