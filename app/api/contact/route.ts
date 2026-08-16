import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, project, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "Velquora Technologies <onboarding@resend.dev>",
      to: ["velquoratechnologies@gmail.com"], // 👈 apna email address yahan likho
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2 style="color:#0891b2;">New Contact Form Submission</h2>

          <table cellpadding="10" cellspacing="0" border="1" style="border-collapse:collapse;width:100%;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Project</strong></td>
              <td>${project}</td>
            </tr>

            <tr>
              <td><strong>Message</strong></td>
              <td>${message}</td>
            </tr>
          </table>

          <br>

          <p>
            This message was sent from the
            <strong>Velquora Technologies</strong>
            website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        {
          status: 500,
        }
      );
    }

    const autoReply = await resend.emails.send({
  from: "Velquora Technologies <onboarding@resend.dev>",
  to: [email],

  subject: "Thank you for contacting Velquora Technologies",

  html: `
  <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:40px;">

    <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">

      <div
        style="
          background:linear-gradient(135deg,#06b6d4,#2563eb);
          padding:35px;
          text-align:center;
          color:white;
        "
      >
        <h1 style="margin:0;">
          Velquora Technologies
        </h1>

        <p style="margin-top:10px;font-size:16px;">
          Thank you for contacting us
        </p>
      </div>

      <div style="padding:40px;">

        <h2>Hello ${name}, 👋</h2>

        <p>
          Thank you for reaching out to
          <strong>Velquora Technologies</strong>.
        </p>

        <p>
          We have successfully received your enquiry regarding
          <strong>${project}</strong>.
        </p>

        <p>
          Our team will carefully review your requirements and get back to you within
          <strong>24 hours.</strong>
        </p>

        <hr style="margin:30px 0;border:none;border-top:1px solid #e2e8f0;" />

        <h3>Your Submitted Details</h3>

        <table cellpadding="10" cellspacing="0" width="100%">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Project</strong></td>
            <td>${project}</td>
          </tr>
        </table>

        <br>

        <a
          href="https://velquora.com"
          style="
            display:inline-block;
            background:#0891b2;
            color:white;
            padding:14px 28px;
            border-radius:10px;
            text-decoration:none;
            font-weight:bold;
          "
        >
          Visit Our Website
        </a>

      </div>

      <div
        style="
          background:#0f172a;
          color:#cbd5e1;
          padding:30px;
          text-align:center;
          font-size:14px;
        "
      >
        © ${new Date().getFullYear()} Velquora Technologies

        <br><br>

        Premium Web Development • UI/UX • SEO • Web Applications

      </div>

    </div>

  </div>
  `,
});
    
    console.log("AUTO REPLY RESPONSE:");
console.log(autoReply);

if (autoReply.error) {
  console.error("AUTO REPLY ERROR:");
  console.error(autoReply.error);
}

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}