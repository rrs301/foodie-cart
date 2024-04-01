import Email from "@/emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req){

    const response=await req.json();
    try{
        const data=await resend.emails.send({
            from: 'Foodie-Cart@tubeguruji-app.tubeguruji.com',
            to: [response.email],
            subject: 'Foodie Cart Order Confimration',
            react: Email(),
          });
        return NextResponse.json({data})

    }catch(error){
        return NextResponse.json({error})
    }
}