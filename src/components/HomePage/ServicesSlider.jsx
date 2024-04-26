import {EffectCoverflow, Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <section className="services-section">
      <h1>Our Services</h1>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'2'}
      loop={true}
      coverflowEffect={{
        rotate:'0',
        stretch:'0',
        depth:100,
        modifier:2.5
      }}
      pagination={{el: 'swiper-pagination', clickable:true}}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable:true,
      }}
      modules={[EffectCoverflow,Pagination,Navigation]}
      className="swiper-container"
    >
    
          <div className="card-wrapper swiper-wrapper">

            <SwiperSlide className="swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <h2>Training</h2>
                <ul>
                  <li>Lean Six Sigma</li>
                  <li>Project Coaching</li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <h2>Consulting</h2>
                <ul>
                  <li>Business Strategy</li>
                  <li>Operational Excellence</li>
                  <li>Business Transformation</li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <h2>Assessment</h2>
                <ul>
                  <li>Channel</li>
                  <li>Suppliers</li>
                  <li>Skills</li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
              </div>
              <div className="card-content">
                <h2>Research</h2>
                <ul>
                  <li>Proprietory Topics</li>
                </ul>
              </div>
            </SwiperSlide>

          </div>
      <div id="swiper-controls">
        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="services-footer">
        <p>Read more about our wide range of services</p>
        <a href="services.html" className="services-btn">View Services</a>
      </div>
      </Swiper>
    </section>
    
  );
};