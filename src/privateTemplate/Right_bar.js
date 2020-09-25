import React from 'react';
// import imagen
import img1 from './source/img/theme-color/1.jpg';
import img2 from './source/img/theme-color/2.jpg';
import img3 from './source/img/theme-color/3.jpg';
import img4 from './source/img/theme-color/4.jpg';
import img5 from './source/img/theme-color/5.jpg';
import img6 from './source/img/theme-color/6.jpg';
import img7 from './source/img/theme-color/7.jpg';
import img8 from './source/img/theme-color/8.jpg';
import avatar from './source/img/avatar.png';
import avatar2 from './source/img/avatar2.png';
import avatar3 from './source/img/avatar3.png';
import avatar4 from './source/img/avatar4.png';

function Right_bar() {
    return (
        <div className="">
            <ul className="nav nav-tabs right-sidebar-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i className="material-icons">home</i></a></li>
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><i className="material-icons">person_add</i></a></li>
                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><i className="material-icons">chat</i></a></li>
            </ul>
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade  in active" id="home">
                    <ul id="styleOptions" title="switch styling">
                        <li><b>Dark Skin</b></li>
                        <li><img src={img1} alt="" /></li>
                        <li><img src={img2} alt="" /></li>
                        <li><img src={img5} alt="" /></li>
                        <li><b>Dark Skin sidebar</b></li>
                        <li><img src={img7} alt="" /></li>
                        <li><img src={img6} alt="" /></li>
                        <li><img src={img8} alt="" /></li>
                        <li><b>Light Skin sidebar</b></li>
                        <li><img src={img3} alt="" /></li>
                        <li><img src={img4} alt="" /></li>
                    </ul>
                </div>
                <div role="tabpanel" className="tab-pane fade " id="profile">
                    <h3 className="sidebar-heading">Activity</h3>
                    <div className="rad-activity-body">
                        <div className="rad-list-group group">
                            <a href="#" className="rad-list-group-item">
                                <div className="rad-list-icon bg-red pull-left"><i className="fa fa-phone"></i></div>
                                <div className="rad-list-content"><strong>Client meeting</strong>
                                    <div className="md-text">Meeting at 10:00 AM</div>
                                </div>
                            </a>
                            <a href="#" className="rad-list-group-item">
                                <div className="rad-list-icon bg-yellow pull-left"><i className="fa fa-refresh"></i></div>
                                <div className="rad-list-content"><strong>Created ticket</strong>
                                    <div className="md-text">Ticket assigned to Dev team</div>
                                </div>
                            </a>
                            <a href="#" className="rad-list-group-item">
                                <div className="rad-list-icon bg-primary pull-left"><i className="fa fa-check"></i></div>
                                <div className="rad-list-content"><strong>Activity completed</strong>
                                    <div className="md-text">Completed the dashboard html</div>
                                </div>
                            </a>
                            <a href="#" className="rad-list-group-item">
                                <div className="rad-list-icon bg-green pull-left"><i className="fa fa-envelope"></i></div>
                                <div className="rad-list-content"><strong>New Invitation</strong>
                                    <div className="md-text">Max has invited you to join Inbox</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <h3 className="sidebar-heading">Tasks Progress</h3>
                    <ul className="sidebar-menu">
                        <li>
                            <a href="#">
                                <h4 className="subheading">
                                    Task one
                                            <span className="label label-danger pull-right">40%</span>
                                </h4>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: "40%" }}></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h4 className="subheading">
                                    Task two
                                            <span className="label label-success pull-right">20%</span>
                                </h4>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success progress-bar-striped active" style={{ width: "20%" }}></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h4 className="subheading">
                                    Task Three
                                            <span className="label label-warning pull-right">60%</span>
                                </h4>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning progress-bar-striped active" style={{ width: "60%" }}></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h4 className="subheading">
                                    Task four
                                            <span className="label label-primary pull-right">80%</span>
                                </h4>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-primary progress-bar-striped active" style={{ width: "80%" }}></div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div role="tabpanel" className="tab-pane fade " id="messages">
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
                        <a href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src={avatar2} className="img-circle" alt="" /></div>
                                <strong className="inbox-item-author">Sala Uddin</strong>
                                <span className="inbox-item-date">-13:40 PM</span>
                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                <span className="profile-status away pull-right"></span>
                            </div>
                        </a>
                        <a href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src={avatar3} className="img-circle" alt="" /></div>
                                <strong className="inbox-item-author">Mozammel</strong>
                                <span className="inbox-item-date">-13:40 PM</span>
                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                <span className="profile-status busy pull-right"></span>
                            </div>
                        </a>
                        <a href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src={avatar4} className="img-circle" alt="" /></div>
                                <strong className="inbox-item-author">Tanzil</strong>
                                <span className="inbox-item-date">-13:40 PM</span>
                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                <span className="profile-status offline pull-right"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right_bar;
