
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            firstName,
            lastName,
            email,
            phone,
            subject,
            message,
        } = body ?? {};

        // Validate required fields.
        if (
            typeof firstName !== "string" ||
            typeof lastName !== "string" ||
            typeof email !== "string" ||
            typeof phone !== "string" ||
            typeof subject !== "string" ||
            typeof message !== "string" ||
            !firstName.trim() ||
            !lastName.trim() ||
            !email.trim() ||
            !phone.trim() ||
            !subject.trim() ||
            !message.trim()
        ) {
            return NextResponse.json(
                { message: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.trim())) {
            return NextResponse.json(
                { message: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        // SMTP configuration.
        const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
        const smtpPort = Number(process.env.SMTP_PORT || 587);
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const recipient =
            process.env.CONTACT_EMAIL || "info@amazingglove.com";

        if (!smtpUser || !smtpPass) {
            console.error("Contact email SMTP configuration is incomplete.");

            return NextResponse.json(
                { message: "Email service is not configured." },
                { status: 500 }
            );
        }

        if (![465, 587].includes(smtpPort)) {
            return NextResponse.json(
                { message: "Invalid email server configuration." },
                { status: 500 }
            );
        }

        const allowedSubjects: Record<string, string> = {
            "product-enquiry": "Product Enquiry",
            "bulk-order": "Bulk Order",
            quotation: "Request a Quote",
            partnership: "Business Partnership",
            other: "Other",
        };

        const selectedSubject = allowedSubjects[subject.trim()];

        if (!selectedSubject) {
            return NextResponse.json(
                { message: "Please select a valid subject." },
                { status: 400 }
            );
        }

        const fullName = `${firstName.trim()} ${lastName.trim()}`;

        const safeName = escapeHtml(fullName);
        const safeEmail = escapeHtml(email.trim());
        const safePhone = escapeHtml(phone.trim());
        const safeSubject = escapeHtml(selectedSubject);
        const safeMessage = escapeHtml(message.trim());

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
            connectionTimeout: 15000,
            greetingTimeout: 15000,
            socketTimeout: 20000,
        });

        await transporter.sendMail({
            from: `"Amazing Glove Website" <${smtpUser}>`,
            to: recipient,
            replyTo: email.trim(),
            subject: `Contact Enquiry: ${selectedSubject}`,

            text: `
NEW CONTACT FORM MESSAGE

Name: ${fullName}
Email: ${email.trim()}
Phone: ${phone.trim()}
Subject: ${selectedSubject}

MESSAGE:
${message.trim()}
            `.trim(),

            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Enquiry</title>
</head>

<body style="margin:0;padding:0;background:#F1F5F7;font-family:Arial,Helvetica,sans-serif;color:#263B42;">

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
        style="background:#F1F5F7;padding:35px 12px;">
        <tr>
            <td align="center">

                <table role="presentation" width="600" cellpadding="0" cellspacing="0"
                    style="width:100%;max-width:600px;background:#FFFFFF;border:1px solid #E2E9EC;border-radius:14px;overflow:hidden;">

                    <tr>
                        <td style="background:#0A2E39;padding:35px 25px;text-align:center;">
                            <div style="display:inline-block;background:#174957;color:#8DE3D0;padding:9px 17px;border-radius:30px;font-size:11px;font-weight:bold;letter-spacing:2px;">
                                AMAZING GLOVE
                            </div>

                            <h1 style="margin:22px 0 10px;color:#FFFFFF;font-size:27px;">
                                New Contact Enquiry
                            </h1>

                            <p style="margin:0;color:#D2E2E6;font-size:14px;line-height:1.8;">
                                You have received a new message from your website.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="height:5px;background:#43C6AC;font-size:0;">&nbsp;</td>
                    </tr>

                    <tr>
                        <td style="padding:30px;">

                            <p style="margin:0 0 8px;color:#657A81;font-size:11px;font-weight:bold;letter-spacing:1.5px;">
                                NEW MESSAGE RECEIVED
                            </p>

                            <h2 style="margin:0 0 22px;color:#0A2E39;font-size:23px;overflow-wrap:anywhere;">
                                ${safeName}
                            </h2>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                style="border:1px solid #E3EAED;border-radius:9px;border-collapse:separate;border-spacing:0;">

                                <tr>
                                    <td style="width:35%;padding:14px;background:#F7FAFB;border-bottom:1px solid #E3EAED;color:#6A7D84;font-size:13px;">
                                        Email Address
                                    </td>
                                    <td style="padding:14px;border-bottom:1px solid #E3EAED;font-size:14px;overflow-wrap:anywhere;">
                                        <a href="mailto:${safeEmail}" style="color:#087F8C;text-decoration:none;font-weight:bold;">
                                            ${safeEmail}
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:14px;background:#F7FAFB;border-bottom:1px solid #E3EAED;color:#6A7D84;font-size:13px;">
                                        Phone Number
                                    </td>
                                    <td style="padding:14px;border-bottom:1px solid #E3EAED;color:#173943;font-size:14px;overflow-wrap:anywhere;">
                                        ${safePhone}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:14px;background:#F7FAFB;color:#6A7D84;font-size:13px;">
                                        Subject
                                    </td>
                                    <td style="padding:14px;color:#173943;font-size:14px;font-weight:bold;overflow-wrap:anywhere;">
                                        ${safeSubject}
                                    </td>
                                </tr>

                            </table>

                            <h3 style="margin:28px 0 13px;color:#0A2E39;font-size:17px;">
                                Message
                            </h3>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                style="background:#F7FAFB;border:1px solid #E4ECEF;border-left:4px solid #43C6AC;border-radius:7px;">
                                <tr>
                                    <td style="padding:20px;color:#52676F;font-size:14px;line-height:1.9;overflow-wrap:anywhere;white-space:pre-wrap;">
                                        ${safeMessage}
                                    </td>
                                </tr>
                            </table>

                            <p style="margin:24px 0 0;color:#61747B;font-size:13px;line-height:1.8;">
                                You can reply directly to this email to respond to the customer.
                            </p>

                        </td>
                    </tr>

                    <tr>
                        <td style="background:#0A2E39;padding:24px;text-align:center;">
                            <p style="margin:0 0 7px;color:#FFFFFF;font-size:15px;font-weight:bold;">
                                Amazing Rubber Products Pvt. Ltd.
                            </p>
                            <p style="margin:0;color:#C0D3D8;font-size:12px;line-height:1.8;">
                                This is an automated notification from your website's contact form.
                            </p>
                        </td>
                    </tr>

                </table>

                <p style="margin:18px 0 0;color:#87969B;font-size:11px;">
                    Automated notification · Contact Us
                </p>

            </td>
        </tr>
    </table>

</body>
</html>
            `,
        });

        return NextResponse.json(
            { message: "Thank you for contacting us! Your message has been sent successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact email error:", error);

        return NextResponse.json(
            { message: "Unable to send your message. Please try again." },
            { status: 500 }
        );
    }
}
