import nodemailer from 'nodemailer';

async function test() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'a.kias@rhinternationalsc.com',
      pass: '#A.kias@2026#!',
    },
    logger: true,
    debug: true
  });

  try {
    await transporter.verify();
    console.log("Success! SMTP credentials are correct.");
  } catch (error) {
    console.error("Failed to authenticate:", error.message);
  }
}

test();
