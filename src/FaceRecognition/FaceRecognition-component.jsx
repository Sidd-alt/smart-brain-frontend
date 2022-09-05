import { FaceRecognitionContainer, Image, BoundingBox } from "./FaceRecognition-style";
import './FaceRecognitionStyles.css'

const FaceRecognition = ({ box, imageUrl }) => {

   return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{position: "absolute", marginTop: "2rem"}} >
        <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
        <div style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}  className='bounding-box'></div>
      </div>
    </div>
  )




         {/* <FaceRecognitionContainer> */}
            {/* <Image id="inputImage" src={imageUrl}  alt=""/> */}
            {/* <BoundingBox style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} box={box}></BoundingBox> */}
            {/* <div style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} className="bounding-box"></div> */}
         {/* </FaceRecognitionContainer> */}
}

export default FaceRecognition;