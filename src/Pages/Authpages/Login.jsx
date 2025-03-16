import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup  from "yup";
import { MdOutlineError } from 'react-icons/md';
import { FaCheck, FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {   signInWithPopup } from "firebase/auth";
import { facebookProvider, GoogleProvider,auth } from "../../../firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setuser } from '../../lib/UserNameSlice';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../UserApi';





const Login = () => {

    const [showPassword, setShowPassword] = useState(false);  
    const navigate = useNavigate();
  const [firebase, seterorrfirebase] = useState()
    const [loading, setloading] = useState()  
    const dispatch = useDispatch();

 
    const handleGoogleLogin = async () => {
      try {
        setloading(true);
        const result = await signInWithPopup(auth, GoogleProvider);
        const user = result.user;
        const userData = {
          __id: user.uid,
          email: user.email,
          username: user.displayName || "User",
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
        };
  
        dispatch(setuser(userData));
        toast.success(`Welcome, ${user.displayName}!`, { position: "top-right", autoClose: 2000, hideProgressBar: true, theme: "dark", transition: Bounce });

        setTimeout(() => navigate("/"), 2000);
      } catch (error) {
        console.log("Google Login Error:", error);
  
        if (error.code === "auth/popup-closed-by-user") {
          return; // لا تعرض رسالة خطأ
          
        }
        seterorrfirebase("Failed to login with Google. Please try again.");
        
      }
    };
  

    const handleFacebookLogin = async () => {
      try {
        setloading(true);
        const result = await signInWithPopup(auth, facebookProvider);
        const user = result.user;
        const userData = {
          __id: user.uid,
          email: user.email,
          username: user.displayName || "User",
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
        };
        dispatch(setuser(userData));

        setTimeout(() => navigate("/"), 1000);
      } catch (error) {
        console.log("Facebook Login Error:", error);
        setloading(false);
  
        if (error.code === "auth/popup-closed-by-user") {
          console.log("User closed the popup.");
          return;
        }
        seterorrfirebase("Failed to login with Facebook. Please try again.");
      }
    };

 
 
 
 
 
    const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Must be at least  7 characters").required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors, }) => {
      try {
        const userData = await loginUser(values.email, values.password,dispatch);
        console.log("User logged in:", userData);
        toast.success("Welcome to our Website ✨", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          setloading(false)
          setTimeout(() => {
            navigate("/")
          }, 1000);

      } catch (err) {
        setErrors({ api: err.message });
      } finally {
        setSubmitting(false);
      }
    },
  });
 
 
 
 
 
 
  return (
    <div>
       <ToastContainer />

      <form onSubmit={formik.handleSubmit} className="space-y-6 flex flex-col gap-4">
      
            <div className='relative'>
             <label htmlFor="email" className="block mb-3 text-sm font-medium text-[#9F9F9F]">Email Address</label>
             <input type="email" name="email" autoComplete='on'   value={formik.values.email}  onChange={formik.handleChange}  onBlur={formik.handleBlur}
     
             className='w-full px-5 py-3 rounded-lg font-medium text-[#1E1E1E] bg-[#FFFFFF] focus:ring-2 focus:ring-[#5193F0] outline-none transition duration-300'/>
             {formik.touched.email && formik.errors.email ? (
               <>
               <p className='text-red-500 text-[15px] mt-1'>! {formik.errors.email}</p>
     
                 <MdOutlineError className='absolute right-3 top-12 text-xl text-red-500'/>
     
               </>
             ) :
               (
                 formik.touched.email && formik.values.email.includes("@") && formik.values.email.includes(".com") && (
                   <>
                     <FaCheck className='absolute right-3 top-12 text-green-500'/>
                   </>
                 )
               )
             }
          
          
           </div>
        
        
           <div className='relative'>
        <div className='flex justify-between'>
        <label  className="block mb-3 text-sm font-medium text-[#9F9F9F]">Password</label>          
          </div>        
        <input  type={showPassword ? 'text' : 'password'} name='password' autoComplete='on'   value={formik.values.password}  onChange={formik.handleChange}  onBlur={formik.handleBlur}

        className='w-full px-5 py-3 rounded-lg font-medium text-[#1E1E1E] bg-[#FFFFFF] focus:ring-2 focus:ring-[#5193F0] outline-none transition duration-300'/>
       <button 
      type="button" 
      onClick={() => setShowPassword(!showPassword)} 
      className="absolute right-8 top-14 transform -translate-y-1/2 text-gray-500"
    >
      {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />} 
    </button>
       
       
        {formik.touched.password && formik.errors.password ? (
          <>
          <p className='text-red-500 text-[15px] mt-1'>! {formik.errors.password}</p>

            <MdOutlineError className='absolute right-3 top-12 text-xl text-red-500'/>

          </>
        ) :
          (
            formik.touched.password && !formik.errors.password && (
              <>
                <FaCheck  className='absolute right-3 top-12 text-green-500'/>

              </>
            )
          )
        }
       
          </div>
    
    
   
     
         <button type="submit" disabled={formik.isSubmitting} 
      className={`w-full text-white px-5 py-3 rounded cursor-pointer 
        ${formik.isSubmitting ? "bg-gray-400 cursor-pointer" : "bg-[#1E1E1E] hover:bg-[#1e1e1ee8]"}`}
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>
       
       
          {formik.errors.api && <p className="text-red-500">{formik.errors.api}</p>}

      </form>

 
 
 
 
     {/*google,facebook  */}
    <div  className=' flex flex-col md:flex-row justify-center mt-3 gap-4 '>
  <Link onClick={handleGoogleLogin} className="w-full   flex justify-center bg-red-600 text-white px-4 py-2 rounded-[10px] hover:bg-red-500">
    <button className='flex items-center gap-2 text-sm rounded-xl cursor-pointer'>
      <FaGoogle className='text-[18px]' /> Login with Google
    </button>
  </Link>

  <Link onClick={handleFacebookLogin}  className="w-full   flex justify-center bg-blue-700 text-white px-4 py-2 rounded-[10px] hover:bg-blue-800">
    <button className='flex items-center gap-2 text-sm cursor-pointer '>
      <FaFacebook className='text-[18px]' /> Login with Facebook
    </button>
  </Link>
    </div>



    </div>
  )
}

export default Login