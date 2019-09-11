import React, { Fragment, useEffect, useState } from 'react';
import './Seat.css'
import { connect } from 'react-redux';
import { datGheAction } from '../../../Redux/Actions/MovieAction'

function Seat(props) {

  let { ghe } = props
  let [state, setState] = useState({
    dangDat: false
  })

  const datVe = () => {
    setState({
      dangDat: !state.dangDat
    })
  }

  useEffect(() => {
    let gheDangDat = {
      maGhe: ghe.maGhe,
      stt: ghe.stt,
      giaVe: ghe.giaVe,
      dangDat: state.dangDat
    }
    props.datGhe(gheDangDat);
  }, [state])

  const renderGhe = () => {
    if (ghe.daDat) {
      return (
        <button className="ghe gheDaDat" disabled>x</button>
      )
    }
    else {
      if (state.dangDat) {
        return <button onClick={datVe} className="ghe gheDangDat">{ghe.stt}</button>
      } else {
        if (ghe.loaiGhe === 'Vip') {
          return <button onClick={datVe} className="ghe gheVip">{ghe.stt}</button>
        }
        return <button onClick={datVe} className="ghe">{ghe.stt}</button>
      }
    }
  }

  return (
    <Fragment>
      {renderGhe()}
    </Fragment>
  )
}
const mapDisPatchToProps = (dispatch) => {
  return {
    datGhe: (gheDangDat) => {
      dispatch(datGheAction(gheDangDat))
    }
  }
}
export default connect(null, mapDisPatchToProps)(Seat)