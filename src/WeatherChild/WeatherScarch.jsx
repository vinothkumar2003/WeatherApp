import React from 'react'

export const WeatherScarch = (props) => {
return (
<>
<div className="SearchBox">
<div className="sechBox-1">
<div className="searchbox">
    <input type="text" id="searchbox" placeholder='Another Location' />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="white" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14" /></svg>
</div>
<div className="searchplace">
    <ul>
<li>Channai</li>
<li>Maduri</li>
<li>Selam</li>
<li>Tiruvannamalai</li>
<li>Coimbatore</li>
    </ul>
</div>
</div>
<div className="sechBox-2">
<h2>Weather Details</h2>
<ul>
    <li><h4>Cloudy</h4><h5>86%</h5></li>
    <li><h4>Humidity</h4><h5>{props.humidity}%</h5></li>
    <li><h4>Wind</h4><h5>{props.wind}km/h</h5></li>
    <li><h4>visibility</h4><h5>{props.visibility}</h5></li>
</ul>
</div>
</div>
</>
)
}
