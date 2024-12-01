import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import pass_icon from '../../assets/password.png';
import { Button } from '../ui/button';
import { useState } from 'react';
import Header from './Header';

const LoginSignup = () => {
  const [isLogin, setLogin] = useState(false);
  const handleClick = () => {
    setLogin(!isLogin);
  }
  return <>
    <Header className=' sticky top-0 left-0 w-full bg-white z-50' />

    <div>
      <div className='container flex flex-col m-auto mt-[0px] pb-[30px]'>
        <div className=' flex flex-col items-center gap-[9px] mt-[30px]'>
          <div className=" text-[#9f5bff] text-[36px] font-bold">{isLogin ? "Sign In" : "Sign Up"}</div>
          <div className=" w-[80px] h-[6px] bg-[#9f5bff] rounded-lg"></div>
        </div>
        <div className="mt-[55px] flex flex-col gap-6">
          {!isLogin ? <div className="flex items-center m-auto w-[480px] h-20 bg-slate-100 rounded-lg">
            <img src={user_icon} className=' mt-0 mb-0 mr-7 ml-7' />
            <input type="text" className='h-12 w-[380px] rounded-md bg-transparent outline-none cursor-pointer' placeholder='Enter your Name' />
          </div> : ""}
          <div className="flex items-center m-auto w-[480px] h-20 bg-slate-100 rounded-lg">
            <img src={email_icon} className=' mt-0 mb-0 mr-7 ml-7' />
            <input type="email" className='h-12 w-[380px] rounded-md bg-transparent outline-none cursor-pointer' placeholder='Enter your Email' />
          </div>
          <div className="flex items-center m-auto w-[480px] h-20 bg-slate-100 rounded-lg ">
            <img src={pass_icon} className=' mt-0 mb-0 mr-7 ml-7' />
            <input type="password" className='h-12 w-[380px] rounded-md bg-transparent outline-none cursor-pointer' placeholder='Enter your Password' />
          </div>
        </div>
        <div className="pl-[30%] mt-[27px] text-[#797979]">Forgot Password? <span className=' text-[#9f5bff] cursor-pointer'>Reset</span></div>
        <div className="flex flex-row gap-7 items-center justify-center">
          {isLogin ? <>
            <Button variant='Coutline' onClick={handleClick}>Sign Up</Button>
            <Button onClick={handleClick}>Sign In</Button>

          </>
            :
            <>
              <Button onClick={handleClick}>Sign Up</Button>
              <Button onClick={handleClick} variant='Coutline'>Sign In</Button>
            </>
          }
        </div>
      </div>
    </div>

  </>
}

export default LoginSignup;