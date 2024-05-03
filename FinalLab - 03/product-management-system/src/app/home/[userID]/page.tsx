'use client';

import { User } from "@/app/_types/user";
import "../../globals.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

export enum Role {
    ADMIN,
    CUSTOMER
}

export default function Home({ params }: { params: { userID: string } }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function getUserInfo() {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/${params.userID}`);
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    }
    getUserInfo();
  }, [params.userID]);

  if (!user) {
    return <div className="min-h-screen bg-gray-900 text-white p-8 text-3xl font-bold">LOADING...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-4">{user.username}</h1>
        <div>
          <button 
            onClick={() => router.push('/login')} 
            className="bg-gray-900 text-white p-4 text-xl font-bold"
          >
            LOGOUT
          </button>
          {user.role === Role.CUSTOMER && (
            <button 
              onClick={() => router.push('/cart')} 
              className="bg-gray-900 text-white p-4 text-xl font-bold"
            >
              CART
            </button>
          )}
        </div>
      </div>
      <Link href={'/profile/' + params.userID}>
        <p className="text-xl font-light mb-4">View Profile</p>
      </Link>

      
      {user.role === Role.ADMIN && (

        <div className="flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <button
              onClick={() => router.push('/manage-products')}
              className="block w-full text-center text-xl font-extrabold text-gray-900 py-4 px-6 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              MANAGE PRODUCTS
            </button>
            <button
              onClick={() => router.push('/manage-customers')}
              className="mt-6 block w-full text-center text-xl font-extrabold text-gray-900 py-4 px-6 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              MANAGE CUSTOMERS
            </button>
          </div>
        </div>
      )}
      {user.role === Role.CUSTOMER && (
        <div>
          {/* Customer specific options if needed */}
        </div>
      )}
    </div>
  );
}