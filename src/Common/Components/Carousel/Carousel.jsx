import React, { Fragment, useEffect, useState } from 'react';
import './Carousel.css';
// import { connect } from 'react-redux'
// import { layDanhSachPhimAction } from '../../../Redux/Actions/MovieAction';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Carousel(props) {

	// const [danhSach, setDanhSach] = useState([]);
	// var settings = {
	//     dots: true,
	//     infinite: true,
	//     speed: 500,
	//     slidesToShow: 1,
	//     slidesToScroll: 1,
	// }
	// useEffect(() => {
	//     props.layDanhSachPhim();

	// }, [])


	// const _renderSlider = () => {
	//     const { danhSachPhim } = props;
	//     // if (!danhSachPhim) return;
	// // let temp = danhSachPhim.filter((item,index)=> index<3).map((phim, index) => {
	// let temp = danhSachPhim.map((phim, index) => {
	//     return (
	//         <div key={index}>
	//             <img src={phim.hinhAnh} alt={phim.maPhim} />
	//             <p>{phim.tenPhim}</p>
	//         </div>
	//     )
	// });

	//     return (
	//         <Slider {...settings}>
	//             {temp}
	//         </Slider>
	//     )

	// const { danhSachPhim } = props;
	return (
		<Fragment>
			{/* {_renderSlider()} */}
			<div className="myCarousel">
				<div id="carouselId" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselId" data-slide-to={0} className="active" />
						<li data-target="#carouselId" data-slide-to={1} />
						<li data-target="#carouselId" data-slide-to={2} />
					</ol>
					<div className="carousel-inner" role="listbox">

						<div className="carousel-item active">
							<img src="https://s3img.vcdn.vn/123phim/2019/08/angel-15671377090495.jpg" alt="First slide" />
						</div>
						<div className="carousel-item">
							<img src="https://s3img.vcdn.vn/123phim/2019/08/hoi-15653240752724.jpg" alt="Second slide" />
						</div>
						<div className="carousel-item">
							<img src="https://s3img.vcdn.vn/123phim/2019/09/buommmm-15677399454407.jpg" alt="Third slide" />
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>



		</Fragment>
	)
}
// const mapStateToProps = (state) => {
//     return {
//         danhSachPhim: state.StorePhimReducer.danhSachPhim
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         layDanhSachPhim: () => {
//             dispatch(layDanhSachPhimAction())
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Carousel)