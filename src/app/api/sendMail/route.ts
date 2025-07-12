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
      fname,
      lname,
      email,
      phone,
      birthDate,
      zipUrl,
      profilePicture,
      typeStudent,
      source
    } = await req.json();

    const generateEmailHtml = () => `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Nouvelle Candidature Étudiant</title>
        </head>
        <body style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
          <h2 style="color: #007bff;">Nouvelle candidature reçue</h2>
          <p><strong>Nom :</strong> ${fname} ${lname}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Date de naissance :</strong> ${new Date(birthDate).toLocaleDateString()}</p>
          <p><strong>Type d'étudiant :</strong> ${typeStudent}</p>
          <p><strong>Source :</strong> ${source}</p>

          <h3>Documents :</h3>
          <ul>
            <li><a href="${zipUrl}" target="_blank">Dossier ZIP de candidature</a></li>
            ${
              profilePicture
                ? `<li><a href="${profilePicture}" target="_blank">Photo de profil</a></li>`
                : ""
            }
          </ul>

          <p style="margin-top: 20px;">Merci de traiter cette candidature avec attention.</p>
        </body>
      </html>
    `;

    const emailData = {
      sender: {
        name: "BlessingsTravels - Candidature",
        email: "odigitalblessing@gmail.com",
      },
      to: [
        {
          email: "gloireondongo1205@gmail.com",
          name: "Responsable Admissions",
        },
        {
          email: "odigitalblessing@gmail.com",
          name: "Responsable Admissions",
        },
     
      ],
      subject: `Nouvelle candidature - ${fname} ${lname}`,
      htmlContent: generateEmailHtml(),
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
          message: "Échec de l'envoi de l'email",
          error: errorText,
        }),
        { status: response.status }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Email envoyé avec succès" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    return new NextResponse(
      JSON.stringify({ message: "Erreur du serveur", error }),
      { status: 500 }
    );
  }
}
