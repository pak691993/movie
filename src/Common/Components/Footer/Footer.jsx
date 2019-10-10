import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" >
          <div className="container">
            <div className="row ">
              <div className="col-md-4 col-sm-3 col-3 ">
                <p className="title">Movie Start</p>
                  <div >
                    <span>VỀ CHÚNG TÔI</span><br />
                    <span >FAQ</span><br />
                    <span >LIÊN HỆ</span>
                  </div>
              </div>
              <div className="col-md-4 col-sm-7 col-5">
                <p className="title">ĐỐI TÁC</p>
                <div className="row col-md-12 col-sm-12 col-12">
                  <div>
                    <a href="http://bhdstar.vn" title="BHD">
                      <img alt="/" className="footerLogo" src="https://www.bhdstar.vn/wp-content/uploads/2016/05/logo.png" />
                    </a>
                  </div>
                  <div>
                    <a href="http://galaxycine.vn" title="Galaxy">
                      <img alt="/" className="footerLogo" src="https://www.galaxycine.vn/website/images/galaxy-logo-mobile.png" />
                    </a>
                  </div>
                  <div>
                    <a href="http://cinestar.com.vn" title="Cinestar">
                      <img alt="/" className="footerLogo" src="https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png" />
                    </a>
                  </div>
                </div>
                <div className="row col-md-12 col-sm-12 col-12">
                  <div>
                    <a href="http://cgv.vn" title="cgv">
                      <img alt="/" className="footerLogo" src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" />
                    </a>
                  </div>
                  <div>
                    <a href="http://lottecinemavn.com" title="Lotte Cinema">
                      <img alt="/" className="footerLogo" src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"/>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.megagscinemas.vn" title="MegaGS">
                      <img alt="/" className="footerLogo" src="http://movie0706.cybersoft.edu.vn/hinhanh/megags.png" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-2 col-4">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-7">
                    <p className="title">MOBILE APP</p>
                    <a href="/" title="Apple App">
                      <img alt="/" className="iconApp" src="https://123phim.vn/app/assets/img/icons/apple-logo.png" />
                    </a>
                    <a href="/" title="Android App">
                      <img alt="/" className="iconApp" src="https://123phim.vn/app/assets/img/icons/android-logo.png" />
                    </a>
                  </div>
                  <div className="col-md-6 col-sm-6 col-5">
                    <p className="title">SOCIAL</p>
                    <span title="Facebook social">
                      <img alt="/" className="iconApp" src="https://123phim.vn/app/assets/img/icons/facebook-logo.png" />
                    </span>
                    <span title="Zalo social">
                      <img alt="/" className="iconApp" src="https://123phim.vn/app/assets/img/icons/zalo-logo.png" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </footer >
    )
  }
}
