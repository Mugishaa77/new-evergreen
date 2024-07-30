import './Register.css';

export default function UserIdentity ({ nextStep, onChange, user}) {
    const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

    return (
        <div className="user-id">
             <div className="container"> 
                <h2>User Identity</h2>
                <label>First Name</label>
                <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={user.firstName}
                className="form-control"
                />

                <label>Last Name</label>
                <input
                type="text"
                name="lastName"
                 onChange={handleChange}
                  value={user.lastName}
                className="form-control"
                />

                <label>ID Number</label>
                <input
                type="text"
                name="idNumber"
                 onChange={handleChange}
                value={user.idNumber}
                className="form-control"
                />

                <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
}