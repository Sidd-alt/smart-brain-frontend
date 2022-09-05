import { useEffect, useState } from 'react'
import { 
   SignInFormContainer, 
   CenterDiv, 
   Label, 
   Input, 
   HeaderText,
   RouteText 
} from "./SignInFormStyles";
import { Button } from "../ImageLinkForm/ImageLinkForm-style";

const SignInForm = ({ onRouteChange, loadUser }) => {

   const [ email, setEmail ] = useState("");
   const [ password, setPassword ] = useState("");

   const onEmailChange = (e) => {
      setEmail(e.target.value);
   }

   const onPasswordChange = (e) => {
      setPassword(e.target.value);
   }

   const onSubmit = () => {
      if(email.length !==0 && password.length !== 0){
         fetch("http://localhost:3003/signin", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               email,
               password
            })
         })
         .then(res => res.json())
         .then(data => { 
            if(data.status === 1){
               loadUser(data.userdetails)
               onRouteChange('home')
            }
         })
         .catch(err => console.log(err))
      }
   }

   return (
      <>
         <div style={{display: "flex", justifyContent: "center"}}>
            <SignInFormContainer>
               <div>
                  <HeaderText>Sign In</HeaderText>
               </div>
               <CenterDiv>
                  <Label>Email ID</Label>
                  <Input onChange={onEmailChange}/>
               </CenterDiv>
               <CenterDiv>
                  <Label>Password</Label>
                  <Input type='password' onChange={onPasswordChange}/>
               </CenterDiv>
               <CenterDiv>
                  {/* <Button onClick={() => onRouteChange("home")}>Submit</Button> */}
                  <Button onClick={onSubmit}>Submit</Button>
               </CenterDiv>
               <div>
                  <RouteText onClick={() => onRouteChange('register')}>Register</RouteText>
               </div>
            </SignInFormContainer>
         </div>
      </>
   )
}

export default SignInForm;