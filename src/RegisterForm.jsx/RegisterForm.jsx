import { useState, useEffect } from 'react';
import { SignInFormContainer, CenterDiv, Label, Input, HeaderText, Form } from "../SignInForm/SignInFormStyles";
import { Button } from "../ImageLinkForm/ImageLinkForm-style";

const RegisterForm = ({ onRouteChange, loadUser }) => {

   const [ name, setName ] = useState("");
   const [ password, setPassword ] = useState("");
   const [ email, setEmail ] = useState("");

   const onSubmit = (e) => {
      if(email.length !== 0 && password.length !== 0 && name.length !== 0){
         fetch("http://localhost:3003/register", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               name,
               email,
               password
            })
         })
         .then(response => response.json())
         .then(data => {
            if(data.status === 1){
               loadUser(data.userdetails)
               onRouteChange('home')
            }
         })
         .catch(err => console.log(err))
      }
   }

   const onEmailChange = (e) => {
      setEmail(e.target.value);
   }

   const onPasswordChange = (e) => {
      setPassword(e.target.value);
   }
   
   const onNameChange = (e) => {
      setName(e.target.value)
   }

   return (
      <>
         <div style={{display: "flex", justifyContent: "center"}}>
            <SignInFormContainer>
               <div>
                  <HeaderText>Register</HeaderText>
               </div>
               <CenterDiv>
                  <Label>Name</Label>
                  <Input onChange={onNameChange} type="text"/>
               </CenterDiv>
               <CenterDiv>
                  <Label>Email ID</Label>
                  <Input onChange={onEmailChange} type="email"/>
               </CenterDiv>
               <CenterDiv>
                  <Label>Password</Label>
                  <Input onChange={onPasswordChange} type="password"/>
               </CenterDiv>
               <CenterDiv>
                  <Button onClick={onSubmit}>Submit</Button>
               </CenterDiv>
            </SignInFormContainer>
         </div>
      </>
   )
}

export default RegisterForm;