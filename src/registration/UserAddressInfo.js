import './Register.css';

export default function UserAddressInfo ({ nextStep, prevStep, onChange, user}) {
     const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
    return (
        <div className="user-address">
            <div className="container">
                <h2>User Address Information</h2>
                <label>Phone Number </label>
                <input
                type="text"
                name="phoneNumber"
                onChange={handleChange}
                value={user.phoneNumber}
                className="form-control"
                />

                <label>Email Address</label>
                <input
                type="text"
                name="email"
                onChange={handleChange}
                value={user.email}
                className="form-control"
                />

                <label>Password</label>
                <input
                type="text"
                name="password"
                onChange={handleChange}
                value={user.password}
                className="form-control"
                />

                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>

            </div>
        </div>
    )
}