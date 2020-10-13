import React from 'react';
import avatar from '../source/img/avatar.png';

function DashBoard() {
    return (
        <div className="content">
            <div className="content-header">
                <div className="header-icon">
                    <i className="pe-7s-tools"></i>
                </div>
                <div className="header-title">
                    <h1>Adminpage - Responsive Bootstrap Admin Template Dashboard</h1>
                    <small>Very detailed & featured admin.</small>
                    <ol className="breadcrumb">
                        <li><a href="index.html"><i className="pe-7s-home"></i> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div className="statistic-box statistic-filled-3">
                        <h2><span className="count-number">789</span>K <span className="slight"><i className="fa fa-play fa-rotate-270 text-warning"> </i> +29%</span></h2>
                        <div className="small">Social users </div>
                        <i className="ti-world statistic_icon"></i>
                        <div className="sparkline3 text-center"></div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div className="statistic-box statistic-filled-1">
                        <h2><span className="count-number">696</span>K <span className="slight"><i className="fa fa-play fa-rotate-270 text-warning"> </i> +28%</span></h2>
                        <div className="small">Visitors this Month</div>
                        <i className="ti-server statistic_icon"></i>
                        <div className="sparkline1 text-center"></div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div className="statistic-box statistic-filled-2">
                        <h2><span className="count-number">321</span>M <span className="slight"><i className="fa fa-play fa-rotate-90 c-white"> </i> +10%</span> </h2>
                        <div className="small">Total users</div>
                        <i className="ti-user statistic_icon"></i>
                        <div className="sparkline2 text-center"></div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div className="statistic-box statistic-filled-4">
                        <h2><span className="count-number">5489</span>$ <span className="slight"><i className="fa fa-play fa-rotate-90 c-white"> </i> +24%</span></h2>
                        <div className="small">Total Sales</div>
                        <i className="ti-bag statistic_icon"></i>
                        <div className="sparkline4 text-center"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="panel panel-bd ">
                        <div className="panel-body">
                            <div id="chartdiv"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 ">
                    <div className="panel panel-bd lobidrag">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <i className="ti-panel"></i>
                                <h4>CSS animations Chart</h4>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div id="chartdiv2"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="panel panel-bd lobidisable">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <i className="ti-stats-up"></i>
                                <h4>Recent Activities</h4>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <ul className="activity-list list-unstyled">
                            <li className="activity-purple">
                                <small className="text-muted">9 minutes ago</small>
                                <p>You <span className="label label-success label-pill">recommended</span> Karen Ortega</p>
                            </li>
                            <li className="activity-danger">
                                <small className="text-muted">15 minutes ago</small>
                                <p>You followed Olivia Williamson</p>
                            </li>
                            <li className="activity-warning">
                                <small className="text-muted">22 minutes ago</small>
                                <p>You <span className="text-danger">subscribed</span> to Harold Fuller</p>
                            </li>
                            <li className="activity-primary">
                                <small className="text-muted">30 minutes ago</small>
                                <p>You updated your profile picture</p>
                            </li>
                            <li>
                                <small className="text-muted">35 minutes ago</small>
                                <p>You deleted homepage.psd</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="panel panel-bd lobidisable">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <i className="ti-email"></i>
                                <h4>Messages</h4>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="message_inner">
                                <div className="message_widgets">
                                    <a href="#">
                                        <div className="inbox-item">
                                            <div className="inbox-item-img"><img src={avatar} className="img-circle" alt="" /></div>
                                            <strong className="inbox-item-author">Naeem Khan</strong>
                                            <span className="inbox-item-date">-13:40 PM</span>
                                            <p className="inbox-item-text">Hey! there I'm available...</p>
                                            <span className="profile-status available pull-right"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
