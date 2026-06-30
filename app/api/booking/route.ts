import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { format } from 'date-fns';
import connectToDatabase from '@/lib/db';
import Booking from '@/models/Booking';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 });
    }

    await connectToDatabase();
    
    // Convert to simple YYYY-MM-DD if ISO
    const dateOnly = date.split('T')[0];

    // Find all bookings for this date
    const bookings = await Booking.find({ date: dateOnly }).select('time -_id');
    const bookedSlots = bookings.map(b => b.time);

    return NextResponse.json({ bookedSlots });
  } catch (error) {
    console.error('Error fetching booked slots:', error);
    return NextResponse.json({ error: 'Failed to fetch booked slots' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const dateStr = data.date ? format(new Date(data.date), 'EEEE, MMMM do, yyyy') : 'N/A';
    const dateOnly = data.date ? data.date.split('T')[0] : '';

    if (!dateOnly || !data.time) {
      return NextResponse.json({ success: false, error: 'Date and time are required' }, { status: 400 });
    }

    await connectToDatabase();

    // Check if slot is already booked
    const existingBooking = await Booking.findOne({ date: dateOnly, time: data.time });
    if (existingBooking) {
      return NextResponse.json({ success: false, error: 'This time slot is already booked' }, { status: 400 });
    }

    // Save the new booking
    await Booking.create({
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      website: data.website || '',
      service: data.service,
      expert: data.expert,
      date: dateOnly,
      time: data.time,
      message: data.message || ''
    });
    
    let transporter;
    let testAccount;
    
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      // Fallback to ethereal for testing if env vars are missing
      testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
          body { font-family: 'Space Grotesk', -apple-system, sans-serif; background-color: #020617; margin: 0; padding: 40px 20px; color: #f8fafc; -webkit-font-smoothing: antialiased; }
          .wrapper { max-width: 600px; margin: 0 auto; background-color: #0f172a; border-radius: 24px; overflow: hidden; border: 1px solid rgba(90, 150, 227, 0.2); box-shadow: 0 10px 40px -10px rgba(90, 150, 227, 0.15); }
          .header { background: #020617; padding: 48px 40px; text-align: center; border-bottom: 1px solid rgba(90, 150, 227, 0.2); }
          .header h1 { color: #f8fafc; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
          .header h1 span { background: linear-gradient(to right, #5A96E3, #40BF40, #F29633); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #5A96E3; }
          .header p { color: #94a3b8; margin: 12px 0 0 0; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; }
          .content { padding: 40px; }
          .greeting { font-size: 24px; font-weight: 700; color: #f8fafc; margin: 0 0 8px 0; }
          .subtitle { color: #94a3b8; font-size: 15px; margin: 0 0 32px 0; line-height: 1.5; }
          .section-title { font-size: 13px; font-weight: 700; color: #5A96E3; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; }
          
          .grid { display: table; width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 32px; background: rgba(2, 6, 23, 0.5); border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; }
          .row { display: table-row; }
          .row:not(:last-child) .cell { border-bottom: 1px solid rgba(255,255,255,0.05); }
          .cell { display: table-cell; padding: 16px 20px; vertical-align: top; }
          .cell-label { width: 35%; color: #94a3b8; font-size: 14px; font-weight: 500; }
          .cell-value { width: 65%; color: #f8fafc; font-size: 15px; font-weight: 600; text-align: right; }
          
          .highlight-card { background: linear-gradient(145deg, rgba(90, 150, 227, 0.1), rgba(2, 6, 23, 1)); border-radius: 16px; padding: 24px; margin-bottom: 32px; border: 1px solid rgba(90, 150, 227, 0.3); }
          .highlight-card .section-title { color: #f8fafc; border-bottom-color: rgba(90, 150, 227, 0.2); }
          .hc-row { margin-bottom: 12px; display: table; width: 100%; }
          .hc-row:last-child { margin-bottom: 0; }
          .hc-label { display: table-cell; color: #94a3b8; font-size: 14px; width: 35%; }
          .hc-value { display: table-cell; color: #5A96E3; font-size: 15px; font-weight: 600; text-align: right; width: 65%; }
          
          .message-box { background: rgba(2, 6, 23, 0.5); border: 1px solid rgba(255,255,255,0.05); border-left: 4px solid #5A96E3; padding: 24px; border-radius: 0 12px 12px 0; margin-bottom: 32px; }
          .message-content { color: #cbd5e1; font-size: 15px; line-height: 1.6; margin: 0; font-style: italic; }
          
          .next-steps { background: rgba(16, 185, 129, 0.1); border: 1px dashed rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; text-align: center; }
          .next-steps p { color: #34d399; margin: 0; font-size: 14px; font-weight: 500; }

          .footer { text-align: center; padding: 32px 40px; background-color: #020617; border-top: 1px solid rgba(255,255,255,0.05); }
          .footer p { margin: 0; color: #64748b; font-size: 13px; line-height: 1.5; }
          .footer .logo-small { font-weight: 800; color: #f8fafc; margin-bottom: 8px; font-size: 14px; letter-spacing: 2px; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <!-- Header -->
          <div class="header">
            <h1>RH <span>INTERNATIONAL</span></h1>
            <p>Sourcing Center</p>
          </div>
          
          <!-- Content -->
          <div class="content">
            <h2 class="greeting">New Consultation Request</h2>
            <p class="subtitle">A new booking request has been successfully submitted. Below are the finalized details.</p>
            
            <!-- Lead Details (Dark Card) -->
            <div class="section-title">Client Profile</div>
            <div class="grid">
              <div class="row">
                <div class="cell cell-label">Full Name</div>
                <div class="cell cell-value">${data.name}</div>
              </div>
              <div class="row">
                <div class="cell cell-label">Email Address</div>
                <div class="cell cell-value"><a href="mailto:${data.email}" style="color: #5A96E3; text-decoration: none;">${data.email}</a></div>
              </div>
              <div class="row">
                <div class="cell cell-label">Phone / WhatsApp</div>
                <div class="cell cell-value">${data.phone}</div>
              </div>
              <div class="row">
                <div class="cell cell-label">Company Name</div>
                <div class="cell cell-value">${data.company}</div>
              </div>
              <div class="row">
                <div class="cell cell-label">Website / LinkedIn</div>
                <div class="cell cell-value">${data.website ? `<a href="${data.website.startsWith('http') ? data.website : 'https://' + data.website}" style="color: #5A96E3; text-decoration: none;">${data.website}</a>` : '<span style="color: #64748b; font-weight: 400;">Not provided</span>'}</div>
              </div>
            </div>
            
            <!-- Schedule Details (Cyan Glow Card) -->
            <div class="highlight-card">
              <div class="section-title">Meeting Schedule</div>
              <div class="hc-row">
                <div class="hc-label">Service Type</div>
                <div class="hc-value">${data.service}</div>
              </div>
              <div class="hc-row">
                <div class="hc-label">Assigned Expert</div>
                <div class="hc-value" style="color: #f8fafc;">${data.expert}</div>
              </div>
              <div class="hc-row" style="padding-top: 16px; margin-top: 16px; border-top: 1px dashed rgba(90, 150, 227, 0.2);">
                <div class="hc-label">Date</div>
                <div class="hc-value" style="color: #f8fafc;">${dateStr}</div>
              </div>
              <div class="hc-row">
                <div class="hc-label">Time Slot</div>
                <div class="hc-value" style="font-size: 18px; color: #5A96E3;">${data.time}</div>
              </div>
            </div>
            
            <!-- Client Message -->
            <div class="section-title">Client Message</div>
            <div class="message-box">
              <p class="message-content">"${data.message || 'No additional message provided.'}"</p>
            </div>

            <!-- Next Steps -->
            <div class="next-steps">
              <p>Status: Pending Review. Our team will verify this request and send a Google Meet invite shortly.</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <div class="logo-small">RH INTERNATIONAL</div>
            <p>This is an automated notification from your secure booking system.<br>Please do not reply directly to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const senderEmail = process.env.SMTP_USER || (testAccount && testAccount.user) || 'a.kias@rhinternationalsc.com';

    const info = await transporter.sendMail({
      from: '"RH Booking System" <' + senderEmail + '>',
      to: 'a.kias@rhinternationalsc.com',
      subject: `New Booking Request: ${data.name} - ${data.service}`,
      html: htmlTemplate,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true, 
      previewUrl: nodemailer.getTestMessageUrl(info) 
    });
    } catch (error: any) {
      console.error('Error in booking POST:', error);
      return NextResponse.json({ success: false, error: error.message || 'Failed to send booking request' }, { status: 500 });
    }
}

// Trigger Turbopack rebuild
