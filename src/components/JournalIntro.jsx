export default function JounalIntro({location, locationPin, googleMapsUrl, title}) {
    return(
        <div className="journalText">
        <span className="location"> 
           <span className="locationDetails">
           <img src= {locationPin} alt="" />
            <p>{location.toUpperCase()}</p>
            </span> 
           <span className="locationLink">
           <a href= {googleMapsUrl}> View on Google maps </a> 
            </span> 
        </span>
        <h1 className="title"> {title} </h1>
   </div>
    )
}