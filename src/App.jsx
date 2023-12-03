import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom"
import  WhiteMOE from "../src/assets/MOE CRNO BEZ POZADINE.png"

import MainPage from "./MainPage.jsx"
import About from "./Pages/About.jsx"
import Gallery from "./Pages/Gallery.jsx"
import Shop from "./Pages/Shop.jsx"
import { useEffect, useState } from "react"
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleBurgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };
    const [classN, setClassN] = useState('nav-bar');

  
    useEffect(() => {
      console.log(scrollY)

        const onScrollit = () => {
          if (window.scrollY > 150) {
            setClassN('scrolled');
          } else {
            setClassN('nav-bar');
          }
        };
        
        document.addEventListener('scroll', onScrollit);
        // Cleanup the event listener when the component unmounts
        return () => {
          document.removeEventListener('scroll', onScrollit);
        };
      }, []);
  return (
    <BrowserRouter>
       <div className={classN}>
            <nav className="nav">
            <div id="burger-menu"  className={isMenuOpen ? 'close' : ''} onClick={handleBurgerClick}>
  <span></span>
</div>
                <div className="img-cont">
                    <img className="logo-navabar" src={WhiteMOE} alt="ss" />
                </div>
                <ul id="list" className={isMenuOpen ? 'overlay' : ''}>
                 <li className='first-li'> <NavLink to="/">HOME</NavLink></li>
                 <li><NavLink to="/about">ABOUT</NavLink></li> 
                  <li><NavLink to="/gallery">GALLERY</NavLink></li>
                  <li><NavLink to="/shop">SHOP</NavLink></li>

                <Outlet />
                </ul>
            </nav>
        </div>

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
