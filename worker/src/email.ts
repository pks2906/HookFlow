import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
  host: process.env.SMTP_ENDPOINT || "smtp.gmail.com", // Fallback to Gmail SMTP
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.SMTP_USERNAME || "sinhapratik2906@gmail.com",
    pass: process.env.SMTP_PASSWORD, // App password goes in .env
  },
});

export async function sendEmail(to: string, body: string) {
  await transport.sendMail({
    from: "sinhapratik2906@gmail.com", // Your verified Gmail address
    sender: "sinhapratik2906@gmail.com",
    to,
    subject: "Hello from Zapier",
    text: body,
  });
}
