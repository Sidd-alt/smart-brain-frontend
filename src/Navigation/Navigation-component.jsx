import { NavbarContainer, SignInSignOutText } from './Navigation-style';

const Navigation = ({ isSignedIn,  route, onRouteChange }) => {

   if(isSignedIn){
      return(
         <NavbarContainer>
            <SignInSignOutText onClick={() => onRouteChange('signin')}>{'SignOut'}</SignInSignOutText> 
         </NavbarContainer>
      )
   } else {
      return (
         <>
            <NavbarContainer>
               <SignInSignOutText onClick={() => onRouteChange('register')}>{'Register'}</SignInSignOutText> 
               <SignInSignOutText onClick={() => onRouteChange('signin')}>{'Sign In'}</SignInSignOutText> 
            </NavbarContainer>
         </>
      )
   }
}

export default Navigation;