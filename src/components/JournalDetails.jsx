export default function JournalDetails({startDate, endDate, description}) {
    return(
    <div className="details">
        <h4 className="dates">
            {startDate} - {endDate}
        </h4>
        <p className="info">
            {description}
        </p>
   </div>
    )
}