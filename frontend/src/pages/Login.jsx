import { useState } from "react";
import API from "../services/api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/auth/login", formData);

    console.log("FULL RESPONSE:", res.data);

    localStorage.setItem("token", res.data.token);

    if (res.data.user) {
      localStorage.setItem("role", res.data.user.role);
      console.log("ROLE:", res.data.user.role);
    }

    alert("Login Successful");
  } catch (error) {
    alert("Login Failed");
    console.error(error);
  }
};

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;