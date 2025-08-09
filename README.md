# Fixes OS – Next.js + Tailwind + ChatBot + Zapier Webhook

## Quick Start
```bash
npm i
npm run dev
```

## Environment
Create `.env.local`:
```
NEXT_PUBLIC_WABA_NUMBER=966549357309
ZAPIER_HOOK_URL=   # paste your Zapier Catch Hook URL here
ZAPIER_API_KEY=    # optional header if you secure your hook
```

## What it does
- Landing page (AR/EN, SAR/USD @ 0.27).
- Floating ChatBot with 3 flows: FAQs, Booking, Ticket.
- `/api/webhook` forwards to Zapier hook. Payload includes Arabic sheet fields:
  - التاريخ
  - نوع الطلب
  - البيانات
  - رقم المرجع
  - رابط واتساب
  - الحالة (جديد)
- If `ZAPIER_HOOK_URL` is empty, server logs payload (safe fallback).

## Zapier
- Use **Catch Hook** trigger.
- Map the incoming `sheetRow` fields to Google Sheets columns (Arabic headers).
- Optional: Add Trello step to create a card from `type`, `ref`, and `البيانات`.
