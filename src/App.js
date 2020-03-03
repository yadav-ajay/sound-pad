import React from 'react';
import './App.css';
import Main from './Main'
import music1 from './musics/1.wav'
import music2 from './musics/2.wav'
import music3 from './musics/3.wav'
import music4 from './musics/4.wav'
import music5 from './musics/5.wav'
import music6 from './musics/6.wav'
import music7 from './musics/7.mp3'
import music8 from './musics/8.wav'
import music9 from './musics/9.wav'
import music10 from './musics/10.wav'
import music11 from './musics/11.mp3'
import music12 from './musics/12.wav'
import music13 from './musics/13.wav'
import music14 from './musics/14.wav'
import music15 from './musics/15.wav'
import music16 from './musics/16.wav'


const musics = [
music1,
music2,
music3,
music4, 
music5,
music6,
music7,
music8,
music9,
music10,
music11,
music12,
music13,
music14,
music15,
music16,
]

function App() {
  
  return (
    <div className="App">
    <h1 className ="Text">Sound Pad </h1>{
       musics.map(musics =>{
         return  <Main musics={musics}/>
         
       })
     }

    </div>
  );
}

export default App;
