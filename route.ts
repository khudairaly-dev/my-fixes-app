import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const ref = genRef();
    const receivedAt = new Date().toISOString();
    const type = String(body.type || "lead");
    const lang = String(body.lang || "ar");
    const waba = process.env.NEXT_PUBLIC_WABA_NUMBER || "966549357309";

    // WhatsApp link including context
    const prefill =
      lang === "ar"
        ? `مرجع: ${ref}\nنوع: ${type}\nبيانات: ${JSON.stringify(body)}`
        : `Ref: ${ref}\nType: ${type}\nData: ${JSON.stringify(body)}`;
    const whatsappLink = `https://wa.me/${encodeURIComponent(waba)}?text=${encodeURIComponent(prefill)}`;

    // Arabic sheet fields (+ status)
    const sheetRow = {
      "التاريخ": new Date().toLocaleString("ar-SA"),
      "نوع الطلب": type,
      "البيانات": JSON.stringify(body),
      "رقم المرجع": ref,
      "رابط واتساب": whatsappLink,
      "الحالة": "جديد"
    };

    const payload = {
      ref,
      receivedAt,
      type,
      lang,
      whatsappLink,
      sheetRow
    };

    const hook = process.env.ZAPIER_HOOK_URL;
    if (!hook) {
      console.log("[Webhook:FALLBACK] Payload to sheet:", sheetRow);
      return NextResponse.json({ ok: true, mode: "fallback", ref, sheetRow });
    }

    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.ZAPIER_API_KEY) headers["X-API-Key"] = process.env.ZAPIER_API_KEY;

    const res = await fetch(hook, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const txt = await res.text();
      console.error("[Webhook] Non-200:", res.status, txt);
      return NextResponse.json({ ok: false, status: res.status, error: txt }, { status: 502 });
    }

    const data = await res.json().catch(() => ({}));
    return NextResponse.json({ ok: true, mode: "forward", ref, data });
  } catch (e: any) {
    console.error("[Webhook] Error:", e);
    return NextResponse.json({ ok: false, error: e?.message ?? "unknown" }, { status: 500 });
  }
}

function genRef() {
  return "FX-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}
