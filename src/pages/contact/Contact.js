import React from 'react'
import {FaEnvelopeOpen,FaPhoneSquareAlt,FaFacebook,FaTwitter,FaYoutube,FaDribbble} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css'

export default function Contact() {
  return (
    <section className='contact section'>
      <h2 className='section__title'>
      Get in <span>Touch</span>
      </h2>
      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy!</h3>
          <p className='contact__description'>
            Feel free to get in Touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon'/>
           <div>
           <span className='info__title'>Mail me</span>
            <h4 className='info__desc'>steve@mail.com</h4>
            </div>
           </div>
           <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon'/>
           <div>
           <span className='info__title'>Call me</span>
            <h4 className='info__desc'>+216 03 234 884</h4>
            </div>
           </div>
          </div>
          <div className='contact__socials'>
          <a href='https//facebook.com' className='contact__social-link'><FaFacebook/>
          </a>
          <a href='https//twitter.com' className='contact__social-link'><FaTwitter/>
          </a>
          <a href='https//youtube.com' className='contact__social-link'><FaYoutube/>
          </a>
          <a href='https//dribble.com' className='contact__social-link'><FaDribbble/>
          </a>
          </div>
        </div>
        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input type='text' className='form__control' placeholder='Your name'/>
            </div>
            <div className='form__input-div'>
              <input type='email' className='form__control' placeholder='Your email'/>
            </div>
            <div className='form__input-div'>
              <input type='text' className='form__control' placeholder='Your subject'/>
            </div>
          </div>
          <div className='form__input-div'>
             <textarea className='form__control textarea' placeholder='Your Message'></textarea>
            </div>
            <button className='button'>Send Message <span className='button__icon contact__button-icon'><FiSend/></span></button>
        </form>
      </div>
    </section>
  )
}
