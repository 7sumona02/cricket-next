// File: src/app/api/register/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
    const data = await req.json();
    // Here you can handle the data, e.g., save it to a database
    console.log(data); // For demonstration purposes
    return NextResponse.json({ message: 'Registration successful!' });
}