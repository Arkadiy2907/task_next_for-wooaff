import Link from 'next/link';
import React from 'react';

// category_data
const category_data = [
  {
    id: 1,
    img: '/assets/img/category/category-01.png',
    title: 'Creative Development',
    link: '/course-grid',
  },
  {
    id: 2,
    img: '/assets/img/category/category-02.png',
    title: 'Software Engineering',
    link: '/course-grid',
  },
  {
    id: 3,
    img: '/assets/img/category/category-03.png',
    title: 'Promotion',
    link: '/course-grid',
  },
  {
    id: 4,
    img: '/assets/img/category/category-04.png',
    title: 'Technology and Software',
    link: '/course-grid',
  },
  {
    id: 5,
    img: '/assets/img/category/category-05.png',
    title: 'Video Production',
    link: '/course-grid',
  },
  {
    id: 6,
    img: '/assets/img/category/category-06.png',
    title: 'Business Systems',
    link: '/course-grid',
  },
  {
    id: 7,
    img: '/assets/img/category/category-07.png',
    title: 'Photographic Art',
    link: '/course-grid',
  },
  {
    id: 8,
    img: '/assets/img/category/category-08.png',
    title: 'Instrumental Music',
    link: '/course-grid',
  },
];

const CategoryArea = () => {
  return (
    <>
      <section
        className="tp-category-area bg-bottom grey-bg pt-110 pb-80 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-65">
                <h2 className="tp-section-title">Featured Categories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {category_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-cat-item mb-40 d-flex align-items-center">
                  <div className="tp-category-icon mr-15">
                    <img src={item.img} alt="category-img" />
                  </div>
                  <h4 className="tp-category-title">
                    <Link href={item.link}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryArea;
