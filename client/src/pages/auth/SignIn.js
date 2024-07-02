  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { useItemData } from "../../store/ProductData";
  import "../../assets/css/auth/signIn.css";
  import { toast } from "react-toastify";

  const SignIn = () => {
    const navigate = useNavigate();
    const { login } = useItemData();

    const [data, setData] = useState({
      email: "",
      password: "",
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Submitted data:", data);
      const success = await login(data.email, data.password);
      if (success) {
        navigate("/dashboard");
        toast.success("login success");
      } else {
        toast.error("envalid credintial");
      }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    return (
      <div className="container">
        <div className="login-icon">
          <h4>Context Login</h4>
        </div>
        <form onSubmit={handleSubmit} method="post">
          <div className="login-form">
            <div className="login-title">Log In</div>
            <div className="login-input-parts">
              <input
                className="login-input"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
              <input
                className="login-input"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <button className="login-input button" type="submit">
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  export default SignIn;
