'use client'

import "../../globals.css";
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { SyntheticEvent, useState } from 'react'
import { setCookie } from "cookies-next"


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    const router = useRouter()

    const handleSubmit = (e: SyntheticEvent) => {

        e.preventDefault()
        if(!username || !password) setMessage('Please enter your login credentials first')
        else {
            setMessage('')
            submitForm()
        }
    
    }

    const submitForm = async () => {

        const formData = new FormData()
        formData.append('username', username) 
        formData.append('password', password) 

        try {

            const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT+"/auth/login/", formData, { headers: { 'Content-Type': 'application/json' } })
            console.log(response)
            if(response.data.status == true) {
                setCookie('role', response.data.role)
                router.push('/home/' + response.data.userID)
            }
            else {
                setMessage("Invalid login credentials.")
            }
        } catch (error: any) {
            console.error('Error during login:', error)
            setMessage("An error occurred during login. Please try again later.")
        }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-xl p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">LOGIN</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {message && <p className="text-red-500 text-sm">{message}</p>}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}