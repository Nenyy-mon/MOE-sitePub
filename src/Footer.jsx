import  WhiteMOE from "../src/assets/MOE CRNO BEZ POZADINE.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
    return (
        <footer className="footer">
            <div className="upper-footer">
                <div className="left-footer">
                    <h1>CONTACT US</h1>
                    <p>tel:<a href="tel:+3816599568">+3816599568</a></p>
                    <p>mail:<a href="mailto:lorem@gmail.com">lorem@gmail.com</a></p>
                    <p>soial:</p>
                    
                </div>

                <div className="middle-footer">
                    <p>  
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque nisl condimentum mauris commodo lacinia. Suspendisse auctor ex eu suscipit blandit. Nam eget porttitor est, non ornare lacus. Ut dapibus aliquet luctus. Morbi tempus lacus mi, quis porta ex maximus nec. Fusce ultrices libero augue, ac vulputate arcu feugiat in. Aliquam erat volutpat.           
                    </p>
                </div>

                <div className="right-footer">
                    <h1>ABOUT US: </h1>
                </div>
            </div>
            <div className="down-footer"><img src={WhiteMOE} className="logo-footer" width="200px" alt="logoMOE" /></div>

        </footer>
    )
}

export default Footer