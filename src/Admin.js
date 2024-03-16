import React,{useState} from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useNavigate } from 'react-router-dom';



function Admin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., validate username and password against a server)
    if (username === 'admin' && password === 'password') {
      // Authentication successful, redirect to another page
      navigate('/dashboard');
    } else {
      // Authentication failed, display an error message
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Header />
      <div class=" admin-login-container">
            
                <div class=" admin-login-form">
                    <h3> Admin Login</h3>
                    <form onSubmit={handleLogin}>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username *" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary "> Login</button>
                        
                        <div class="form-group">
                            <a href="#" class="btnForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
    
      <Footer />
    </>
  );
}

export default Admin;
