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
      subject: "Acesso de visitante",
      html: `
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
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
  <style type="text/css">
    @media (max-width: 600px) {
      .sm-w-6 {
        width: 24px !important;
      }
      .sm-w-6 {
        width: 24px !important;
      }
    }
  </style>
</head>
<body style="color: #232327; box-sizing: border-box; margin: 0; width: 100%; padding: 0 8px; font-family: Airbnb, sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Seu visitante acabou de entrar no condomínio.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <div role="article" aria-roledescription="email" aria-label lang="pt" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
    <div style="color: #232327; box-sizing: border-box; margin: 0; padding: 20px 0 0; text-align: center">
      <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(2).png?alt=media&token=8bfe1f11-fcd3-43e7-a182-1b2037fa2827" alt="condominio-logo" style="box-sizing: border-box; margin: 0; padding: 0; width: 50px; border-radius: 6px; color: #fffffe" width="50">
    </div>
    <div style="color: #232327; box-sizing: border-box; margin: 0; border-radius: 16px; padding: 16px 0; letter-spacing: -.3px">
      <table align="center" style="color: #232327; box-sizing: border-box; padding: 0; margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
        <tr style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
          <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 552px; max-width: 100%">
            <div style="color: #232327; box-sizing: border-box; margin: 0; padding: 0 0 0 4px">
              <h1 data-title style="color: #232327; line-height: clamp(.6rem, 8vw, 1.1rem); box-sizing: border-box; padding: 0; margin: 0; text-align: center; font-weight: 600; letter-spacing: -1.2px; font-size: clamp(.6rem, 8vw, 1.4rem)">Acesso de visitante</h1>
              <div role="separator" style="color: #232327; line-height: 13px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-content style="color: #232327; line-height: clamp(.6rem, 8vw, .9rem); letter-spacing: -.5px; font-weight: 300; box-sizing: border-box; padding: 0; margin: 0 auto; max-width: 350px; text-align: center; font-size: clamp(.6rem, 8vw, .75rem)">
                Olá <strong style="box-sizing: border-box; margin: 0; padding: 0; font-weight: 600; color: #7D40AC">Diego Santana</strong>, Informamos que seu visitante
                <strong style="box-sizing: border-box; margin: 0; padding: 0; font-weight: 600; color: #7D40AC">Pablo Novaes</strong> acabou de entrar no condomínio.
              </p>
            </div>
            <div role="separator" style="color: #232327; line-height: 22px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
            <table style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
              <tr align="center" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                  <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FIMG_20220723_191648_093.jpg?alt=media&token=9cd547ad-fe3d-4a59-97b6-b0ee31349847" alt style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 100%; max-width: 350px; border-radius: 40px; box-shadow: 0 0 0 3px #7D40AC">
                </td>
              </tr>
            </table>
            <div role="separator" style="color: #232327; line-height: 15px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
            <table style="color: #232327; background-color: #f0f2f5; border: 1px solid #e6e8f057; box-sizing: border-box; margin: 0; width: 100%; border-radius: 25px; padding: 20px 16px 16px" cellpadding="0" cellspacing="0" role="none">
              <tr style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                <td align="{{ align }}" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                  <table style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                    <tr align="center" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                      <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                        <p data-name style="color: #232327; line-height: clamp(.6rem, 8vw, .9rem); letter-spacing: -.5px; font-weight: 300; box-sizing: border-box; padding: 0; margin: 0; font-size: clamp(.6rem, 8vw, .75rem)">
                          Pablo Novaes Goncalves de Macedo
                        </p>
                        <p data-condominium style="color: #232327; line-height: clamp(.6rem, 8vw, .9rem); letter-spacing: -.5px; font-weight: 300; box-sizing: border-box; padding: 0; margin: 0; font-size: clamp(.6rem, 8vw, .75rem)">
                          Livo App
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <div style="color: #232327; box-sizing: border-box; padding: 0; margin: 0 auto; max-width: 552px">
      <table style="color: #232327; background-color: #f0f2f5; border: 1px solid #e6e8f057; box-sizing: border-box; margin: 0; width: 100%; border-radius: 25px; padding: 24px" cellpadding="0" cellspacing="0" role="none">
        <tr style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
          <td align="{{ align }}" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
            <table style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
              <tr align="center" data-content style="color: #232327; line-height: clamp(.6rem, 8vw, .9rem); letter-spacing: -.5px; font-weight: 300; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: clamp(.6rem, 8vw, .75rem)">
                <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                  Essa notificação foi enviada ao endereço de e-mail associado a sua conta LIVO.
                </td>
              </tr>
              <tr style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
              <tr align="center" data-content style="color: #232327; line-height: clamp(.6rem, 8vw, .9rem); letter-spacing: -.5px; font-weight: 300; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: clamp(.6rem, 8vw, .75rem)">
                <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                  Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte
                </td>
              </tr>
              <tr style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; height: 8px"></tr>
              <tr align="center" data-content style="color: #232327; line-height: clamp(.6rem, 8vw, .9rem); letter-spacing: -.5px; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-weight: 300; font-size: clamp(.6rem, 8vw, .75rem)">
                <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #7D40AC">
                    Suporte via WhatsApp
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <div style="color: #232327; box-sizing: border-box; margin: 0; border-radius: 25px; padding: 24px">
        <table align="center" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
          <tr align="center" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
            <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fico%20(1).png?alt=media&token=c0a9eb99-5e50-48fa-8d3a-144c380f5548" alt style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 56px" width="56">
            </td>
          </tr>
          <tr align="center" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
            <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">Livo App</td>
          </tr>
          <tr align="center" style="box-sizing: border-box; margin: 0; padding: 0; font-size: 13px; font-weight: 400; color: currentColor">
            <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">Sua portaria conectada</td>
          </tr>
        </table>
        <div style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; height: 12px"></div>
        <table align="center" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
          <tr align="center" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
            <td colspan="3" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">Contatos</td>
          </tr>
          <tr style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
          <tr align="center" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; height: 40px">
            <td align="right" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
              <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                <div style="color: #232327; background-color: #f0f2f5; border: 1px solid #e6e8f057; box-sizing: border-box; margin: 0; height: 38px; width: fit-content; border-radius: 14px; padding: 6px">
                  <img loading="lazy" class="sm-w-6" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 28px" width="28" alt>
                </div>
              </a>
            </td>
            <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 60px">
              <a href="https://www.instagram.com/livoapp/" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                <div style="color: #232327; background-color: #f0f2f5; border: 1px solid #e6e8f057; box-sizing: border-box; margin: 0; height: 38px; width: fit-content; border-radius: 14px; padding: 6px">
                  <img loading="lazy" class="sm-w-6" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 28px" width="28" alt>
                </div>
              </a>
            </td>
            <td align="left" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
              <a href="mailto:contato@livoapp.com.br" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
                <div style="color: #232327; background-color: #f0f2f5; border: 1px solid #e6e8f057; box-sizing: border-box; margin: 0; height: 38px; width: fit-content; border-radius: 12px; padding: 6px">
                  <img loading="lazy" class="sm-w-6" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 28px" width="28" alt>
                </div>
              </a>
            </td>
          </tr>
        </table>
        <table style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
          <tr style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
            <p style="color: #232327; box-sizing: border-box; margin: 0; padding: 12px 0 0; text-align: center; font-size: 12px">
              LIVO TECNOLOGIA DA INFORMACAO LTDA
              <br style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
              CNPJ: 40.008.355/0001-41
            </p>
          </tr>
          <tr align="center" style="color: #232327; box-sizing: border-box; margin: 0; padding: 0">
            <td style="color: #232327; box-sizing: border-box; margin: 0; padding: 12px 0 0">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fcopy.png?alt=media&token=dd8372df-f069-4946-a290-01ec8dc838f2" alt style="color: #232327; box-sizing: border-box; margin: 0; padding: 0; width: 104px" width="104">
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
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
