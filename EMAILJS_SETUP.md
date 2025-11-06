# 📧 EmailJS Setup Guide

This guide will help you set up EmailJS so your contact form works properly.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Sign up with your email or Google account
4. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended - easiest)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Click **"Connect Account"** and authorize EmailJS
5. Once connected, you'll see your **Service ID** (copy this!)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Set the **"To Email"** field to your email address
5. Click **"Save"**
6. Copy your **Template ID**

## Step 4: Get Your Public Key (User ID)

1. Go to **"Account"** → **"General"** in the dashboard
2. Find **"Public Key"** (this is your User ID)
3. Copy it

## Step 5: Add Credentials to Your Project

### Option A: Using Environment Variables (Recommended for Production)

1. Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_USER_ID=your_user_id_here
```

2. Replace the values with your actual IDs from EmailJS
3. **Important**: Add `.env` to `.gitignore` to keep your credentials safe!

### Option B: Direct Configuration (For Testing)

1. Open `src/components/contact/ContactForm.jsx`
2. Find these lines (around line 59-61):
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const userId = import.meta.env.VITE_EMAILJS_USER_ID || 'YOUR_USER_ID';
```

3. Replace `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, and `'YOUR_USER_ID'` with your actual values:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_abc123';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xyz789';
const userId = import.meta.env.VITE_EMAILJS_USER_ID || 'user_123456';
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email inbox - you should receive the message!

## Troubleshooting

### Form shows "Email service not configured"
- Make sure you've added your EmailJS credentials
- Check that all three IDs are correct
- Restart your dev server after adding environment variables

### "Failed to send message" error
- Verify your EmailJS service is connected
- Check that your template is saved correctly
- Make sure your email service (Gmail/Outlook) is authorized
- Check the browser console for detailed error messages

### Not receiving emails
- Check your spam folder
- Verify the "To Email" in your template is correct
- Make sure your email service is properly connected in EmailJS

## Security Notes

⚠️ **Important**: 
- Never commit your `.env` file to GitHub
- The `.gitignore` file should already include `.env`
- For production (Vercel), add environment variables in Vercel dashboard:
  - Go to your project → Settings → Environment Variables
  - Add: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_USER_ID`

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Perfect for personal portfolios!

If you need more, they have affordable paid plans.

---

**Need Help?** Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

