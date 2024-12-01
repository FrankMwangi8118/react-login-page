import Image from "../assets/image.png"
import Logo from "../assets/logo.png"
import GoogleSvg from "../assets/icons8-google.svg"
const Login=()=>{
    
    return(
        <div className="login-main">
        <div className="login-left">
        <img src={Image} alt="" />
        </div>
        <div className="login-right">
        <div className="login-right-container">
            {/* logo image*/}
        <div className="login-logo">
            <img src={Logo} alt="" />
        </div>
        <div className="login-center">
        <h2>Welcome back</h2>
        <p>Please enter your details</p>
        <form action="">
            <input type="email" name="" id="" placeholder="Email" required/>
            <div className="pass-input-div">
              <input type="password" placeholder="password"required/>
              
            </div>
            <div className="login-center-options">
                <div className="remember-div">
                    <input type="checkbox" name="" id="remember-checkbox" />
                    <label htmlFor="remember-checkbox">
                        Remember for 30 days
                    </label>
                </div>
                <a href="#"className="forgot-pass-link">
                    forgot password?
                </a>
            </div>
            <div className="login-center-buttons">
                <button type="button">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
        </form>
        </div>

        </div>
        
        </div>


        </div>
    );
};

export default Login;