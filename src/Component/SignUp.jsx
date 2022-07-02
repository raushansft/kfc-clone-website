 import React  from "react";
 import Header from "./Header.jsx"
 import "./SignUp.css";
 


const SignUp = () => {

  const [firstname,setFirstname] = React.useState("");
  const [lastname,setLastname] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");

  

    const registerUser=async(e)=> {
     e.preventDefault();

     let flag=0;

     fetch("http://localhost:8734/signup")
     .then((response)=> response.json())
     .then((response)=>{
      response.forEach((usr)=>{
      if(usr.email===email){
        flag=1;
      }
     })
    
      if (flag===1){
        alert("Email already registered with another account")
      }
      else{
        const payload={
          firstname,
          lastname,
          email,
          password,
        }
         fetch("http://localhost:8734/signup", {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
          },
       body: JSON.stringify(payload),
     })
     .then((response)=>response.json())
     .then((response)=>console.log(response)) 
     .catch((err)=>console(err))
    }
  })
  }

   
  
    
  
  return (
    <>
    
    <Header/>
     
        <section className="signupsection">
         <div id="singupsvgdiv">
           <div className="signupsvgdiv2">
             <svg
               id="signupsvgStrip"
               viewBox="0 0 42 20"
               xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="none"
            >
              <path className="strip-1" d="M0 0h8v20H0z"></path>
              <path className="strip-2" d="M16 0h8v20h-8z"></path>
              <path className="strip-3" d="M32 0h8v20h-8z"></path>
            </svg>
          </div>
        </div>
        <div className="signupmainbox">
          <h1 id="signupTitle">CREATE AN ACCOUNT</h1>
          <div className="signupformdiv">
            <form onSubmit={registerUser} className="signupform">
              <div className="input-data">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label>First Name*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Last Name*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Email*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input
                  type="password"
                  name="password"
                  id="password"
                  minLength={8}
                 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Password*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="checkifrequired">
                <div className="checkBoxflex">
                  <div className="checkBoxDiv">
                    <input type="checkbox" name="checkbox" id="checkboxtick" />
                  </div>
                  <div className="checkBoxText">
                    <p>
                      By selecting the box, you agree to our{" "}
                      <span className="cLink">Privacy Policy</span> and{" "}
                      <span className="cLink">Terms of Use.</span>
                    </p>
                  </div>
                </div>
                <div className="checkBoxflex">
                  <div className="checkBoxDiv">
                    <input type="checkbox" name="checkbox" id="checkboxtick2" />
                  </div>
                  <div className="checkBoxText">
                    <p>Sign up for Email updates and Promotions</p>
                  </div>
                </div>
              </div>
              <div className="signupBtndiv">
                <input type="submit" value="Create Account" />
              </div>
              <div className="redirecttologin">
                <p className="redirectlogintext">
                  Already a member?{" "}
                  {/* <Link to={"/api/Auth/login"}> */}
                    <span className="redirectloginlink">Log In</span>
                  {/* </Link>                   */}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default SignUp;