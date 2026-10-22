import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Escape user-submitted values before inserting them into HTML.
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
            fullName,
            phone,
            email,
            experience,
            message,
            position,
        } = body ?? {};

        // Validate required fields.
        if (
            typeof fullName !== "string" ||
            typeof phone !== "string" ||
            typeof email !== "string" ||
            typeof position !== "string" ||
            !fullName.trim() ||
            !phone.trim() ||
            !email.trim() ||
            !position.trim()
        ) {
            return NextResponse.json(
                { message: "Please provide all required details." },
                { status: 400 }
            );
        }

        // Validate email format.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.trim())) {
            return NextResponse.json(
                { message: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Email configuration.
        const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const recipient = process.env.CAREERS_EMAIL;
        const smtpPort = Number(process.env.SMTP_PORT || 587);

        if (!smtpUser || !smtpPass || !recipient) {
            console.error(
                "Career email configuration is incomplete. Check SMTP_USER, SMTP_PASS and CAREERS_EMAIL."
            );

            return NextResponse.json(
                { message: "Email service is not configured. Please contact us directly." },
                { status: 500 }
            );
        }

        if (![465, 587].includes(smtpPort)) {
            console.error("Invalid SMTP_PORT. Use 465 or 587.");

            return NextResponse.json(
                { message: "Email service configuration is invalid." },
                { status: 500 }
            );
        }

        // Prepare application values.
        const applicantName = fullName.trim();
        const applicantPhone = phone.trim();
        const applicantEmail = email.trim();
        const appliedPosition = position.trim();

        const applicantExperience =
            typeof experience === "string" && experience.trim()
                ? experience.trim()
                : "Not specified";

        const applicantMessage =
            typeof message === "string" && message.trim()
                ? message.trim()
                : "No additional message provided.";

        // Escape values used in HTML.
        const safeName = escapeHtml(applicantName);
        const safePhone = escapeHtml(applicantPhone);
        const safeEmail = escapeHtml(applicantEmail);
        const safePosition = escapeHtml(appliedPosition);
        const safeExperience = escapeHtml(applicantExperience);
        const safeMessage = escapeHtml(applicantMessage);

        // Configure SMTP.
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

        // Send application email.
        await transporter.sendMail({
            from: `"Career Applications" <${smtpUser}>`,
            to: recipient,
            replyTo: applicantEmail,
            subject: `New Career Application - ${appliedPosition}`,

            text: `
NEW CAREER APPLICATION

Position Applied For: ${appliedPosition}

CANDIDATE INFORMATION

Full Name: ${applicantName}
Email Address: ${applicantEmail}
Phone Number: ${applicantPhone}
Experience: ${applicantExperience}

APPLICANT'S MESSAGE

${applicantMessage}

This email was generated from your website's career application form.
            `.trim(),

            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Career Application</title>
</head>

<body style="margin:0;padding:0;background-color:#F1F5F7;font-family:Arial,Helvetica,sans-serif;color:#263B42;">

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
        style="background-color:#F1F5F7;padding:35px 12px;">
        <tr>
            <td align="center">

                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
                    style="width:100%;max-width:600px;background-color:#FFFFFF;border-radius:14px;overflow:hidden;border:1px solid #E2E9EC;">

                    <!-- Header -->
                    <tr>
                        <td style="background-color:#0A2E39;padding:36px 25px;text-align:center;">

                            <div style="display:inline-block;background-color:#174957;color:#8DE3D0;padding:9px 17px;border-radius:30px;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">
                                Recruitment Team
                            </div>

                            <h1 style="margin:22px 0 10px;color:#FFFFFF;font-size:28px;line-height:1.3;">
                                New Career Application
                            </h1>

                            <p style="margin:0;color:#D2E2E6;font-size:14px;line-height:1.8;">
                                A new candidate has applied to join your team.
                            </p>

                        </td>
                    </tr>

                    <!-- Accent -->
                    <tr>
                        <td style="height:5px;background-color:#43C6AC;font-size:0;line-height:0;">&nbsp;</td>
                    </tr>

                    <!-- Introduction -->
                    <tr>
                        <td style="padding:30px 30px 22px;">

                            <p style="margin:0 0 9px;color:#657A81;font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;">
                                Application received
                            </p>

                            <h2 style="margin:0 0 12px;color:#0A2E39;font-size:23px;line-height:1.4;overflow-wrap:anywhere;">
                                ${safeName}
                            </h2>

                            <p style="margin:0;color:#61747B;font-size:14px;line-height:1.8;">
                                A candidate has expressed interest in working with your organisation.
                                Here are the details submitted through your careers page.
                            </p>

                        </td>
                    </tr>

                    <!-- Position -->
                    <tr>
                        <td style="padding:0 30px 27px;">

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                                style="background-color:#EAF8F5;border:1px solid #C9EDE4;border-radius:10px;">
                                <tr>
                                    <td style="padding:20px 22px;">

                                        <p style="margin:0 0 8px;color:#367B70;font-size:11px;font-weight:bold;letter-spacing:1.2px;text-transform:uppercase;">
                                            Position applied for
                                        </p>

                                        <p style="margin:0;color:#0A2E39;font-size:19px;font-weight:bold;line-height:1.6;overflow-wrap:anywhere;">
                                            ${safePosition}
                                        </p>

                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Candidate details -->
                    <tr>
                        <td style="padding:0 30px 10px;">

                            <h3 style="margin:0 0 16px;color:#0A2E39;font-size:17px;">
                                Candidate Information
                            </h3>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                                style="border:1px solid #E3EAED;border-radius:10px;border-collapse:separate;border-spacing:0;overflow:hidden;">

                                <tr>
                                    <td style="width:36%;padding:15px;background-color:#F7FAFB;border-bottom:1px solid #E3EAED;color:#6A7D84;font-size:13px;">
                                        Full Name
                                    </td>
                                    <td style="padding:15px;border-bottom:1px solid #E3EAED;color:#173943;font-size:14px;font-weight:bold;overflow-wrap:anywhere;">
                                        ${safeName}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:15px;background-color:#F7FAFB;border-bottom:1px solid #E3EAED;color:#6A7D84;font-size:13px;">
                                        Email Address
                                    </td>
                                    <td style="padding:15px;border-bottom:1px solid #E3EAED;font-size:14px;overflow-wrap:anywhere;">
                                        <a href="mailto:${safeEmail}" style="color:#087F8C;text-decoration:none;font-weight:bold;">
                                            ${safeEmail}
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:15px;background-color:#F7FAFB;border-bottom:1px solid #E3EAED;color:#6A7D84;font-size:13px;">
                                        Phone Number
                                    </td>
                                    <td style="padding:15px;border-bottom:1px solid #E3EAED;color:#173943;font-size:14px;overflow-wrap:anywhere;">
                                        ${safePhone}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:15px;background-color:#F7FAFB;color:#6A7D84;font-size:13px;">
                                        Experience
                                    </td>
                                    <td style="padding:15px;color:#173943;font-size:14px;overflow-wrap:anywhere;">
                                        ${safeExperience}
                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                        <td style="padding:25px 30px 32px;">

                            <h3 style="margin:0 0 15px;color:#0A2E39;font-size:17px;">
                                Applicant's Message
                            </h3>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                                style="background-color:#F7FAFB;border:1px solid #E4ECEF;border-left:4px solid #43C6AC;border-radius:7px;">
                                <tr>
                                    <td style="padding:20px;color:#52676F;font-size:14px;line-height:1.9;overflow-wrap:anywhere;white-space:pre-wrap;">
                                        ${safeMessage}
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color:#0A2E39;padding:26px 25px;text-align:center;">

                            <p style="margin:0 0 8px;color:#FFFFFF;font-size:15px;font-weight:bold;">
                                Career Recruitment
                            </p>

                            <p style="margin:0;color:#C0D3D8;font-size:12px;line-height:1.8;">
                                This email was automatically generated from your website's career application form.
                            </p>

                        </td>
                    </tr>

                </table>

                <p style="margin:18px 0 0;color:#87969B;font-size:11px;line-height:1.7;text-align:center;">
                    Automated notification · Career Application
                </p>

            </td>
        </tr>
    </table>

</body>
</html>
            `,
        });

        return NextResponse.json(
            {
                message: "Your application has been submitted successfully!",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Career email error:", error);

        return NextResponse.json(
            {
                message: "Unable to send your application. Please try again.",
            },
            { status: 500 }
        );
    }
}
