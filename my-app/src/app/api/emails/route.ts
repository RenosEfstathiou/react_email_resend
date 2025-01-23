import Welcome from "@/emails/Welcome";
import { NextResponse } from "next/server";
import { Resend } from "resend";
//re_DDW6uqF4_DpDquayai8d1n4STWL9xQitg
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {firstName, email} = await request.json();

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Welcome',
        react: Welcome({firstName}),
      });

      return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
      console.error("Error processing the request:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }
}