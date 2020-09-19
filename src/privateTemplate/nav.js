import React from 'react';
import Logo from './source/img/light-logo.png';

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
            <div class="nav-container">
                <ul class="nav navbar-nav hidden-xs">
                    <li>
                        <a id="fullscreen" href="#">
                            <i class="material-icons">fullscreen</i>
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
                                    <i class="ti-search fullscreen-search-icon">
                                        <input value="" type="submit"/>
                                    </i>
                                </form>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a id="menu-toggle" href="#">
                            <i class="material-icons">apps</i>
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
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown Link 4</a>
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
                                        <li><a href="buttons.html"><i class="fa fa-window-minimize"></i>Buttons</a></li>
                                        <li><a href="tabs.html"><i class="fa fa-tablet"></i>Tab</a></li>
                                        <li><a href="notification.html"><i class="fa fa-exclamation-triangle"></i>Notification</a></li>
                                        <li><a href="tree-view.html"><i class="fa fa-tree"></i>Tree View</a></li>
                                        <li><a href="progressbars.html"><i class="fa fa-minus"></i>Progressber</a></li>
                                        <li><a href="list.html"><i class="fa fa-list-ol"></i>List View</a></li>
                                        <li><a href="typography.html"><i class="fa fa-text-width"></i>Typography</a></li>
                                        <li><a href="panels.html"><i class="fa fa-keyboard-o"></i>Panels</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
