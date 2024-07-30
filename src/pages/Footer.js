import React from 'react'
import longLogo from '../assests/img/longlogo.png'
import facebook from '../assests/img/facebook.png'
import instagram from '../assests/img/intstagram.png'
import linkedin from '../assests/img/linkedin.png'
import twitter from '../assests/img/twitter.png'
import email from '../assests/img/mail.png'
import phone from '../assests/img/call.png'
import location from '../assests/img/location.png'

function Footer() {
  return ( 
    <div className=' bg-slate-500 flex flex-col space-y-4 md:flex-row gap-x-48  p-8'>
    <div className='md:basis-1/2 space-y-2'>
    <img className='w-40' src={longLogo} alt='long logo'/>
    <h1 className='text-2xl font-bold font-serif'>Get In Touch</h1>
    <p className='text-justify'>Thank you for visiting my portfolio. I'm Gayan Gamage, a software engineer specializing in front-end development and mobile apps. Connect with me to discuss collaborations or opportunities.</p>
    <div className='flex flex-row space-x-10 md:space-x-4 pt-6'>
    <a href='https://www.linkedin.com/in/gayan-pramuditha-gamage-b444221b9/'><img className='w-10' src={linkedin} alt='linkedin'/></a>
    <a href='https://web.facebook.com/gayanpramuditha.gamage'><img className='w-10' src={facebook} alt='facebook'/></a>
    <a href='https://www.instagram.com/ggpramuditha/'><img className='w-10' src={instagram} alt='instagram'/></a>
    <a href='https://x.com/Gayan_PGamage'><img className='w-10' src={twitter} alt='twitter'/></a>
    </div>
    </div>
    <div className='md:basis-1/2'>
    <h1 className='text-2xl font-bold'>Contact Me</h1>
    <div className='space-y-4'>
      <div className='flex flex-row space-x-4 '>
        <img className='w-10' src={phone} alt='phone'/>
        <p className=' text-lg content-center'>+9477 326 4441</p>
      </div>
      <div className='flex flex-row space-x-4 '>
        <img className='w-10' src={email} alt='email'/>
        <p className=' text-lg content-center'>gayanpramudithag@gmail.com</p>
      </div>
      <div className='flex flex-row space-x-4 '>
        <img className='w-10' src={location} alt='location'/>
        <p className=' text-lg content-center'>Iriyagaha, Galle, Sri Lanka</p>
      </div>
    </div>

    </div>




    </div>


  )
}

export default Footer