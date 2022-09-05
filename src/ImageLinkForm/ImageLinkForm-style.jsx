import styled from 'styled-components';

export const ImageLinkFormParentContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 3rem;
`

export const ImageLinkFormChildContainer = styled.div`
   display: flex;
   padding: 20px;
   background:
   radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,
   radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,
   linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
   linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
   linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
   linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;
   background-size: 40px 60px;
   box-shadow: 0px 0px 10px black;

`
export const Input = styled.input`
   font-size: 18px;
   padding: 10px;
   margin: 10px 0 10px 10px;
   background: papayawhip;
   border: none;
   ::placeholder {
      color: palevioletred;
   }
`

export const Button = styled.button`
   height: 3rem;
   font-size: 20px;
   font-family: 'Russo One', sans-serif;
   border: none;
   background-color: #000;
   color: #fff;
   margin: 10px 0px 10px 0px;
   cursor: pointer;
   transition: transform .2s;
   :hover{
      transform: scale(1.03);
   }
   :active{
      transform: translateY(3px);
   }
`