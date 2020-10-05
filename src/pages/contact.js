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
            <h1 className={contactStyles.contactTitle}>Contact</h1>
            <div className={contactStyles.container}>
                <div className={contactStyles.contactBody}>
                    <div className={contactStyles.contactDetail}>
                        <ul>
                            <li><FontAwesomeIcon icon={["fas", "phone"]} className={contactStyles.icons} /><a href="tel:240-584-3783"><span>240-584-3783</span></a></li>
                            <li><FontAwesomeIcon icon={["fas", "envelope"]} className={contactStyles.icons} /><a href="mailto:chiduong4107@gmail.com"><span>chiduong4107@gmail.com</span></a></li>
                        </ul>
                    </div>
                    
                    <form className={contactStyles.contactForm} onSubmit={handleOnSubmit} enctype="multipart/form-data" netlify-honeypot="bot-field" data-netlify="true" name="contact">            
                        <div className={contactStyles.guestName}>
                            <div className={contactStyles.formGroup}>
                                <label for="name">
                                    <input className={contactStyles.formControl} type="text" name="name" id="name" placeholder="First Name *" required />
                                </label>
                            </div>

                            <div className={contactStyles.formGroup}>
                                <label for="name">
                                    <input className={contactStyles.formControl} type="text" name="name" id="name" placeholder="Last Name *" required />
                                </label>
                            </div>
                        </div>

                        <div className={contactStyles.guestContact}>
                            <div className={contactStyles.formGroup}>
                                <label for="phone">
                                    <input className={contactStyles.formControl} type="phone" name="phone" id="phone" placeholder="Phone Number"/>
                                </label>
                            </div>
            
                            <div className={contactStyles.formGroup}>
                                <label for="email">
                                    <input className={contactStyles.formControl} type="email" name="email" id="email" placeholder="Email *" required />
                                </label>
                            </div>

                            <div className={contactStyles.formGroup}>
                                <label for="company">
                                    <input className={contactStyles.formControl} type="text" name="company" id="company" placeholder="Company Name *" required />
                                </label>
                            </div>
                        </div>
                        
                        <div className={contactStyles.message}>
                            <div className={contactStyles.formGroup}>
                                <label for="subject">
                                    <input className={contactStyles.formControl} type="subject" name="subject" id="subject" placeholder="Subject *" required />
                                </label>
                            </div>

                            <div className={contactStyles.formGroupMsg}>
                                <label for="message">
                                    <textarea className={contactStyles.formControl} name="message" id="message" rows="5" placeholder="Message *" required />
                                </label>
                            </div>

                            <div className={contactStyles.formGroup}>
                                <label for="file">
                                    Upload File (optional)
                                    <input className={contactStyles.formControlFile} type="file" name="file" id="myFile" />                
                                </label>
                            </div>
                        </div>
                
                        <div className={contactStyles.formGroupButton}>
                            <button className={contactStyles.formBtn} type="submit" disabled={serverState.submitting}>Send Message</button>
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
        </Layout>
    )
}

export default ContactPage