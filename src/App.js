import { useState, useEffect } from 'react'
import Navigation from './Navigation/Navigation-component';
import Logo from './Logo/Logo-component';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm- component';
import FaceRecognition from './FaceRecognition/FaceRecognition-component';
import SignInForm from './SignInForm/SignInForm';
import RegisterForm from './RegisterForm.jsx/RegisterForm';
import EntriesCount from './EntriesCount/EntriesCount';
import Clarifai from 'clarifai';
import './App.css';

// const app = new Clarifai.App({
//    apiKey: 'a0a7fed94e2c4f72bdf8855669197c0d'
// })
 
// API key'a0a7fed94e2c4f72bdf8855669197c0d'

const initialState = {
   id: "",
   name: "",
   email: "",
   entries: 0,
   joined: "" 
}

function App() {

   const [ inputText, setinputText ] = useState("");
   const [ imageUrl, setImageUrl ] = useState("");
   const [ box, setBox ] = useState({});
   const [ route, setRoute ] = useState("signin");
   const [ isSignedIn, setisSignedIn ] = useState(false);
   const [ userProfile, setuserProfile ] = useState({
      id: "",
      name: "",
      email: "",
      entries: 0,
      joined: ""
   })

   const handleInputChange = (e) => {
      setinputText(e.target.value);
   }

   const calculateFaceLocation = (data) => {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
      const image = document.getElementById("inputImage");
      const width = Number(image.width);
      const height = Number(image.height);
      console.log(width, height)
      return {
         leftCol: clarifaiFace.left_col * width,
         topRow: clarifaiFace.top_row * height,
         rightCol: width - (clarifaiFace.right_col * width),
         bottomRow: height - (clarifaiFace.bottom_row * height)
      }
   }

   const displayFaceBox = (box) => {
      setBox(box);
   }

   const handleSubmit = () => {
      setImageUrl(inputText);
      // app.models.predict(Clarifai.FACE_DETECT_MODEL, inputText)
      fetch("http://localhost:3003/imageInput", {
         method: 'post',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({inputText})
      })
      .then(response => response.json())
      .then(response => {
         const { id } = userProfile
         if(response){
            fetch("http://localhost:3003/image", {
               method: 'put',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({ id })
            })
            .then(response => response.json())
            .then(data => {
               if(data.status === 1){
                  setuserProfile({...userProfile, entries: data.entries})
               }
            })
            .catch(err => console.log(err))
         }
         displayFaceBox(calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
   }

   const onRouteChange = (route) => {
      if(route === "home") setisSignedIn(true)
      else {
         setImageUrl("")
         setuserProfile(initialState)
         setisSignedIn(false)
      }
      setRoute(route)
   }

   const loadUser = (userData) => {
      const { id, name, email, entries, joined } = userData;
      setuserProfile({...userProfile, id, name, email, entries, joined})
   }

   return (
      <>
         <Navigation isSignedIn={isSignedIn} route={route} onRouteChange={onRouteChange}/>
         {
            route === "signin" ?
            <SignInForm onRouteChange={onRouteChange} loadUser={loadUser} />
            :
            route === "register" ?
            <RegisterForm onRouteChange={onRouteChange} loadUser={loadUser}/>
            :
            <>
               <Logo />
               <EntriesCount name={userProfile.name} entries={userProfile.entries} />
               <ImageLinkForm handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
               <FaceRecognition box={box} imageUrl={imageUrl} />
            </>
         }
      </>
   );
}

export default App;
