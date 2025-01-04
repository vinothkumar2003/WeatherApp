import React, { useState } from 'react'
// import { WeatherScarch } from './WeatherScarch'

export const WeatherCondition = () => {
  const[temp,settemp]=useState(8);
  const[txt,settxt]=useState("Salem");
  const[humidity,sethumidityt]=useState(54);
  const[wind,setwind]=useState(14);
  const[main,setmain]=useState("Clouds");
  const[png,setpng]=useState("Clouds")
  const[pressure,setpressure]=useState("23");
  const[country,setcountry]=useState("IN");
  const[visibility,setvisibility]=useState("");
  const[error,seterror]=useState(false);
  const[loding,setloding]=useState(false);
 
  // const weatherIconMap={
  //   "01d":clearIcon,
  //   "01n":clearIcon,
  //   "02d":cloudIcon,
  //   "02n":cloudIcon,
  //   "03d":drizzleIcon,
  //   "03n":drizzleIcon,
  //   "04d":rainIcon,
  //   "04n":rainIcon,
  //   "09d":rainIcon,
  //   "09n":rainIcon,
  //   "10d":rainIcon,
  //   "10n":rainIcon,
  //   "13d":snowIcon,
  //   "13n":snowIcon,
  // };

  const d=new Date();
  let hrs=d.getHours()>=12?d.getHours()-12:d.getHours();
  let mins=d.getMinutes();
  let yer=d.getFullYear();
  const search=async()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${txt}&units=metric&APPID=4e54f00a76c2b4a30948d01919bb4c9f`;
    try{
     let res=await fetch(url);
     let data=await res.json();
     if(data.code=404){
      console.log("error");
      seterror(true);
     }
     console.log(data);
     setloding(true);
     sethumidityt(data.main.humidity);
     data.weather.map(element => {
    setmain(element.main);
    setpng(element.main);
    console.log(element.main); 
  });  
    console.log(data.sys.country);
    setcountry(data.sys.country);
    settemp(Math.floor(data.main.temp));
    setpressure(data.main.pressure);
    settxt(data.name);
    setvisibility(data.visibility);
   setwind(data.wind.speed);
     
    }catch{

    }
    finally{
      setloding(false);
    }
  }
  const handly=(e)=>{
    console.log(e.target.value);
    settxt(e.target.value  )}
  function selectText() {
    const input = document.getElementById("searchbox");
    input.focus();
    input.select();
  }
  const direct=(e)=>{console.log(e.target.className);settxt(e.target.className);}
const WeatherScarch = (props) => {
return (
  <>
  <div className="SearchBox">
  <div className="sechBox-1">
  <div className="searchbox" onClick={selectText}  >
      <input type="text" id="searchbox"  placeholder='Another Location' value={txt} onChange={handly} onKeyDown={(e)=>{if(e.key==='Enter'){
        search();
      }}}/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={search} ><path fill="white" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"  /></svg>
  </div>
  <div className="searchplace">
      <ul>
  <li className="Channai" onClick={direct}>Channai</li>
  <li className="Maduri" onClick={direct}>Maduri</li>
  <li className="Selam" onClick={direct}>Selam</li>
  <li className="Tiruvannamalai" onClick={direct}>Tiruvannamalai</li>
  <li className="Coimbatore" onClick={direct}>Coimbatore</li>
      </ul>
  </div>
  </div>
  <div className="sechBox-2">
  <h2>Weather Details</h2>
  <ul>
      <li><h4>Cloudy</h4><h5>{error?"error":"23"}%</h5></li>
      <li><h4>Humidity</h4><h5>{error?"error":props.humidity}%</h5></li>
      <li><h4>Wind</h4><h5>{error?"erro":props.wind}km/h</h5></li>
      <li><h4>visibility</h4><h5>{error?"error":props.visibility}</h5></li>
  </ul>
  </div>
  </div>
  </>
  )}
  return (
    <> <div className="body" style={{}}>
    <div className="haeter">
        <h3>The WeatherApp</h3>
        <div className="error" style={error?{display:`flux`}:{display:'none'}}>thier is no locating--{txt} this kind of city </div>
       {loding?<div class="loader"></div>:""}
   {error?"": <div className="condition">
    <div className="temp">{temp}°</div>
    <div className="location">
        <h2>{txt}<sup>{country}</sup></h2>
        <p className='time'><h4>{hrs<=10?"0"+hrs:hrs} {`: ${mins<=10?"0"+mins:mins}`}</h4>-<h4>Friday</h4>;<h4>{ d.getDate()+" "+"OCT"+" "+yer}</h4></p>
    </div>
    <div className="png">
  <img src={`./png/${png}.png`} alt="png"   srcset="" /><h5 >{main}</h5>
    </div>
    </div>}
    </div>
    <WeatherScarch humidity={humidity} wind={wind} txt={txt} pressure={pressure} visibility={visibility} error={error}/>
    </div>
    </>
    
  )
}