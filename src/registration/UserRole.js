import './Register.css';

export default function UserRole ({ prevStep, nextStep, onChange, user}) {
    return (
        <div className="user-role">
            <div className="container">
                <h2>User Role</h2>
                <label>Select user role below:</label>
                <input
                type="text"
                name="role"
                value={user.role}
                className="form-control"
                />
                <select 
                className="select-role "
                 onChange= {(e) => onChange('role', e.target.value)} required>
          <option value="Farmer">Farmer(vendor)</option>
          <option value="Grocer">Grocer(vendor)</option>
          <option value="Customer">Customer(buyer)</option>
        </select>

        <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );


}