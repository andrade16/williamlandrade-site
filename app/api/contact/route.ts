// This file will handle POST requests to /api/contact
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, subject, message } = body;

    // Validate all required inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // or your verified domain
      to: process.env.CONTACT_EMAIL!,
      subject: "New Contact Form Submission",
      html: `                                                                                                                              
          <h2>New Contact Form Submission</h2>                                                                                               
          <p><strong>Name:</strong> ${name}</p>                                                                                              
          <p><strong>Email:</strong> ${email}</p>  
          <p><strong>Subject:</strong> ${subject}</p>                                                                                          
          <p><strong>Message:</strong></p>                                                                                                   
          <p>${message}</p>                                                                                                                  
        `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
