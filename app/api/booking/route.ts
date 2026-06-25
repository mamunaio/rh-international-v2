import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { format } from 'date-fns';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    let transporter;
    
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
      const testAccount = await nodemailer.createTestAccount();
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

    const dateStr = data.date ? format(new Date(data.date), 'EEEE, MMMM do, yyyy') : 'N/A';
    
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
          body { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 40px 20px; color: #0f172a; -webkit-font-smoothing: antialiased; }
          .wrapper { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
          .header { background: #020617; padding: 48px 40px; text-align: center; position: relative; overflow: hidden; }
          .header::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #2C74C8, #2A9D36, #F78C11); }
          .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
          .header h1 span { color: #2C74C8; }
          .header p { color: #94a3b8; margin: 12px 0 0 0; font-size: 14px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; }
          .content { padding: 48px 40px; background-color: #ffffff; }
          .greeting { font-size: 24px; font-weight: 700; color: #0f172a; margin: 0 0 8px 0; }
          .subtitle { color: #64748b; font-size: 15px; margin: 0 0 32px 0; line-height: 1.5; }
          .section-title { font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; }
          
          .grid { display: table; width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 32px; background: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; }
          .row { display: table-row; }
          .row:not(:last-child) .cell { border-bottom: 1px solid #e2e8f0; }
          .cell { display: table-cell; padding: 16px 20px; vertical-align: top; }
          .cell-label { width: 35%; color: #64748b; font-size: 14px; font-weight: 500; }
          .cell-value { width: 65%; color: #0f172a; font-size: 14px; font-weight: 600; text-align: right; }
          
          .highlight-card { background: linear-gradient(145deg, #0f172a, #1e293b); border-radius: 16px; padding: 24px; margin-bottom: 32px; color: #ffffff; border: 1px solid rgba(44, 116, 200, 0.2); }
          .highlight-card .section-title { color: #94a3b8; border-bottom-color: rgba(255,255,255,0.1); }
          .hc-row { margin-bottom: 12px; display: table; width: 100%; }
          .hc-row:last-child { margin-bottom: 0; }
          .hc-label { display: table-cell; color: #94a3b8; font-size: 14px; width: 35%; }
          .hc-value { display: table-cell; color: #ffffff; font-size: 15px; font-weight: 600; text-align: right; width: 65%; }
          
          .message-box { background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #2C74C8; padding: 24px; border-radius: 0 12px 12px 0; margin-bottom: 32px; }
          .message-content { color: #334155; font-size: 15px; line-height: 1.6; margin: 0; font-style: italic; }
          
          .footer { text-align: center; padding: 32px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; }
          .footer p { margin: 0; color: #94a3b8; font-size: 13px; line-height: 1.5; }
          .footer .logo-small { font-weight: 800; color: #0f172a; margin-bottom: 8px; font-size: 14px; letter-spacing: 1px; }
          
          /* Primary accent text */
          .text-accent { color: #2C74C8; }
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
            <p class="subtitle">A new client has requested a booking via the website. Below are the details of the request.</p>
            
            <!-- Lead Details (Light Card) -->
            <div class="section-title">Client Information</div>
            <div class="grid">
              <div class="row">
                <div class="cell cell-label">Full Name</div>
                <div class="cell cell-value">${data.name}</div>
              </div>
              <div class="row">
                <div class="cell cell-label">Email Address</div>
                <div class="cell cell-value"><a href="mailto:${data.email}" style="color: #2C74C8; text-decoration: none;">${data.email}</a></div>
              </div>
              <div class="row">
                <div class="cell cell-label">Company</div>
                <div class="cell cell-value">${data.company || '<span style="color: #94a3b8; font-weight: 400;">Not provided</span>'}</div>
              </div>
            </div>
            
            <!-- Schedule Details (Dark Card) -->
            <div class="highlight-card">
              <div class="section-title" style="color: #cbd5e1;">Meeting Schedule</div>
              <div class="hc-row">
                <div class="hc-label">Service Type</div>
                <div class="hc-value" style="color: #60A5FA;">${data.service}</div>
              </div>
              <div class="hc-row">
                <div class="hc-label">Assigned Expert</div>
                <div class="hc-value">${data.expert}</div>
              </div>
              <div class="hc-row" style="padding-top: 16px; margin-top: 16px; border-top: 1px dashed rgba(255,255,255,0.1);">
                <div class="hc-label">Date</div>
                <div class="hc-value">${dateStr}</div>
              </div>
              <div class="hc-row">
                <div class="hc-label">Time Slot</div>
                <div class="hc-value" style="font-size: 18px; color: #60A5FA;">${data.time}</div>
              </div>
            </div>
            
            <!-- Client Message -->
            <div class="section-title">Message from Client</div>
            <div class="message-box">
              <p class="message-content">"${data.message || 'No additional message provided.'}"</p>
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

    const senderEmail = process.env.SMTP_USER || testAccount.user;

    const info = await transporter.sendMail({
      from: `"RH Booking System" <${senderEmail}>`,
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
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
