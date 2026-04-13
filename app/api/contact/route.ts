import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name        = formData.get("name")        as string;
    const telefon     = formData.get("telefon")     as string;
    const beschreibung= formData.get("beschreibung")as string ?? "";
    const unfallart   = formData.get("unfallart")   as string;
    const fotoFiles   = formData.getAll("fotos")    as File[];

    if (!name || !telefon) {
      return NextResponse.json({ error: "Name und Telefon erforderlich" }, { status: 400 });
    }

    // Bilder in Resend-Anhänge umwandeln
    const attachments = await Promise.all(
      fotoFiles
        .filter((f) => f.size > 0)
        .map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        }))
    );

    const { data, error } = await resend.emails.send({
      from: "Gutachten Prenzl <anfrage@gutachtenprenzl.de>",
      to: ["gutachtenprenzl@gmail.com"],
      subject: `Neue Schadensmeldung von ${name}`,
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">

          <div style="background: #E11D2F; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Neue Schadensmeldung</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0; font-size: 14px;">gutachtenprenzl.de</p>
          </div>

          <div style="background: white; padding: 25px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">

            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 12px 0; font-weight: bold; font-size: 16px; color: #111;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Telefon</td>
                <td style="padding: 12px 0; font-weight: bold; font-size: 16px;">
                  <a href="tel:${telefon}" style="color: #E11D2F; text-decoration: none;">${telefon}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Unfallart</td>
                <td style="padding: 12px 0;">
                  <span style="background: #E11D2F; color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: bold;">
                    ${unfallart === "haftpflicht" ? "Haftpflicht" : "Kasko"}
                  </span>
                </td>
              </tr>
              ${beschreibung ? `
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Beschreibung</td>
                <td style="padding: 12px 0; color: #333; font-size: 14px; line-height: 1.5;">${beschreibung}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Fotos</td>
                <td style="padding: 12px 0; color: #333; font-size: 14px;">
                  ${attachments.length > 0
                    ? `<strong>${attachments.length} Foto(s)</strong> als Anhang beigefügt`
                    : "Keine Fotos hochgeladen"}
                </td>
              </tr>
            </table>

            <div style="margin-top: 25px; padding: 15px; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #22c55e;">
              <p style="margin: 0; font-size: 13px; color: #166534;">
                <strong>Bitte melde dich schnellstmöglich beim Kunden!</strong><br/>
                Klicke auf die Telefonnummer oben um direkt anzurufen.
              </p>
            </div>

            <div style="margin-top: 20px; text-align: center;">
              <a href="tel:${telefon}" style="display: inline-block; background: #E11D2F; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 15px;">
                Jetzt ${name} anrufen
              </a>
            </div>

          </div>

          <p style="text-align: center; color: #aaa; font-size: 12px; margin-top: 15px;">
            Diese Anfrage wurde über gutachtenprenzl.de gesendet
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent:", data?.id, `| Anhänge: ${attachments.length}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Unbekannter Fehler" }, { status: 500 });
  }
}
