import styled from 'styled-components';

export const FaceRecognitionContainer = styled.div`
   display: flex;
   justify-content: center;
`
export const Image = styled.img`
   width: 300px;
   height: auto;
   margin-top: 2rem;
   position: absolute;
`

export const BoundingBox = styled.div`
   position: absolute;
   box-shadow: 0 0 0 3px #149df2 inset;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   cursor: pointer;
`

   // top: ${props => props.box.leftCol};
   // right: ${props => props.box.topRow};
   // bottom: ${props => props.box.rightCol};
   // left: ${props => props.box.bottomRow};

   // top: 100px;
   // right: 100px;
   // bottom: 100px;
   // left: 100px;