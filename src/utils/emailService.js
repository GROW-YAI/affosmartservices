import emailjs from "@emailjs/browser"

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const sendEmail = async (formData) => {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            subject: formData.subject,
            to_name: "AFFOSmart Services",
            reply_to: formData.email
        };

        const response = await emailjs.send(
            EMAIL_SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            templateParams,
            EMAIL_PUBLIC_KEY
        );

        return {
            success: true,
            message: "Email sent successfully",
            response
        };
    } catch (error) {
        return {
            success: false,
            message: "Failed to send email, please try again.",
            error
        }
    }
}