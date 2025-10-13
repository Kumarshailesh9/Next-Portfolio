import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // ✅ Set up transporter (use your Gmail or SMTP provider)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // your email where you receive messages
    subject: `New message from ${name}`,
    text: `From: ${name} (${email})\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json({ error: "Failed to send mail" }, { status: 500 });
  }
}
