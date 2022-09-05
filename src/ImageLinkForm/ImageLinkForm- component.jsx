import { 
   ImageLinkFormParentContainer, 
   ImageLinkFormChildContainer, 
   Input,
   Button
} from "./ImageLinkForm-style";


const ImageLinkForm = ({ handleInputChange, handleSubmit }) => {

   return(
      <>
         <ImageLinkFormParentContainer >
            <ImageLinkFormChildContainer>
               <Input onChange={handleInputChange} type='text'/>   
               <Button onClick={handleSubmit}>SUBMIT</Button>
            </ImageLinkFormChildContainer>  
         </ImageLinkFormParentContainer>
      </>
   )

}
export default ImageLinkForm;