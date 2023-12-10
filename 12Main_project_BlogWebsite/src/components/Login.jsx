import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Btn, Input, Logo } from './index'
import authservice from '../AppWrite/auth'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, seterror] = useState()

    const login = async (data) => {
        seterror("")
        try {
            const session = await authservice.logIn(data)
            if (session) {
                const userData = await authservice.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/")
                }
            }
        } catch (error) {
            seterror(error.message)
        }
    }
    return (
        <div
            className='flex item-center justify-center w-ful'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign In to Your Account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="enter Your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })} />

                        <Input
                            label="Password: "
                            placeholder="Enter Your password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })} />

                        <Btn
                            type='submit'
                            className='w-full'
                        >SignIn</Btn>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login