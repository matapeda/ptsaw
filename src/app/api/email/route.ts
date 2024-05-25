import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    if (!email || !name || !message) {
      return NextResponse.json(
        { error: "Email, name, and message are required" },
        { status: 400 }
      );
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    await new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Email sent");
        }
      });
    });

    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      {
        error: "There was an error sending the email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
