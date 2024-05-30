import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    await transporter.sendMail({
      from: '"Contact Form" <no-reply@yourdomain.com>',
      to: 'tumtechinc@gmail.com',
      subject: 'New Contact Form Submission',
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
      html: `<p>You have received a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);  // Add this line
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
