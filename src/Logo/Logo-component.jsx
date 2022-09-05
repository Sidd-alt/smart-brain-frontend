import Tilt from 'react-parallax-tilt';
import { LogoContainer, Image } from './Logo-style';
import brain from '../assets/Images/brain.png';

const Logo = () => {
   return(
      <LogoContainer>
         <Tilt>
            <Image>
               <img alt='logo' src={brain}/>
            </Image>
         </Tilt>
      </LogoContainer>
   )
}

export default Logo;