import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

/* O corpo do e-mail chega para o Guilherme, então fica em
   português; `lang` registra em que idioma a pessoa navegava. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, lang } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Contact" <${process.env.EMAIL_USER}>`,
      to: "guilhermereinehr07@gmail.com",
      subject: `Novo contato pelo site — ${escapeHtml(String(name))}`,
      replyTo: email,
      html: `
        <h2>Nova mensagem pelo site</h2>
        <p><strong>Nome:</strong> ${escapeHtml(String(name))}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(String(email))}</p>
        <p><strong>Telefone:</strong> ${phone ? escapeHtml(String(phone)) : "-"}</p>
        <p><strong>Idioma do site:</strong> ${lang === "en" ? "EN" : "PT"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(String(message)).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Email not sent" },
      { status: 500 }
    );
  }
}
