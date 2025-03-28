import { Resend } from 'resend';
import { NextResponse } from 'next/server';

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('API Route POST handler called');
  
  try {
    const body = await request.json();
    console.log('Request body received:', body);
    
    const { name, email, company, message } = body;
    console.log('Extracted form data:', { name, email, company, message });

    console.log('Attempting to send email...');
    const data = await resend.emails.send({
      from: 'TheSCAN <contact@the-scan.io>',
      to: ['saslow.elliott@gmail.com'], // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to send message', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 