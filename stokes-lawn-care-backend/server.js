import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://beulahlawncare.com",
      "https://www.beulahlawncare.com",
    ],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Stokes Lawn Care backend is running." });
});

app.post("/api/quote-request", async (req, res) => {
  try {
    if (!resend) {
      return res.status(500).json({
        ok: false,
        message: "Resend is not configured yet.",
      });
    }

    const { name, phone, email, address, service, message } = req.body;

    if (!name || !phone || !email || !service) {
      return res.status(400).json({
        ok: false,
        message: "Missing required fields.",
      });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="color: #15803d;">New Quote Request - Stokes Lawn Care</h2>
        <p>You received a new quote request from the website.</p>

        <table style="border-collapse: collapse; width: 100%; max-width: 700px;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">Full Name:</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Phone:</td>
            <td style="padding: 8px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Property Address:</td>
            <td style="padding: 8px;">${address || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Service Needed:</td>
            <td style="padding: 8px;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 8px;">${message || "No additional message provided."}</td>
          </tr>
        </table>
      </div>
    `;

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: emailHtml,
    });

    return res.status(200).json({
      ok: true,
      message: "Quote request sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Quote request error:", error);

    return res.status(500).json({
      ok: false,
      message: "Something went wrong sending the quote request.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});