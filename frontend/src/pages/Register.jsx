import "../styles/register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Register</h1>

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;