import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Configure Nodemailer
    let transporter;
    let testAccount;

    if (process.env.SMTP_HOST) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      });
    } else {
      testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const senderEmail = process.env.SMTP_USER || (testAccount && testAccount.user) || 'a.kias@rhinternationalsc.com';

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: #334155; background-color: #f8fafc; margin: 0; padding: 40px 20px; }
          .wrapper { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
          .header { background: #0f172a; padding: 32px 40px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px; }
          .content { padding: 40px; }
          .greeting { font-size: 20px; font-weight: 600; color: #0f172a; margin: 0 0 24px 0; }
          .message-box { background: #f8fafc; border-left: 4px solid #3b82f6; padding: 24px; border-radius: 0 8px 8px 0; margin-bottom: 32px; font-style: italic; }
          .details-table { width: 100%; border-collapse: collapse; }
          .row { border-bottom: 1px solid #e2e8f0; }
          .row:last-child { border-bottom: none; }
          .label { padding: 16px 0; font-weight: 600; color: #64748b; width: 120px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
          .value { padding: 16px 0; color: #0f172a; font-weight: 500; }
          .footer { background: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0; }
          .footer p { margin: 0; color: #64748b; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>New Contact Message</h1>
          </div>
          <div class="content">
            <p class="greeting">You have received a new message from your website contact form.</p>
            
            <div class="message-box">
              "${data.message.replace(/\n/g, '<br>')}"
            </div>

            <table class="details-table">
              <tr class="row">
                <td class="label">Name</td>
                <td class="value">${data.name}</td>
              </tr>
              <tr class="row">
                <td class="label">Email</td>
                <td class="value"><a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr class="row">
                <td class="label">Subject</td>
                <td class="value">${data.subject}</td>
              </tr>
            </table>
          </div>
          <div class="footer">
            <p>This email was sent automatically from RH International Website.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const info = await transporter.sendMail({
      from: `"RH Contact Form" <${senderEmail}>`,
      to: 'a.kias@rhinternationalsc.com',
      subject: `New Message: ${data.subject}`,
      html: htmlTemplate,
    });

    if (testAccount) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
