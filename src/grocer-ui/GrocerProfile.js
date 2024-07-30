import './Grocer.css';

export default function GrocerProfile (grocer) {
  return (
    <div className="grocer-profile">
         <h1>Stall Details</h1>
      <h6>Stall Name: {grocer.stallName}</h6>
      <h6>Stall Number:  {grocer.stallNumber}</h6>

      <h1 className="contact-info">Grocer's Contact information</h1>
      <p>Name: {grocer.fullName} </p>
      <p>Email:<a href="mailto:{grocer.emailAddress}"
                title="Email"
                rel="noopener noreferrer"
                className="email-link"> {grocer.emailAddress}</a></p>
      <p>Phone: {grocer.contactNumber}</p>

    </div>
  );
}