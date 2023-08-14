import React,{useState} from "react";
import "./index.css";

export default function App() {
  const [values, setValues]= useState({
    firstName : "",
    lastName: "",
    email: "",
  });

  // event handler when firstName changes
  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value});
  }
  // event handler when lastName changes
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value});
  }
  // event handler when email changes
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value});
  }
  // event handler when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  // states to handle submit and valid form inputs
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  
  return (
    <div className="form-container" >
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button className="form-field" type="submit" >
          Register
        </button>
      </form>
    </div>
  );
}
