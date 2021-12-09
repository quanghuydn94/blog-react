import React from 'react';
import '../styles/header.scss';

function Header() {
    return (
        <>
            <div className="container-fluid">
                <div className="row text-lg-center">
                    <div className="col-4 d-none d-lg-block">
                        <div className="header__item">
                            <small>Hotline khẩn cấp</small>
                            <p>1900 636 648</p>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 d-flex justify-content-around align-items-center  header__logo">
                        <i className="fas fa-bars d-lg-none text-left"></i>
                        <img className="" src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/logo-mona.png" alt="" />
                    </div>
                    <div className="col-4 d-none d-lg-block">
                        <div className="header__item">
                            <small>Tư vấn trực tuyến</small>
                            <p>one@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__nav d-none d-lg-block">
                <div className="container">
                    <div className="row ">
                        <div className="col-6 mx-auto">
                            <nav>
                                <ul className="nav justify-content-between">
                                    <li className="nav-item  header__nav--active">
                                        <a href="" className="nav-link">TRANG CHỦ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className="nav-link">GIỚI THIỆU</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className="nav-link">DỊCH VỤ</a>
                                    </li>
                                    <li>
                                        <a href="" className="nav-link">TIN TỨC</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className="nav-link">LIÊN HỆ</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header
