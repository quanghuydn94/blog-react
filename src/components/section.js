import React from 'react'
import '../styles/section.scss';

export default function Section() {
    return (
        <>
            <div className="container-fluid section section__bg">
                <div className="row  ">
                    <div className="col-4"></div>
                    <div className=" col-lg-8 section__content section__content--animation">
                        <div className="section__title">
                            <h2 className="section__title--color">Điểm khác biệt ở phòng khám chúng tôi</h2>
                            <p className="section__text--fontSize">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className=" d-md-flex section__row">
                            <div className="col-md-6 section__item">
                                <img src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c1.png"></img>
                                <span className="section__item--fontSize">Tư vấn miễn phí</span>
                            </div>
                            <div className="col-md-6 section__item">
                                <img src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c2.png"></img>
                                <span className="section__item--fontSize">Giá cả phải chăng</span>
                            </div>
                        </div>
                        <div className=" d-md-flex section__row">
                            <div className="col-md-6 section__item">
                                <img src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c3.png"></img>
                                <span className="section__item--fontSize">Bác sĩ chuyên môn giỏi</span>
                            </div>
                            <div className="col-md-6 section__item">
                                <img src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c4.png"></img>
                                <span className="section__item--fontSize">Nhân viên chuyên nghiệp</span>
                            </div>
                        </div>
                        <div className=" d-md-flex section__row">
                            <div className="col-md-6 section__item">
                                <img src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c5.png"></img>
                                <span className="section__item--fontSize">Phục vụ 24/7</span>
                            </div>
                            <div className="col-md-6 section__item">
                                <img src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c6.png"></img>
                                <span className="section__item--fontSize">Hơn 5000 khách hàng hài lòng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
