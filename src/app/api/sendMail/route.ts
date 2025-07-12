import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const BREVO_URL = "https://api.brevo.com/v3/smtp/email";

  if (!BREVO_API_KEY) {
    console.error("Clé API Brevo manquante.");
    return new NextResponse(
      JSON.stringify({ message: "Clé API manquante sur le serveur" }),
      { status: 500 }
    );
  }

  try {
    const {
      phone,
      name,
      email,
      reservationName,
      date,
      startDate,
      endDate,
      reservationType,
    } = await req.json();

    const subjectByType: Record<string, string> = {
      sale: "Nouvelle demande d'achat - Kozua",
      eclair: "Nouvelle réservation éclair - Kozua",
      simple: "Nouvelle réservation simple - Kozua",
    };

    const subject =
      subjectByType[reservationType] || "Nouvelle demande - Kozua";

    if (!phone || !name || !reservationName || !date || !reservationType) {
      return new NextResponse(
        JSON.stringify({ message: "Données de réservation manquantes" }),
        { status: 400 }
      );
    }

    const generateEmailHtml = ({
      name,
      phone,
      email,
      reservationName,
      date,
      reservationType,
      startDate,
      endDate,
    }: any) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Réservation sur Kozua</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 20px; line-height: 1.6;">
        
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://ko-zua.vercel.app/_next/image?url=%2FKozua%20v3.png&w=3840&q=75" alt="Logo Kozua" style="max-width: 200px; height: auto;" />
        </div>
  
        <h2 style="text-align: center; color: #D79B25;">Réservation sur Kozua</h2>
  
        <hr style="margin: 20px 0;" />
  
        <h3>Nouvelle demande de réservation</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Résérvation :</strong> ${reservationName}</p>
        <p><strong>Date de réservation :</strong> ${date}</p>
           ${
             startDate && endDate
               ? `<p><strong>Date de début :</strong> ${startDate}</p>`
               : ""
           }
        ${
          startDate && endDate
            ? `<p><strong>Date de fin :</strong> ${endDate}</p>`
            : ""
        }
        <p><strong>Type de réservation :</strong> ${reservationType}</p>
  
        <hr style="margin: 30px 0;" />
  
        <p style="font-weight: bold;">Merci de traiter cette réservation, cordialement votre système de réservation.</p>
  
      </body>
    </html>
  `;

    const emailData = {
      sender: {
        name: "Système de réservation Kozua",
        email: "kozua2025@gmail.com",
      },
      to: [
        {
          email: "Kozuaautomobile@gmail.com",
          name: "Service Réservations",
        },

        {
          email: "kozua2025@gmail.com",
          name: "Admin Kozua",
        },
      ],
      subject: subject,
      htmlContent: generateEmailHtml({
        name,
        phone,
        email,
        reservationName,
        date,
        startDate,
        endDate,
        reservationType,
      }),
    };

    const response = await fetch(BREVO_URL, {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erreur Brevo:", errorText);
      return new NextResponse(
        JSON.stringify({
          message: "Échec de l'envoi du mail",
          error: errorText,
        }),
        { status: response.status }
      );
    }
    return new NextResponse(
      JSON.stringify({ message: "Message envoyé avec succès" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    return new NextResponse(
      JSON.stringify({ message: "Erreur du serveur", error: error }),
      { status: 500 }
    );
  }
}
