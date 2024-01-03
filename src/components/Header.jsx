import globe from '../images/Fill 213.png';

export default function Header() {
    return (
        <div className="header">
            <img src= {globe} alt="" />
            <h3>
                My travel journal
            </h3>
        </div>
    )
}