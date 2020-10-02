import React, { useState } from 'react'
import axios from 'axios'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactPage = () => {
    
    const [serverState, setServerState ] = useState({
        submitting: false,
        status: null
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/a344b87e-6b53-4d27-b931-0cbd3d173a3f",
            data: new FormData(form)
        })
        .then(r => {
            handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
        });
    } 

    return (
        <Layout>
            <Head title="Contact" />
            <h1 className={contactStyles.contact}>Contact</h1>
            <div className={contactStyles.container}>
                <div className={contactStyles.contactBody}>

                <div className={contactStyles.topBody}>
                        <div className={contactStyles.contactDetail}>
                            <ul>
                                <li><FontAwesomeIcon icon={["fas", "phone"]} className={contactStyles.icons} /><a href="tel:240-584-3783"><span>240-584-3783</span></a></li>
                                <li><FontAwesomeIcon icon={["fas", "envelope"]} className={contactStyles.icons} /><a href="mailto:chiduong4107@gmail.com"><span>chiduong4107@gmail.com</span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={contactStyles.bottomBody}>
                        <div className={contactStyles.contactForm}>
                            <form onSubmit={handleOnSubmit} enctype="multipart/form-data" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                                <div className={contactStyles.formGroup}>
                                    <label for="name">
                                        Full Name
                                        <input className={contactStyles.formControl} type="text" name="name" id="name" required />
                                    </label>
                                </div>

                                <div className={contactStyles.formGroup}>
                                    <label for="phone">
                                        Phone Number (optional)
                                        <input className={contactStyles.formControl} type="phone" name="phone" id="phone" />
                                    </label>
                                </div>
                
                                <div className={contactStyles.formGroup}>
                                    <label for="email">
                                        Email
                                        <input className={contactStyles.formControl} type="email" name="email" id="email" required />
                                    </label>
                                </div>
                
                                <div className={contactStyles.formGroupMsg}>
                                    <label for="message">
                                        Message
                                        <textarea className={contactStyles.formControl} name="message" id="message" rows="5" required />
                                    </label>
                                </div>

                                <div className={contactStyles.formGroup}>
                                    <label for="file">
                                        Upload File (optional)
                                        <input className={contactStyles.formControlFile} type="file" name="file" id="myFile" />                
                                    </label>
                                </div>
                
                                <div className={contactStyles.formGroupButton}>
                                    <button className={contactStyles.formBtn} type="submit" disabled={serverState.submitting}>Submit</button>
                                </div>
                
                                <div>
                                    <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
                                    {serverState.status && ( 
                                        <p className={!serverState.status.ok ? "errorMsg": ""}>
                                            {serverState.status.msg}
                                        </p>
                                    )}
                                </div>   
                            </form>
                        </div>
                    </div>

                </div>
            </div>   
        </Layout>
    )
}

export default ContactPage