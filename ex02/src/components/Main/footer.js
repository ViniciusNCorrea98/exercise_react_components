import iconFB from '../../imgs/icons/icon-facebook.png';
import iconInsta from '../../imgs/icons/icon-instagram.png';
import icongithub from '../../imgs/icons/icon-github.png';
import iconLinkedin from '../../imgs/icons/icon-linkedin.png';

import './style_footer.css'

function Footer(){
    return(
        <>
            <div className='div_footer'>
                <h1>Vinicius Neves Corrêa</h1>
                <hr id='hr_footer'/>
                <div className='icons'>
                    <a><img src={iconFB} alt='icon Facebook'/></a>
                    <a><img src={iconInsta} alt='icon Instagram'/></a>
                    <a><img src={icongithub} alt='icon Github'/></a>
                    <a><img src={iconLinkedin} alt='icon Linkedin'/></a>
                </div>
            </div>
        </>
    )
}

export default Footer;