import locationPin from '../images/Fill 219.png';

import JounalIntro from './JournalIntro.jsx';
import JournalDetails from './JournalDetails.jsx';

export default function JournalItem({title, location, googleMapsUrl, startDate, endDate, description, image}) {
    return (
        <section className="journalContainer">
           <div className="img">
                <img src= {image}  alt="" />
           </div>
          <div className="journalContent">
            <JounalIntro 
                locationPin = {locationPin}
                location = {location}
                googleMapsUrl = {googleMapsUrl}
                title = {title}
            />
          <JournalDetails 
            startDate = {startDate}
            endDate = {endDate}
            description = {description}
          />
          </div>
        </section>
    )
}