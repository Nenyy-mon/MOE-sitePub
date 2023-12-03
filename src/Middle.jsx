import {Link} from 'react-router-dom'
import front from './assets/bg/Layer 1.jpg.png'
import whiteLogo from "./assets/MOE CRNO BEZ POZADINE.png"
function Middle() {
    return (
        <div className="main-bgd">
            <div className="main-top">
                <img
                className='front-img' 
                src={front} 
                alt="frontImg" />
                <img
                className='logoImg'
                src={whiteLogo} 
                alt="logoImg" />
                <p 
                className='para-mid-behind'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Porta lorem mollis aliquam ut porttitor leo a diam. Interdum velit euismod in pellentesque massa placerat. Odio pellentesque diam volutpat commodo sed. Sapien faucibus et molestie ac. Proin fermentum leo vel orci porta non.</p>
                <p 
                className='para-mid-front'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Porta lorem mollis aliquam ut porttitor leo a diam. Interdum velit euismod in pellentesque massa placerat. Odio pellentesque diam volutpat commodo sed. Sapien faucibus et molestie ac. Proin fermentum leo vel orci porta non.</p>
                <div className='grad'></div>
                <div className='gradr'></div>
            </div>
            <div className='components'>
                <Link to='/gallery' className='pic1'><div  ></div></Link>
                <Link to='/gallery' className='pic2'><div  ></div></Link>
                <Link to='/gallery' className='pic3'><div  ></div></Link>
           </div>

        </div>
    )
}
export default Middle