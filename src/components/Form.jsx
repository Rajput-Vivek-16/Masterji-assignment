import React, { useState } from "react";
import './Form.css'

export default function OtpForm() {
    const [digits, setDigits] = useState(['','','',''])

    const handleOnchange = (e, index) =>{
        const value = e.target.value;
        const newDigits = [...digits]
        if ("0123456789".includes(value)){
            newDigits[index] = value;
            setDigits(newDigits)

            // Move to next input if the value length is 1
            if (index < digits.length - 1 && value.length === 1) {
            document.getElementById(`input-${index + 1}`).focus();
            }
        }
    }

    const handleOnkeyDown = (e, index) => {
        if (e.key === 'Backspace'){
            // Move to previous input and clear its value
            if (digits[index] === "" && index > 0){
                document.getElementById(`input-${index-1}`).focus();
            }
        }
    }
   

    const verifyCode = () =>{
        const enteredOTP = digits.join('');
        const expectedOTP = "1234";
        if (enteredOTP === expectedOTP){
            document.querySelectorAll("input").forEach(input => input.style.border = "1px solid #23CF9B");
            document.querySelector(".verify-btn").textContent = "Verified";
            document.querySelector(".verify-btn").style.backgroundColor = "#23CF9B";
            document.querySelector(".resend-otp").style.display = 'none';
        }
        else {
            document.querySelectorAll("input").forEach(input => input.style.border = "1px solid #FF0000");
            document.querySelector(".verify-btn").textContent = "Verification failed";
            document.querySelector(".verify-btn").style.backgroundColor = "#EB2D5B";
        }
    }
    return (
        <div className="form">
            <p className="form-heading">Mobile Phone Verification</p>
            <div className="description">
                <p className="form-description">Enter the 4-digit verification code that was sent </p>
                <p className="form-description">to your phone number.</p>
            </div>
            <div className="otp-container">
                {
                    digits.map((value, index) => (  
                        <input 
                            required
                            type="text" 
                            value = {value}  
                            key = {index}
                            id = {`input-${index}`}
                            maxLength = {1}   
                            autoFocus = {index ===0}                       
                            onChange = {(e) => handleOnchange(e, index)}  
                            onKeyDown={(e) => handleOnkeyDown(e,index)}
                        />
                    ))
                }
            </div>
            <div className="btn">
                <button className="verify-btn" onClick={verifyCode} onKeyDown={handleOnkeyDown}>
                    Verify Account
                </button>
            </div>
            <p className="resend-otp">Didn’t receive code? <span><a href="#">Resend</a></span></p>
        </div>
    )
}