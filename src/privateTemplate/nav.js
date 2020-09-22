import React from 'react';
import Logo from './source/img/light-logo.png';
import avatar from './source/img/avatar.png';
import avatar2 from './source/img/avatar2.png';
import avatar3 from './source/img/avatar3.png';
import avatar4 from './source/img/avatar4.png';

function Nav() {
    return (
        <nav className="navbar navbar-fixed-top" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only>Toggle navigation"></span>
                    <i className="material-icons>apps"></i>
                </button>
                <a className="navbar-brand" href="index.html">
                    <img className="main-logo" src={Logo} alt="" />
                </a>
            </div>
            <div className="nav-container">
                <ul className="nav navbar-nav hidden-xs">
                    <li>
                        <a id="fullscreen" href="#">
                            <i className="material-icons">fullscreen</i>
                        </a>
                    </li>
                    <li className="hidden-xs">
                        <a className="search-trigger" href="#">
                                <i className="material-icons">search</i>
                        </a>
                        <div className="fullscreen-search-overlay" id="search-overlay">
                            <a href="#" className="fullscreen-close" id="fullscreen-close-button">
                                <i className="ti-close"></i>
                            </a>
                            <div id="fullscreen-search-wrapper">
                                <form id="fullscreen-searchform" action="">
                                    <input value="" placeholder="Type keyword(s) here" id="fullscreen-search-input"/>
                                    <i className="ti-search fullscreen-search-icon">
                                        <input value="" type="submit"/>
                                    </i>
                                </form>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a id="menu-toggle" href="#">
                            <i className="material-icons">apps</i>
                        </a>
                    </li>
                    <li className="dropdown hidden-sm">
                        <a href="#" className="dropdown-toggle material-ripple" data-toggle="dropdown">Dropdown 
                            <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Dropdown Link 1</a></li>
                            <li><a href="#">Dropdown Link 2</a></li>
                            <li><a href="#">Dropdown Link 3</a></li>
                            <li className="dropdown dropdown-submenu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown Link 4</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Submenu Link 4.1</a></li>
                                    <li><a href="#">Submenu Link 4.2</a></li>
                                    <li><a href="#">Submenu Link 4.3</a></li>
                                    <li><a href="#">Submenu Link 4.4</a></li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-submenu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown Link 5</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Submenu Link 5.1</a></li>
                                    <li><a href="#">Submenu Link 5.2</a></li>
                                    <li><a href="#">Submenu Link 5.3</a></li>
                                    <li className="divider"></li>
                                    <li className="dropdown dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Submenu Link 5.4</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Submenu Link 5.4.4.1</a></li>
                                            <li><a href="#">Submenu Link 5.4.4.2</a></li>
                                            <li><a href="#">Submenu Link 5.4.4.3</a></li>
                                            <li><a href="#">Submenu Link 5.4.4.4</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown mega-dropdown hidden-sm">
                        <a href="#" className="dropdown-toggle material-ripple" data-toggle="dropdown">Megamenu 
                            <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu mega-dropdown-menu">
                            <li className="row">
                                <div className="col-menu col-md-3">
                                    <ul className="menu-col">
                                        <li><a href="buttons.html"><i className="fa fa-window-minimize"></i>Buttons</a></li>
                                        <li><a href="tabs.html"><i className="fa fa-tablet"></i>Tab</a></li>
                                        <li><a href="notification.html"><i className="fa fa-exclamation-triangle"></i>Notification</a></li>
                                        <li><a href="tree-view.html"><i className="fa fa-tree"></i>Tree View</a></li>
                                        <li><a href="progressbars.html"><i className="fa fa-minus"></i>Progressber</a></li>
                                        <li><a href="list.html"><i className="fa fa-list-ol"></i>List View</a></li>
                                        <li><a href="typography.html"><i className="fa fa-text-width"></i>Typography</a></li>
                                        <li><a href="panels.html"><i className="fa fa-keyboard-o"></i>Panels</a></li>
                                    </ul>
                                </div>
                                <div className="col-menu col-md-3">
                                    <ul className="menu-col">
                                        <li><a href="modals.html"><i className="fa fa-file-text-o"></i>Modals</a></li>
                                        <li><a href="icheck_toggle_pagination.html"><i className="fa fa-check-square-o"></i>iCheck, Toggle</a></li>
                                        <li><a href="labels-badges-alerts.html"><i className="fa fa-exclamation"></i>labels, Badges, Alerts</a></li>
                                        <li><a href="charts_flot.html"><i className="fa fa-area-chart"></i>Flot Chart</a></li>
                                        <li><a href="charts_Js.html"><i className="fa fa-bar-chart"></i>Chart js</a></li>
                                        <li><a href="charts_morris.html"><i className="fa fa-pie-chart"></i>Morris Charts</a></li>
                                        <li><a href="charts_sparkline.html"><i className="fa fa-line-chart"></i>Sparkline Charts</a></li>
                                        <li><a href="maps_data.html"><i className="fa fa-map-marker"></i>Data Maps</a></li>
                                    </ul>
                                </div>
                                <div className="col-menu col-md-3">
                                    <ul className="menu-col">
                                        <li><a href="maps_jvector.html"><i className="fa fa-puzzle-piece"></i>Jvector Maps</a></li>
                                        <li><a href="maps_google.html"><i className="fa fa-google"></i>Google map</a></li>
                                        <li><a href="maps_snazzy.html"><i className="fa fa-map-signs"></i>Snazzy Map</a></li>
                                        <li><a href="widgets.html">
                                            <i className="fa fa-windows"></i> <span>Widgets</span>
                                            <span className="pull-rightr">
                                                <small className="label pull-right bg-green">new</small>
                                            </span>
                                        </a>
                                        </li>
                                        <li><a href="table.html"><i className="fa fa-table"></i>Simple tables</a></li>
                                        <li><a href="dataTables.html"><i className="ti-layout-tab-window"></i>Data tables</a></li>
                                        <li><a href="footable.html"><i className="ti-layout-width-default"></i>FooTable</a></li>
                                        <li><a href="x-editable.html"><i className="ti-close"></i>X-editable</a></li>
                                    </ul>
                                </div>
                                <div className="col-menu col-md-3">
                                    <ul className="menu-col">
                                        <li><a href="icons_bootstrap.html"><i className="fa fa-bold"></i>Bootstrap Icons</a></li>
                                        <li><a href="icons_fontawesome.html"><i className="fa fa-fort-awesome"></i>Fontawesome Icon</a></li>
                                        <li><a href="icons_flag.html"><i className="fa fa-flag-checkered"></i>Flag Icons</a></li>
                                        <li><a href="icons_material.html"><i className="fa fa-meetup"></i>Material Icons</a></li>
                                        <li><a href="icons_weather.html"><i className="fa fa-bolt"></i>Weather Icons </a></li>
                                        <li><a href="icons_line.html"><i className="fa fa-lemon-o"></i>Line Icons</a></li>
                                        <li><a href="icons_pe.html"><i className="fa fa-diamond"></i>Pe Icons</a></li>
                                        <li><a href="icon_socicon.html"><i className="fa fa-share-alt"></i>Socicon Icons</a></li>
                                    </ul>
                                </div>
                                <div className="col-menu col-md-3">
                                    <ul className="menu-col">
                                        <li><a href="invoice.html"><i className="fa fa-file-text-o"></i>Invoice</a></li>
                                        <li><a href="timeline.html"><i className="fa fa-hourglass-o"></i>Vertical timeline</a></li>
                                        <li><a href="horizontal_timeline.html"><i className="fa fa-hourglass-end"></i>Horizontal timeline</a></li>
                                        <li><a href="pricing.html"><i className="fa fa-usd"></i>Pricing Table</a></li>
                                        <li><a href="slider.html"><i className="fa fa-sliders"></i>Slider</a></li>
                                        <li><a href="carousel.html"><i className="fa fa-long-arrow-left"></i>Carousel</a></li>
                                        <li><a href="code_editor.html"><i className="fa fa-code"></i>Code editor</a></li>
                                        <li>
                                            <a href="calender.html">
                                                <i className="ti-calendar"></i><span>Calendar</span>
                                                <span className="pull-right">
                                                    <small className="label pull-right bg-red m-r-5">9</small>
                                                    <small className="label pull-right bg-yellow m-r-5">29</small>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="https://themeforest.net/item/adminpage-responsive-bootstrap-admin-template-dashboard/20281702?s_rank=5" target="_blank" className="btn-buy hidden-xs hidden-sm hidden-md">Buy now $25</a></li>
                </ul>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="material-icons">chat</i>
                            <span className="label label-danger">9</span>
                        </a>
                        <ul className="dropdown-menu dropdown-messages">
                            <li className="rad-dropmenu-header"><a href="#">New Messages</a></li>
                            <li>
                                <a href="#" className="rad-content">
                                    <div className="inbox-item">
                                        <div className="inbox-item-img"><img src={avatar} className="img-circle" alt="" /></div>
                                        <strong className="inbox-item-author">Naeem Khan</strong>
                                        <span className="inbox-item-date">-13:40 PM</span>
                                        <p className="inbox-item-text">Hey! there I'm available...</p>
                                        <span className="profile-status available pull-right"></span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="rad-content">
                                    <div className="inbox-item">
                                        <div className="inbox-item-img"><img src={avatar2} className="img-circle" alt="" /></div>
                                        <strong className="inbox-item-author">Sala Uddin</strong>
                                        <span className="inbox-item-date">-13:40 PM</span>
                                        <p className="inbox-item-text">Hey! there I'm available...</p>
                                        <span className="profile-status away pull-right"></span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="rad-content">
                                    <div className="inbox-item">
                                        <div className="inbox-item-img"><img src={avatar3} className="img-circle" alt="" /></div>
                                        <strong className="inbox-item-author">Mozammel</strong>
                                        <span className="inbox-item-date">-13:40 PM</span>
                                        <p className="inbox-item-text">Hey! there I'm available...</p>
                                        <span className="profile-status busy pull-right"></span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="rad-content">
                                    <div className="inbox-item">
                                        <div className="inbox-item-img"><img src={avatar4} className="img-circle" alt="" /></div>
                                        <strong className="inbox-item-author">Tanzil Ahmed</strong>
                                        <span className="inbox-item-date">-13:40 PM</span>
                                        <p className="inbox-item-text">Hey! there I'm available...</p>
                                        <span className="profile-status offline pull-right"></span>
                                    </div>
                                </a>
                            </li>
                            <li className="rad-dropmenu-footer"><a href="#">View All messages</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="material-icons">flag</i>
                            <span className="label label-success">4</span>
                        </a>
                        <ul className="dropdown-menu dropdown-tasks">
                            <li className="rad-dropmenu-header"><a href="#">Your Task</a></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p><strong>Task 1</strong>
                                            <span className="pull-right sm-text">40% Complete</span></p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: "40%"}}>
                                                <span className="sr-only">40% Complete (success)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p><strong>Task 2</strong>
                                            <span className="pull-right sm-text">20% Complete</span></p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{ width: "20%" }}>
                                                <span className="sr-only">20% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p><strong>Task 3</strong>
                                            <span className="pull-right sm-text">60% Complete</span></p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: "60%" }}>
                                                <span className="sr-only">60% Complete (warning)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p><strong>Task 4</strong>
                                            <span className="pull-right sm-text">80% Complete</span></p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: "80%" }}>
                                                <span className="sr-only">80% Complete (danger)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="rad-dropmenu-footer"><a href="#">See All Tasks</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="material-icons">add_alert</i>
                            <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                        </a>
                        <ul className="dropdown-menu dropdown-alerts">
                            <li className="rad-dropmenu-header"><a href="#">Your Notifications</a></li>
                            <li>
                                <a className="rad-content" href="#">
                                    <div className="pull-left"><i className="fa fa-html5 fa-2x color-red"></i>
                                    </div>
                                    <div className="rad-notification-body">
                                        <div className="lg-text">Introduction to fetch()</div>
                                        <div className="sm-text">The fetch API</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="rad-content" href="#">
                                    <div className="pull-left"><i className="fa fa-bitbucket fa-2x color-violet"></i>
                                    </div>
                                    <div className="rad-notification-body">
                                        <div className="lg-text">Check your BitBucket</div>
                                        <div className="sm-text">Last Chance</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="rad-content" href="#">
                                    <div className="pull-left"><i className="fa fa-google fa-2x color-info"></i>
                                    </div>
                                    <div className="rad-notification-body">
                                        <div className="lg-text">Google Account</div>
                                        <div className="sm-text">example@gmail.com</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="rad-content" href="#">
                                    <div className="pull-left"><i className="fa fa-amazon fa-2x color-green"></i>
                                    </div>
                                    <div className="rad-notification-body">
                                        <div className="lg-text">Amazon Simple Notification ...</div>
                                        <div className="sm-text">Lorem Ipsum is simply dummy text...</div>
                                    </div>
                                </a>
                            </li>
                            <li className="rad-dropmenu-footer"><a href="#">See all notifications</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="material-icons">person_add</i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="profile.html"><i className="ti-user"></i>&nbsp; Profile</a></li>
                            <li><a href="mailbox.html"><i className="ti-email"></i>&nbsp; My Messages</a></li>
                            <li><a href="lockscreen.html"><i className="ti-lock"></i>&nbsp; Lock Screen</a></li>
                            <li><a href="#"><i className="ti-settings"></i>&nbsp; Settings</a></li>
                            <li><a href="login.html"><i className="ti-layout-sidebar-left"></i>&nbsp; Logout</a></li>
                        </ul>
                    </li>
                    <li className="log_out">
                        <a href="login.html">
                            <i className="material-icons">power_settings_new</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
