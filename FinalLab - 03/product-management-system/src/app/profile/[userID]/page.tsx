'use client';

import { User } from "@/app/_types/user";
import "../../globals.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

export default function Profile({ params }: { params: { userID: string } }) {
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
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
        <div className="max-w-md bg-white rounded-lg shadow-xl p-8">
            <p className="text-xl font-bold text-gray-900 py-4 px-6 rounded-lg bg-gray: 900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <b>Username: {user.username}</b> 
            </p>
            <p className="text-xl font-bold text-gray-900 py-4 px-6 rounded-lg bg-gray 900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <b>Fullname: {user.fullname}</b> 
            </p>
            <p className="text-xl font-bold text-gray-900 py-4 px-6 rounded-lg bg-gray 900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <b>Phone: {user.phone}</b> 
            </p>
            <p className="text-xl font-bold text-gray-900 py-4 px-6 rounded-lg bg-gray 900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <b>Email: {user.email}</b> 
            </p>
        </div>
        </div>
    );
}