import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GoogleIcon from '@mui/icons-material/Google'

const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>
                Запиши се в нашия бюлетин!
                </span>
             <div className="mail">
                <input type='text' placeholder='Въведи имейла си'/>
                <button>Запиши се!</button>
             </div>
             <div className="icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <GoogleIcon/>

             </div>
        </div>
    </div>
  )
}

export default Contact