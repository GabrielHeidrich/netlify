// netlify/functions/send-contact.js
import { Resend } from "resend";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const { email, message } = JSON.parse(event.body || "{}");

    if (!email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "E-mail e mensagem são obrigatórios.",
        }),
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO;

    if (!apiKey || !from || !to) {
      console.error("ENV faltando:", {
        hasApiKey: !!apiKey,
        from,
        to,
      });
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Configuração de e-mail incompleta no servidor.",
        }),
      };
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Novo contato do site PetCare - ${email}`,
      reply_to: email,
      text: `
Nova mensagem do formulário de contato:

De: ${email}

Mensagem:
${message}
      `,
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Erro ao enviar e-mail." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "ok" }),
    };
  } catch (err) {
    console.error("Erro inesperado na função:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Erro interno." }),
    };
  }
};
