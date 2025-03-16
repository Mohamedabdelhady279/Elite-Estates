import React, { useState } from 'react';
import Auth from '../../assets/imgs/Auth.jpeg';
import Login from '../Authpages/Login';
import Register from '../Authpages/Register';

const AuthView = () => {
  const [AuthMode, setAuthMode] = useState('login');

  const switchToLogin = () => setAuthMode('login');
  const switchToRegister = () => setAuthMode('register');

  return (
    <div className="  md:mt-40 px-4  min-h-screen  pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10  ">
        
        {/* قسم تسجيل الدخول والتسجيل */}
        <div className="flex justify-center">
          <div className="w-full max-w-md p-6 rounded-lg ">
            <div className="flex w-full">
              <button
                onClick={switchToLogin}
                className={`text-[16px] px-5 py-2 w-1/2 rounded-tl-[20px] transition-all duration-300 cursor-pointer
                  ${AuthMode === "login" ? "bg-[#2E75D9] text-white" : "bg-[#FFFFFF] text-[#2E75D9]"}`}
              >
                Login
              </button>
              
              <button
                onClick={switchToRegister}
                className={`text-[16px] px-5 py-2 w-1/2 rounded-tr-[20px] transition-all duration-300 cursor-pointer
                  ${AuthMode === "register" ? "bg-[#2E75D9] text-white" : "bg-[#FFFFFF] text-[#2E75D9]"}`}
              >
                Sign Up
              </button>
            </div>

            {/* عرض الفورم بناءً على الحالة */}
            <div className="mt-6">
              {AuthMode === 'login' ? <Login /> : <Register setAuthMode={setAuthMode} />}
            </div>
            
          </div>
        </div>

    

    
    
        {/* صورة الجانب الأيمن */}
        <div className="flex justify-center items-center">
          <img 
            src={Auth} 
            alt="Building" 
            className="w-[588px]  h-[536px] rounded-t-[422px] object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default AuthView;
