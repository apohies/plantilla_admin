
import React from 'react';

function SideBar(){

	return (

			<div className="sidebar arreglaBarra" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">

                        <li className="nav-heading "> <span>Main Navigation&nbsp;&nbsp;&nbsp;&nbsp;------</span></li>
                        <li className="active"><a href="index.html" className="material-ripple"><i className="material-icons">home</i> Dashboard</a></li>
                        <li>
                            <a href="#" className="material-ripple"><i className="material-icons">bubble_chart</i> Charts<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li><a href="charts_flot.html">Flot Chart</a></li>
                                <li><a href="charts_Js.html">Chart js</a></li>
                                <li><a href="charts_morris.html">Morris Charts</a></li>
                                <li><a href="charts_sparkline.html">Sparkline Charts</a></li>
                                <li><a href="charts_am.html">Am Charts</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

		)


}

export default SideBar;