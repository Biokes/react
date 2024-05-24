import React from 'react';
import SignUpImage from "./signUpImage";
import styles from "./index.module.css";
import Buttons from "./index";

function SignUp(){
    return (
     <div style={{display:'flex'}}>
         <div>
             <SignUpImage/>
         </div>
         <div style={{display: 'block', paddingInline: '5%', paddingBlock: '7%'}}>
                <div style={{alignItems: 'center',}}>
                    <h2 style={{fontSize: "medium"}}>Welcome Back!</h2>
                </div>
                <div>
                    <p style={{textAlign: 'center', fontWeight: 'bold'}}>Sign up by entering the following details</p>
                    <input type='text' placeholder='Username:' style={styles.inputs}/>
                    <input type='password' placeholder='password:' style={styles.inputs}/>
                    <input type='password' placeholder='confirm password:' style={styles.inputs}/>
                </div>
                <div style={{display: 'flex', textAlign: 'justify', marginBlock: '5px'}}>
                    <p style={{fontSize: 'medium', fontWeight: "bolder"}}>Already have An Account</p>
                    <a href="/login" style={{fontSize: 'medium', fontWeight: 'bolder', color: '#55229E'}}>Login</a>
                </div>
                <div>
                    <Buttons text={"Sign Up"}/>
                </div>
            </div>
     </div>
            )
         }
export default SignUp;