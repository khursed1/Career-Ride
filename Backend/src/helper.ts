import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_KEY);

export async function sendPasswordResetEmail(
  toEmail: string,
  resetLink: string
) {
  const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            max-width: 500px;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          h2 {
            color: #333;
          }
          p {
            color: #555;
            font-size: 16px;
          }
          .btn {
            display: inline-block;
            padding: 12px 20px;
            margin: 20px 0;
            text-decoration: none;
            background: #007bff;
            color: #ffffff;
            font-size: 16px;
            border-radius: 5px;
          }
          .btn:hover {
            background: #0056b3;
          }
          .footer {
            font-size: 12px;
            color: #888;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Password Reset Request</h2>
          <p>You recently requested to reset your password. Click the button below to reset it:</p>
          <a href="${resetLink}" class="btn">Reset Password</a>
          <p>If you did not request this, please ignore this email.</p>
          <div class="footer">
            <p>© 2024 YourCompany. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

  const mailOptions = {
    from: "noreply@logicnook.site", // Sender email
    to: toEmail, // Recipient email
    subject: "Reset Your Password",
    html: htmlTemplate,
  };

  await resend.emails.send(mailOptions);
}
