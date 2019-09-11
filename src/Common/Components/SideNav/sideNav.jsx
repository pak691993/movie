import React, { Component } from 'react';
import logo from '../../../img/logo.svg'
import './sideNav.css'

export default class SideNav extends Component {
  render() {
    return (
      <div className="wrapper">

         <div className="sidebar" data-color="orange">
        <div className="logo">

          <img src={logo} alt="logo" />

        </div>
        <div className="sidebar-wrapper ps ps--active-y" id="sidebar-wrapper">
          <ul className="nav">
            <li className="active ">
              <a href="./dashboard.html">
                <i className="now-ui-icons design_app" />
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="./icons.html">
                <i className="now-ui-icons education_atom" />
                <p>Icons</p>
              </a>
            </li>
            <li>
              <a href="./map.html">
                <i className="now-ui-icons location_map-big" />
                <p>Maps</p>
              </a>
            </li>
            <li>
              <a href="./notifications.html">
                <i className="now-ui-icons ui-1_bell-53" />
                <p>Notifications</p>
              </a>
            </li>
            <li>
              <a href="./user.html">
                <i className="now-ui-icons users_single-02" />
                <p>User Profile</p>
              </a>
            </li>
            <li>
              <a href="./tables.html">
                <i className="now-ui-icons design_bullet-list-67" />
                <p>Table List</p>
              </a>
            </li>
            <li>
              <a href="./typography.html">
                <i className="now-ui-icons text_caps-small" />
                <p>Typography</p>
              </a>
            </li>
            <li className="active-pro">
              <a href="./upgrade.html">
                <i className="now-ui-icons arrows-1_cloud-download-93" />
                <p>Upgrade to PRO</p>
              </a>
            </li>
          </ul>
          <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, right: 0, height: 359 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 244 }} /></div></div>
      </div>
      </div>
    )
  }
}
