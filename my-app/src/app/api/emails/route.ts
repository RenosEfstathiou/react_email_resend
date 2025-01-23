import Welcome from "@/emails/Welcome";
import { Resend } from "resend";
//re_DDW6uqF4_DpDquayai8d1n4STWL9xQitg
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const {firstName, email} = await request.json();

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Welcome',
        react: Welcome({firstName}),
      });

}