import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  return (
    <>
      <section className="banner-area fix p-relative">
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(/assets/img/banner/banner-01.jpg)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="hero-content">
                  <span>
                    Discover New Opportunities & Expand Your Knowledge
                  </span>
                  <h2 className="hero-title mb-35">
                    For Every Learner, Every <i>Passion</i>.
                  </h2>
                  <p>
                    Unleash your potential with our wide range of courses and
                    resources. Gain valuable skills and stay ahead in your
                    field.
                  </p>
                  <div className="tp-banner-btn">
                    <Link href="/course-list" className="tp-btn">
                      Explore Courses
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="banner-info d-none">
                  <ul>
                    <li>
                      <span>500K</span>Students Worldwide
                    </li>
                    <li>
                      <span>5K</span>Free Courses Available
                    </li>
                    <li>
                      <span>
                        4.9<i className="fi fi-rr-star "></i>
                      </span>
                      Global Rating
                    </li>
                  </ul>
                </div>
              </div>
              <div className="banner-shape d-none d-lg-block">
                <img
                  src="/assets/img/banner/banner-shape-01.png"
                  alt="banner-shape"
                  className="b-shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
