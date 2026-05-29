import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = body.name || "(no especificado)";
    const email = body.email || "(no especificado)";
    const project = body.project || "(no especificado)";
    const message = body.message || "(no especificado)";

    const webhook = process.env.DISCORD_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json({ error: "Webhook de Discord no configurado." }, { status: 500 });
    }

    const content = `**Nuevo contacto desde el portafolio**\n**Nombre:** ${name}\n**Email:** ${email}\n**Proyecto:** ${project}\n**Mensaje:** ${message}`;

    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Error procesando la solicitud." }, { status: 500 });
  }
}
