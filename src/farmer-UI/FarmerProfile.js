import './Farmer.css';

export default function FarmerProfile (farmer) {
  return (
    <div className="farmer-profile">
       <h3>Stall Details</h3>
      <h2>Stall Name: {farmer.stallName}</h2>
       <h2>Stall Number: {farmer.stallNumber}</h2>

      <h3 className="contact-info"> Farmer's Contact information</h3>
      <p>Name: {farmer.fullName} </p>
      <p>Email:<a href="mailto:farmer.emailAddress"
                title="Email"
                rel="noopener noreferrer"
                className="email-link"></a> {farmer.emailAddress}</p>
      <p>Phone: {farmer.contactNumber}</p>

    </div>
  );
}