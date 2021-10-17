import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title0">
                <Title title={'Contact Info'} span={'Contact Info'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe title="office_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.11562800441!2d-120.15492564041735!3d34.58482614970485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e954a0fc922285%3A0x2d0e281b060bc156!2sSolvang%2C%20CA%2093463!5e0!3m2!1sen!2sus!4v1634350879889!5m2!1sen!2sus" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+1 (323) 283-9160'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'machinelearner2334@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'Solvang, CA'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
