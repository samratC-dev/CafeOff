# Morning Bite

Premium breakfast website built with React + Vite + plain CSS.

## Run Locally

```bash
npm install
npm run dev
```

## Contact Email Setup (EmailJS)

1. Create an account at EmailJS and create:
   - One email service
   - One email template
2. In your template, include these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`
3. Copy `.env.example` to `.env` and set real values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart dev server after updating `.env`.

## One-Time Deploy (Vercel/Netlify)

1. Push project to GitHub.
2. Import repo in Vercel or Netlify.
3. Add the same `VITE_EMAILJS_*` environment variables in project settings.
4. Deploy.
