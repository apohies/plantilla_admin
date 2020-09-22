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

function Right_bar() {
    return (
        <div className="side-bar right-bar">
            <div>
                <br></br><br></br><br></br>
                <ul className="nav nav-tabs right-sidebar-tabs" role="tablist" style={{marginTop: "10px"}}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right_bar;
