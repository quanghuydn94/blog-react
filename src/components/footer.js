import React from 'react';
import "../styles/footer.scss";

function Footer() {
    return (
        < >
            <footer className="footer__bg--color">
                <div className="container footer__top">
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="footer__item">
                                <small>Hotline khẩn cấp</small>
                                <p>1900 636 648</p>
                            </div>
                        </div>
                        <div className="col-md-4 footer__logo">
                            <img src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/logo_alt.png" alt="" />
                        </div>
                        <div className="col-md-4 text-right">
                            <div className="footer__item">
                                <small>Tư vấn trực tuyến</small>
                                <p>one@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer__bottom">
                    <div className="row">
                        <div className="col-md-6  col-lg-4">
                            <div className="footer__text">
                                <h2>GIỚI THIỆU</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <span>
                                    <i className="fab fa-facebook-f ml-2"></i>
                                    <i className="fab fa-instagram ml-2"></i>
                                    <i className="fab fa-twitter ml-2"></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6  col-lg-4">
                            <div className="footer__info">
                                <h2>THÔNG TIN LIÊN HỆ</h2>
                                <p><i class="fas fa-map-marker-alt"></i> 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                                <p><i class="fas fa-tty"></i> 076 922 0162</p>
                                <p><i className="fas fa-envelope-open-text "> </i>
                                    <span>demonhunterg@gmail.com </span> <br />
                                    <span className="ml-4">mon@mona.media</span>
                                </p>
                                <p><i class="fab fa-skype"></i> demonhunterp</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer__register">
                                <h2>ĐĂNG KÝ</h2>
                                <p>Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</p>
                                <div className="footer__input">
                                    <input type="text" placeholder="Email..." />
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
