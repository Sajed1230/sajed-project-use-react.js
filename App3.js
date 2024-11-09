
import './App3.css';
import { useState } from 'react';
import photo from './photo2024.jpg';
export default function App() {
  const[follow,setFollow]=useState(true)
  function handleFollowing(){
    setFollow(false)
  }
  
  return (
    <div className="App">
      
      <div className='image-div'>
      <img className='img' src={photo} alt="man"    />

      </div>
      <div className='image-my-photo'></div>
      <div className='all-text-div'>
      <div className='name-div'>
       <span className='text-em'><i>Sajed~Murtada</i></span>
       <p className='text-p-i'><i>~Frontend Use React~</i></p>
      </div>
      <div className='information-div'>
        <p className='text-p'> I use many programming languages ​​such as<br></br> html Css JV (React.js)
        I have exciting projects on <br></br>github </p>

       
      </div>
      <div className='button-div'>
<button className='button1' >Profile</button>
<button className='button2' onClick={handleFollowing}>{follow ?"follow" :"following❤️" }</button>

      </div>
      </div>
      
      
      </div>
  );
}

 