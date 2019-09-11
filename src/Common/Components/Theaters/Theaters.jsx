import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { layThongTinHeThongRapAction, layThongTinLichChieuHeThongRapAction } from '../../../Redux/Actions/MovieAction';
import { NavLink } from 'react-router-dom';
import './Theaters.css'

function Theaters(props) {

	useEffect(() => {
		props.layThongTinHeThongRap();
	}, [])
	
	let { thongTinHeThongRap } = props
	let { thongTinLichChieuHTR } = props


	const handleClick = (maRap) => {
		props.laythongTinLichChieuHeThongRap(maRap)
	}

	// return (
	// 	<div id="theaters">
	// 		<div className="container">
	// 			<div className="nav nav-tabs">
	// {thongTinHeThongRap ? thongTinHeThongRap.map((htr, index) => {
	// 	return (
	// 		<div key={index}>
	// 			<div className="theaters-nav-items active" >
	// 				<a onClick={() => handleClick(htr.maHeThongRap)} className="nav-link">
	// 					<img className="theaters-logo" src={htr.logo} />
	// 				</a>
	// 			</div>

	// 			<div className="theaters-tab-content  " >
	// 				{thongTinLichChieuHTR.map((cumRap, index) => {
	// 					if (cumRap.maHeThongRap === htr.maHeThongRap) {
	// 						return (
	// 							<div className="tablePhim active" key={index}>
	// 								{cumRap.lstCumRap.map((rap, index) => {
	// 									return (
	// 										<div className="list row " key={index}>
	// 											<div className="rap col-md-4">
	// 												<a href={`#${rap.tenCumRap}`}>{rap.tenCumRap}</a>
	// 											</div>
	// 											<div className="phim col-md-8">
	// 												<div>
	// 													{rap.danhSachPhim.map((phim, index) => {
	// 														return (
	// 															<div key={index} >
	// 																<div>{phim.tenPhim}</div>
	// 																<NavLink to={`/booking/${phim.maPhim}`}>{phim.ngayChieuGioChieu}</NavLink>

	// 															</div>
	// 														)
	// 													})}
	// 												</div>
	// 											</div>
	// 										</div>
	// 									)
	// 								})}
	// 							</div>
	// 						)
	// 					}
	// 				})}
	// 			</div>
	// 		</div>
	// 	)
	// }) : ''}
	// 			</div>
	// 		</div>
	// 	</div>
	// )
	return (
		<div id="theaters" >
			<div className="container">
				<ul className="nav">
					{thongTinHeThongRap ? thongTinHeThongRap.map((htr, index) => {
						if (index == 0) {
							return (
								<li key={index} className="nav-item active">
									<a data-toggle="tab" href={`#${htr.maHeThongRap}`} onClick={() => handleClick(htr.maHeThongRap)}>
										<img className="theaters-logo" src={htr.logo} />
									</a>
								</li>
							)
						}
						else {
							return (
								<li key={index} className="nav-item">
									<a data-toggle="tab" href={`#${htr.maHeThongRap}`} onClick={() => handleClick(htr.maHeThongRap)}>
										<img className="theaters-logo" src={htr.logo} />
									</a>
								</li>
							)
						}
					}) : ''}
				</ul>

				<div className="tab-content">
					{thongTinLichChieuHTR ? thongTinLichChieuHTR.map((cumRap, index) => {
						if (index == 0) {
							return (
								<div key={index} className="tablePhim tab-pane active" id={cumRap.maHeThongRap}>
									{cumRap.lstCumRap ? cumRap.lstCumRap.map((rap, index) => {
										console.log(rap);

										return (
											<div key={index} className="list row">
												<div className="rap col-md-4">
													<a href={`#${rap.tenCumRap}`}>{rap.tenCumRap}</a>
													<p>Địa chỉ: {rap.diaChi}</p>
												</div>
												<div className="phim col-md-8">
													<div>
														<div>{rap.danhSachPhim[0].tenPhim}</div>
														{rap ? rap.danhSachPhim.map((phim, index) => {
															return (
																<div key={index} >
																	<NavLink to={`/booking/${phim.maPhim}`}>{phim.ngayChieuGioChieu}</NavLink>
																</div>
															)
														}) : ''}
													</div>
												</div>
											</div>
										)
									}) : ''}
								</div>
							)
						}
						else {
							return (
								<div className="tablePhim tab-pane" id={cumRap.maHeThongRap} >
									{cumRap.lstCumRap ? cumRap.lstCumRap.map((rap, index) => {
										return (
											<div className="list row" key={index}>
												<div className="rap col-md-4">
													<a href={`#${rap.tenCumRap}`}>{rap.tenCumRap}</a>
												</div>
												<div className="phim col-md-8">
													<div>
														{rap ? rap.danhSachPhim.map((phim, index) => {
															const tenPhim = [...new Set(phim)];
															return (
																<div key={index} >
																	{/* <div>{tenPhim}</div>
																	<NavLink to={`/booking/${phim.maPhim}`}>{phim.ngayChieuGioChieu}</NavLink> */}
																</div>
															)
														}) : ''}
													</div>
												</div>
											</div>
										)
									}) : ''}
								</div>
							)
						}
					}) : ''}
				</div>
			</div>
			{/* <hr/>
			{_fortmatData(data).map((item)=>{
				return (
					<div>{item.maPhim}</div>
				)
			})} */}
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		thongTinHeThongRap: state.StorePhimReducer.thongTinHeThongRap,
		thongTinLichChieuHTR: state.StorePhimReducer.thongTinLichChieuHeThongRap,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		layThongTinHeThongRap: () => {
			dispatch(layThongTinHeThongRapAction())
		},

		laythongTinLichChieuHeThongRap: (maHeThongRap) => {
			dispatch(layThongTinLichChieuHeThongRapAction(maHeThongRap))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Theaters)

const _fortmatData = (arr) => {
	let temp = {};
	for (let index = 0; index < arr.length; index++) {
		const item = arr[index];
		let test = temp[item.maPhim];
		//test co hoac khong - test = item || test = undefine
		if(test){
			temp[item.maPhim].ngayChieuGioChieu.push(item.ngayChieuGioChieu)
		} else {
			temp[item.maPhim] = {...item, ngayChieuGioChieu: [item.ngayChieuGioChieu]}
		}
	}
	return Object.values(temp);
}

const data = [
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-01T10:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1351,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-01T12:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-01T14:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-01T16:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-01T18:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-01T20:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-02T10:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-02T12:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-02T14:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-02T16:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-02T18:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-02T20:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-03T10:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-03T12:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-03T14:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-03T16:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-03T18:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-03T20:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-04T10:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1360,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-04T12:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1360,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-04T14:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-04T16:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-04T18:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-04T20:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-05T10:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-05T12:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-05T14:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-05T16:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-05T18:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-05T20:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-06T10:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-06T12:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-06T14:10:00",
		"giaVe": 75000
	},
	{
		"maPhim": 1359,
		"tenPhim": "Home",
		"maRap": "512",
		"tenRap": "Rạp 2",
		"ngayChieuGioChieu": "2019-01-06T16:10:00",
		"giaVe": 75000
	}]

console.log(data);
let check  = _fortmatData(data)
console.log(check);
