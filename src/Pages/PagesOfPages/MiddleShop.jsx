import "../../styles/shop.css"

import fronts from "../../assets/bg/shop/front.jpg.png"
import blackLogo from "../../assets/MOE CRNO BEZ POZADINE 2.png"
import Footer from "../../Footer"
function MiddleShop() {
    return (
        <>
        <div className="shop-bgd">
        <div className="shop-top">
            <img
            src={fronts}
            className='front-shop-img' 
            alt="frontImg" />
            <img
            className='logoImgShop'
            src={blackLogo}
            alt="logoImg" />
            <p 
            className='para-mid-behind'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Porta lorem mollis aliquam ut porttitor leo a diam. Interdum velit euismod in pellentesque massa placerat. Odio pellentesque diam volutpat commodo sed. Sapien faucibus et molestie ac. Proin fermentum leo vel orci porta non.</p>
            <p 
            className='para-mid-front'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Porta lorem mollis aliquam ut porttitor leo a diam. Interdum velit euismod in pellentesque massa placerat. Odio pellentesque diam volutpat commodo sed. Sapien faucibus et molestie ac. Proin fermentum leo vel orci porta non.</p>
            <div className='grad'></div>
            <div className='gradr'></div>
        </div>
        <div className='components'>
     
       </div>
    </div>
       <Footer/>
</>
    )
}
export default MiddleShop