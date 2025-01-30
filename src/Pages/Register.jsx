import { useState } from 'react';
import {AiFillEyeInvisible, AiFillEye, AiOutlineMail} from 'react-icons/ai';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {FaRegUser} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import GoogleAuth from '../Components/GoogleAuth';
import { auth } from '../../Firebase-config';



const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };


const Register = ({setisAuth}) => {


    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    
      //de-structing the initialState
      const {username, email, password, confirmPassword} = formData;


          //toggling for password eye
          const [passwordEye, setPasswordEye] = useState(false);
          const handlePasswordEye = () => {
            setPasswordEye(!passwordEye)
          }
          
          const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
          const handleConfirmPasswordEye = () => {
            setConfirmPasswordEye(!confirmPasswordEye)
          }


          const handleChange = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value.trim()});
          };


  return (
    <div className='pt-[20vh]'>
    {loading && 'loading...'}
 <div className='max-w-[800px] m-auto px-4 pb-16'>
   <div className=' dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>
     <h1 className='text-2xl font-bold text-green-800 ' > Register Account </h1> 
     <form>

       <div className='grid md:grid-cols-2 md:gap-8'>

       <div className='md:my-4'>
           <label>Username</label>
           <div className='my-2 w-full relative'>
             <input
               
               className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
               type="text" 
               placeholder='Enter your username'
               name="username"
               value={username}
               onChange={handleChange}
             
             />
             <FaRegUser className='absolute right-2 top-3 text-gray-400' />
           </div>
           {errors.username && ( <span className="text-red-500">{errors.username}</span>)}
         </div>

       <div className='md:my-4'>
           <label>Email Address</label>
           <div className='my-2 w-full relative'>
             <input
               className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
               type="email" 
               placeholder='Enter Email Address'
               name="email"
               value={email}
               onChange={handleChange}
             />
             <AiOutlineMail className='absolute right-2 top-3 text-gray-400' /> 
           </div>
           {errors.email && ( <span className="text-red-500">{errors.email}</span>)}
         </div> 

       </div>

       <div className='grid md:grid-cols-2 md:gap-8'>

       <div className='md:my-4'>
           <label>Password</label>
           <div className='my-2 w-full relative '>
             <input
               className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
               type={(passwordEye === false) ? 'password' : 'text'} 
               placeholder='Enter your Password'
               name="password"
               value={password}
               onChange={handleChange}
             />
             <div className='absolute right-2 top-3'>
               {(passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handlePasswordEye} className='text-gray-400'/>}
             </div>
           {errors.password && ( <span className="text-red-500">{errors.password}</span>)}
           </div>
         </div>

         <div className='md:my-4'>
           <label>Comfirm Password</label>
           <div className='my-2 w-full relative '>
             <input
               
               className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
               type={(confirmPasswordEye === false) ? 'password' : 'text'} 
               placeholder='comfirm password'
               name="confirmPassword"
               value={confirmPassword}
               onChange={handleChange}
             />
             <div className='absolute right-2 top-3'>
               {(confirmPasswordEye === false) ? <AiFillEyeInvisible onClick={handleConfirmPasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handleConfirmPasswordEye} className='text-gray-400'/>}
             </div>
             {errors.confirmPassword && ( <span className="text-red-500">{errors.confirmPassword}</span>)}
           </div>
         </div>
       </div>

       <p className='text-center text-sm py-1'>By signing in you accept our <span className='underline'>terms and conditions & privacy policy</span></p>
              
       <button type='submit' className='w-full my-4 md:my-2 p-3 bg-[#166534] text-white rounded-lg font-semibold'> Login Account </button>
     </form>

     
     <hr className="my-6 border-gray-300 w-full" />
  
     <GoogleAuth setisAuth={setisAuth}/>

     <p className='my-4'>Already have an account? <Link className='text-[#986c55] underline' to={'/login'}> Login </Link></p>
   </div>
 </div>
</div>
  )
}

export default Register;


