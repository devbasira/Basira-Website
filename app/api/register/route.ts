import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import sgmail from '@sendgrid/mail';

sgmail.setApiKey(process.env.SENDGRID_API_KEY!);

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    
    return NextResponse.json(
        { message: 'GET method is working for testing',
            key : process.env.SENDGRID_API_KEY
         },
        { status: 200 }
    );
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Parse JSON from the request
        const email = body.email;

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
        }

        // Check if the email already exists
        const existingUser = await prisma.subscriber.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ message: 'User Already Exists' }, { status: 400 });
        }

        // Create a new subscriber
        await prisma.subscriber.create({ data: { email } });

        const emailUser = process.env.EMAIL_USER;
        if (!emailUser) {
            return NextResponse.json({ message: 'Email user not configured in environment' }, { status: 500 });
        }

        const mailOptionsToAdmin = {
            from: emailUser,
            to: emailUser,
            subject: 'New Subscriber',
            text: `New user subscribed with email: ${email}`,
        };
        
        try {
            await sgmail.send(mailOptionsToAdmin);
            console.log('Email sent successfully to admin');
        } catch (sendgridError) {
            console.log('SendGrid error:', sendgridError);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }

        console.log('Email sent successfully to admin');



        return NextResponse.json(
            { message: 'Thanks for Joining the Process and trusting Basira Studio' },
            { status: 200 }
        );
    } catch (error : any) {
        console.error('Error in POST method:', error.message, error.stack);
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}
