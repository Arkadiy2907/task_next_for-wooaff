import useSticky from '@/hooks/use-sticky';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import Sidebar from './sidebar';
import LogoText from './logoText';

// category_data
const category_data = [
  { title: 'Bengali Language' },
  { title: 'English Language' },
  { title: 'Video Editing' },
  { title: 'Logo Creation' },
  { title: 'Fancy Style' },
];

// const LogoText = ({ value }) => (
//   <div className="logo__text">
//     {value.split('').map((char, i) => (
//       <div className="letter" style={{ '--delay': `${i * 0.2}s` }}>
//         <span className="source">{char}</span>
//         <span className="shadow">{char}</span>
//         <span className="overlay">{char}</span>
//       </div>
//     ))}
//   </div>
// );

const Header = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className="header__transparent ">
        <div className="header__area">
          <div
            className={`main-header header-xy-spacing ${
              sticky ? 'header-sticky' : ''
            }`}
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
                  <div className="logo-area d-flex align-items-center">
                    <div className="logo">
                      <Link href="/">
                        <LogoText value="E-PORA." />
                      </Link>
                    </div>
                    <div className="header-cat-menu ml-40 d-none d-md-block">
                      <nav>
                        <ul>
                          <li>
                            <a href="#">
                              Category{' '}
                              <span>
                                <i className="arrow_carrot-down"></i>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              {category_data.map((item, i) => (
                                <li key={i}>
                                  <Link href="/course-grid">{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-6 d-flex align-items-center justify-content-end">
                  <div className="main-menu d-flex justify-content-end mr-15">
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <NavMenu />
                    </nav>
                  </div>
                  <div className="header-right d-md-flex align-items-center">
                    <div className="header__search d-none d-lg-block">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="header__search-input">
                          <button className="header__search-btn">
                            <i className="fa-regular fa-magnifying-glass"></i>
                          </button>
                          <input type="text" placeholder="Find Courses" />
                        </div>
                      </form>
                    </div>
                    <div className="header-meta">
                      <ul>
                        <li>
                          <Link href="/sign-in" className="d-none d-md-block">
                            <i className="fi fi-rr-user"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart" className="d-none d-md-block">
                            <i className="fi fi-rr-shopping-bag"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            onClick={() => setIsActive(true)}
                            href="#"
                            className="tp-menu-toggle d-xl-none"
                          >
                            <i className="icon_ul"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
