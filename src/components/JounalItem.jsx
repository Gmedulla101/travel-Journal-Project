import locationPin from '../images/Fill 219.png';

export default function JournalItem({title, location, googleMapsUrl, startDate, endDate, description, image}) {
    return (
        <section className="journalContainer">
           <div className="img">
                <img src= {image}  alt="" />
           </div>
          <div className="journalContent">
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

           <div className="details">
                <h4 className="dates">
                    {startDate} - {endDate}
                </h4>
                <p className="info">
                    {description}
                </p>
           </div>
          </div>
        </section>
    )
}