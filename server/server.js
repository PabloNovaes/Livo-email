import express from "express";
import nodemailer from "nodemailer";

const app = express();

// Configuração do transporte SMTP (usando Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ppablo.0028922@gmail.com", // Substitua pelo seu e-mail
    pass: "xekp euof ohvo btke"
  }
});

app.get("/", async (req, res) => {
  try {
    const mailOptions = {
      from: '"Livo App" <noreaply@livoapp.com.br>',
      to: [
        "ppablo.0028922@gmail.com",
        // "contato@livoapp.com.br",
        // "david@visstas.com",
        "pablo.ng.macedo@outlook.com",
        // "danyyandrade25@gmail.com",
      ],
      subject: "Comunicado",
      html: ` 
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
  <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <style>
      td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
    </style>
    <![endif]-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" media="screen">
</head>
<body style="color: white; box-sizing: border-box; margin: 0; width: 100%; background-color: #000001; padding: 0 8px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: white; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Você recebeu um novo comunicado.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table style="color: white; box-sizing: border-box; padding: 0; margin: 0 auto; width: 100%; max-width: 650px" cellpadding="0" cellspacing="0" role="none">
    <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0">
      <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
        <div aria-roledescription="email" aria-label lang="pt" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
          <div style="color: white; box-sizing: border-box; margin: 0 auto; border-radius: 16px; padding: 16px 0 0; letter-spacing: -.3px">
            <table style="color: white; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FPot%20(11).png?alt=media&token=7fdc57d8-2027-4a34-9d50-f165f847d406') top/cover no-repeat; box-sizing: border-box; margin: 0 auto; width: 100%; border-radius: 24px; padding: 24px 0 24px 24px" cellpadding="0" cellspacing="0" role="none">
              <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <table style="color: white; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                    <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                      <td style="color: white; box-sizing: border-box; margin: 0; padding: 0; border-radius: 9999px; vertical-align: middle">
                        <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-icon%20(1).png?alt=media&token=7d214619-400a-4c08-b67e-a11dbed172ac" alt="condominio-logo" style="box-sizing: border-box; padding: 0; margin: 4px 0 0; width: 60px; height: 60px; border-radius: 6px; object-fit: contain; color: #fffffe" width="60" height="60">
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 20px"></tr>
              <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <h1 data-title style="line-height: .90em; box-sizing: border-box; padding: 0; margin: 0; color: #fffffe; font-size: 1.80em">Comunicado de reunião</h1>
                </td>
              </tr>
            </table>
            <div role="separator" style="color: white; line-height: 13px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
            <table style="color: white; background-color: #181818; box-sizing: border-box; margin: 0; width: 100%; border-radius: 25px; padding: 24px; border: 1px solid #252525" cellpadding="0" cellspacing="0" role="none">
              <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                <td align="{{ align }}" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <h1 data-subtitle style="color: white; line-height: .95em; box-sizing: border-box; padding: 0; margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; font-weight: 700; letter-spacing: -1.3px; font-size: 1.25em">
                    Olá <span style="box-sizing: border-box; margin: 0; padding: 0; color: #562E82">Diego Santana</span>
                  </h1>
                  <div role="separator" style="color: white; line-height: 7px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
                  <p data-content style="color: white; line-height: em; letter-spacing: -.5px; box-sizing: border-box; padding: 0; margin: 0; font-weight: 400; font-size: 1.1em">
                    Informamos que na próxima segunda-feira (24/02), hávera a reunião
                    sobre a
                    substituição
                    do atual sub-sindico.
                  </p>
                </td>
              </tr>
            </table>
          </div>
          <div role="separator" style="color: white; line-height: 18px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
          <div style="color: white; box-sizing: border-box; padding: 0; margin: 0 auto; max-width: 450px">
            <table style="color: white; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
              <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0; text-align: center">
                <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <p data-default-message style="color: white; line-height: 1.2em; letter-spacing: -.5px; box-sizing: border-box; padding: 0; margin: 0; opacity: 0.75; font-size: 1em">
                    Essa notificação foi enviada ao endereço de e-mail associado a sua conta LIVO.
                  </p>
                </td>
              </tr>
              <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
              <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0; text-align: center">
                <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <p data-default-message style="color: white; line-height: 1.2em; letter-spacing: -.5px; box-sizing: border-box; padding: 0; margin: 0; opacity: 0.75; font-size: 1em">
                    Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a target="_blank" href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #5C307E">
                      WhatsApp
                    </a>
                  </p>
                </td>
              </tr>
              <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 8px"></tr>
            </table>
            <div role="separator" style="color: white; line-height: 15px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
            <table align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
              <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fico%20(1).png?alt=media&token=c0a9eb99-5e50-48fa-8d3a-144c380f5548" alt style="color: white; box-sizing: border-box; margin: 0; padding: 0; width: 56px" width="56">
                </td>
              </tr>
              <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">Livo App</td>
              </tr>
              <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0; font-size: 12px; font-weight: 400">
                <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">Modulos que conectam</td>
              </tr>
            </table>
            <div role="separator" style="color: white; line-height: 12px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
            <table style="color: white; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
              <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: white; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
                </td>
              </tr>
            </table>
            <div role="separator" style="color: white; line-height: 5px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
            <table align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
              <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                <td colspan="3" style="color: white; box-sizing: border-box; margin: 0; padding: 0">Contatos</td>
              </tr>
              <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
              <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <div style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: white; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                      <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                        <td style="color: white; background-color: #181818; box-sizing: border-box; margin: 0; border-radius: 12px; padding: 4px; border: 1px solid #252525">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." " style=" color: white; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px" width="28" height="28" alt>
                            </div>
                          </a>
                        </td>
                        <td style="color: white; box-sizing: border-box; margin: 0; padding: 0; width: 8px"></td>
                        <td style="color: white; background-color: #181818; box-sizing: border-box; margin: 0; border-radius: 12px; padding: 4px; border: 1px solid #252525">
                          <a href="https://www.instagram.com/livoapp/" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px" width="28" height="28" alt>
                            </div>
                          </a>
                        </td>
                        <td style="color: white; box-sizing: border-box; margin: 0; padding: 0; width: 8px"></td>
                        <td style="color: white; background-color: #181818; box-sizing: border-box; margin: 0; border-radius: 12px; padding: 4px; border: 1px solid #252525">
                          <a href="mailto:contato@livoapp.com.br" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px" width="28" height="28" alt>
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <table style="color: white; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                    <p style="color: white; box-sizing: border-box; margin: 0; padding: 12px 0 0; text-align: center; font-size: 12px">
                      LIVO TECNOLOGIA DA INFORMACAO LTDA
                      <br style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                      CNPJ: 40.008.355/0001-41
                    </p>
                  </td>
                </tr>
                <tr style="color: white; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr align="center" style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: white; box-sizing: border-box; margin: 0; padding: 0">
                    <span style="color: white; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 14px; font-weight: 500">
            &copy; 2025 Livo App
          </span>
                  </td>
                </tr>
              </table>
            </table>
          </div>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    };

    // Enviar e-mail
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "E-mail enviado com sucesso!", info });
  } catch (error) {
    res.status(400).json({ error: "Erro ao enviar o e-mail", details: error });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
