import React from 'react';
import Logo from './source/img/light-logo.png';

function nav() {
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
        </nav>
    );
}

export default nav;
