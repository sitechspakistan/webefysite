import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, businessName, businessType, volume, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.host,
            port: 465,
            secure: true,
            auth: {
                user: process.env.user,
                pass: process.env.pass,
            },
        });

        const clientPhone = phone && phone.trim() !== "" ? phone : "Not Provided";
        const selectedbusiness = businessType || businessType || "Not Specified";
        const selectedvolume = volume || volume || "Not Specified";
        const clientMessage = message && message.trim() !== "" ? message : "No details provided.";

        await transporter.sendMail({
            from: '"Webefy Today" <noreply@webefytoday.com>',
            to: "webefytoday@gmail.com",
            replyTo: email,
            subject: `New Demo Request: ${selectedbusiness}`,
            html: `
<html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
        </style>
    </head>
    <body>
        <div style="font-size: 16px; font-weight: 500;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Phone-No:</strong> ${clientPhone}</p>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Business Type:</strong> ${selectedbusiness}</p>
            <p><strong>Monthly Volume:</strong> ${selectedvolume}</p>
            <p><strong>Message:</strong><br/> ${clientMessage}</p>
        </div>
    </body>
</html>
`,
        });

        return Response.json({ success: true });
    }
    catch (error) {
        console.error("Nodemailer Error:", error);
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}