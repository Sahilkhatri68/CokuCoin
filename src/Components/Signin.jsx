import React from 'react'
import "./signin.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Signin() {
    return (
        <>
            <div className="bodywrapper">
                <div className="insideWrapper">
                    <div className="contentdiv">
                        <div className='data'>
                            <div className="headingdata">
                                <h2 className='headh2'> Cuko</h2>
                            </div>

                            <h1 className='normalhead'>Signin to Coku</h1>
                            <div className='emaildata'>
                                <h1 style={{ height: 50 }}>Email</h1>
                                <div className=' inputEmail'>
                                    <input placeholder='Enter Email' className='inputemail'></input>
                                </div>
                                <div className='buttons'>
                                    <Link to="/signlogin"> <button className='contButton'>Continue</button></Link>
                                </div>
                                <div className='button'>
                                    <button className='contButtonwhite'>Create account</button>
                                </div>
                                <div className='links'>
                                    <a href='#' className='hreflink'>Singn in to business account </a >

                                </div>
                                <div className='linksprivacy'>
                                    <a href='#' className='hreflink'>Privacy policy </a >

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}