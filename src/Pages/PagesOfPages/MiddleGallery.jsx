import { useState } from "react"
import fronts from "../../assets/bg/gallery/front.png"
import whiteLogo from "../../assets/MOE CRNO BEZ POZADINE.png"
import Footer from "../../Footer";
function MiddleGallery() {
    const [toggleActive,setToggleActive] = useState(1);



    const toggleState = (index) => {
        setToggleActive(index)
        console.log(index)
    }
    return (
        <div className="gallery-bgd">
        <div className="gallery-top">
            <img
            src={fronts}
            className='front-gallery-img' 
            alt="frontImg" />
            <img
            className='logoImgGallery'
            src={whiteLogo}
            alt="logoImg" />
            <p 
            className='para-mid-behind'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Porta lorem mollis aliquam ut porttitor leo a diam. Interdum velit euismod in pellentesque massa placerat. Odio pellentesque diam volutpat commodo sed. Sapien faucibus et molestie ac. Proin fermentum leo vel orci porta non.</p>
            <p 
            className='para-mid-front'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Porta lorem mollis aliquam ut porttitor leo a diam. Interdum velit euismod in pellentesque massa placerat. Odio pellentesque diam volutpat commodo sed. Sapien faucibus et molestie ac. Proin fermentum leo vel orci porta non.</p>
            <div className='grad'></div>
            <div className='gradr'></div>
        </div>
        <div className='componentsGal'>
                <div onClick={()=> toggleState(1)} className={toggleActive === 1 ? "pic1gal actived" : "pic1gal"}></div>
                <div onClick={()=> toggleState(2)} className={toggleActive === 2 ? "pic2gal actived" : "pic2gal"}></div>
               <div onClick={()=> toggleState(3)} className={toggleActive === 3 ? "pic3gal actived" : "pic3gal"}></div>
               <div onClick={()=> toggleState(4)} className={toggleActive === 4 ? "pic4gal actived" : "pic4gal"}></div>
           </div>
           <div className="museum">
            <div className="autumn1"></div>
            <div className="autumn2"></div>
            <div className="autumn3"></div>
            <div className="autumn4"></div>
        </div>
<Footer/>
        </div>
    )
}
export default MiddleGallery