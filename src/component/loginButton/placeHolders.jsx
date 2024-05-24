import styles from './index.module.css'
import Buttons from "./index";
import Images from "./image";
import React from "react";
function LoginPage(){
    return (

        <div className={styles.loginPage}>
            <Images/>
            <div className={styles.bodyContainer}>
                <div className={styles.wordsAndForm}>
                    <div className={styles.wordsContainer}>
                        <h2 >Welcome Back!</h2>
                        <p>log in to your Dashboard</p>
                    </div>
                    <form>
                        <div className={styles.inputsAnchor}>
                            <input type='text' placeholder='Username:' className={styles.formInput}/>
                            <input type='password' placeholder='password:' className={styles.formInput}/>
                        </div>
                        <div className={styles.subFormTag}>
                            <div style={{display: 'flex'}}>
                                <input type='checkbox'/>
                                <p className={styles.ptags}>Remember me</p>
                            </div>
                            <div className={styles.text}>
                                <p className={styles.ptag}>i</p>
                                <p className={styles.ptags}>ForgottenPassword</p>
                            </div>
                        </div>
                    </form>
                    <div className={styles.buttonContainer}>
                        <Buttons text={"Login"}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                        <p style={{fontFamily: 'arial'}}>Don't have an Account?</p>
                        <p style={{color: '#55229E', fontWeight: 'bold', textDecoration: 'underline'}}>
                            sign Up
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;