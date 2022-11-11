import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/login/login2';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const [error, setError] = useState(true);
    useTitle('Sign Up')
    const {providerLogIn,createUser}=useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate=useNavigate();


    const handalGoogleSignIn = () => {
        providerLogIn(googleProvider)

            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => {
                console.error('error', error)
            })
    }

const handleSignup=(event)=>{
    event.preventDefault()
    const form = event.target;
   
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
            setError(false)
            navigate('/')
        })
        .catch(error => {
            setError(error.message)
        })

}


    return (
        <div className="hero w-full my-20">
        <div className="hero-content gap-20  grid md:grid-cols-2 flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">

                <img src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 p-5">
                <form onSubmit={handleSignup} className="card-body">
                    <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />

                    </div>
                </form>
                <p className='text-orange-600'>{error}</p>
                
                <p className='text-center'>Or</p>
                <button onClick={handalGoogleSignIn} className="btn btn-outline btn-success mx-auto my-2"><FcGoogle></FcGoogle> Sign Up using Google</button>
                <p className='text-center'>Allready have an account ? Please <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
            </div>
        </div>
    </div >
    );
};

export default SignUp;