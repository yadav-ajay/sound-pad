import React from 'react';
import "./Main.css"


 
function Main(props){
  const onClick = () =>{
    var audio = new Audio(props.musics);
          audio.play();
        }
  return(
          <button className="Main" onClick={onClick}>
       </button>
    
  );
}



export default Main;