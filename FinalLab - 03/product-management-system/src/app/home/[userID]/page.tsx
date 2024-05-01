'use client'

import "../../globals.css";
import { User } from '@/_types/user';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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
  }, []);

  if (!user) {
    return <div className="min-h-screen bg-gray-900 text-white p-8 text-3xl font-bold">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{user.username}</h1>
      {user.role === Role.ADMIN && (
        <div>
          
        </div>
      )}
      {user.role === Role.CUSTOMER && (
        <div>
          
        </div>
      )}
    </div>
  );
}