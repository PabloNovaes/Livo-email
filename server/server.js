import express from "express";
import { Resend } from "resend";

const app = express();
const resend = new Resend('re_CCDCgBp9_6ZXXCcGHeuxHh3To7X4FH1uU');

app.get("/", async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <noreaply@ifaststore.it>',
    to: ['pablo.ng.macedo@outlook.com', 'ppablo.0028922@gmail.com', 'david@visstas.com', 'contato@livoapp.com.br'],
    subject: 'Teste de email',

    html: `
  <!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
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
  <style>
    .bg-var--background {
      background-color: #131313 !important;
    }
    @media (prefers-color-scheme: light) {
      .bg-var--background {
        background-color: #E3E3E3 !important;
      }
    }
    .bg-var--card {
      background-color: #191919 !important;
    }
    @media (prefers-color-scheme: light) {
      .bg-var--card {
        background-color: #F4F4F4 !important;
      }
    }
    .bg-var--social-links {
      background-color: #242424 !important;
    }
    @media (prefers-color-scheme: light) {
      .bg-var--social-links {
        background-color: #fff !important;
      }
    }
    .text-var--purple-text {
      color: #663C9D !important;
    }
    @media (prefers-color-scheme: light) {
      .text-var--purple-text {
        color: #663C9D !important;
      }
    }
    .text-var--text {
      color: #fff !important;
    }
    @media (prefers-color-scheme: light) {
      .text-var--text {
        color: #383838 !important;
      }
    }
    .border-solid_1px_var--border {
      border: solid 1px #2C2C2C !important;
    }
    @media (prefers-color-scheme: light) {
      .border-solid_1px_var--border {
        border: solid 1px #D7D7D7 !important;
      }
    }
    @media (max-width: 415px) {
      span[role="button"].resize-text {
        font-size: 13px !important;
      }
    }
    @media (max-width: 600px) {
      .sm-w-6 {
        width: 24px !important;
      }
    }
    @media (max-width: 600px) {
      .sm-w-6 {
        width: 24px !important;
      }
    }
  </style>
</head>
<body style="margin: 0; width: 100%; background-color: #f8fafc; padding: 0; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="display: none">
    Transactional email template
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <div role="article" aria-roledescription="email" aria-label lang="en">
    <div class="bg-var--background" style="background-color: #131313; padding: 16px; letter-spacing: -.3px">
      <table align="center" style="margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
        <tr align="center">
          <td style="border-radius: 16px; background-color: #4F2B78; padding: 2px">
            <div style="border-radius: 12px; padding-top: 32px; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Femail-header%20(4).png?alt=media&token=346891aa-2e9a-40f1-828c-2b700c28b49e')center top/cover no-repeat">
              <table cellpadding="0" cellspacing="0" role="none">
                <tr>
                  <td valign="bottom" align="center">
                    <div style="margin-bottom: 12px">
                      <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Ffull-logo%20(1).png?alt=media&token=71740192-ef22-47a4-9b69-80abf21de38b" alt="Livo Logo" style="width: 60px" width="60">
                    </div>
                    <p data-title class="resize-text" style="margin: 0; position: relative; width: fit-content; text-wrap: nowrap; border-radius: 15px 15px 0 0; background-color: #4F2B78; padding: 4px 24px; font-weight: 600; color: #fffffe; font-size: clamp(10px, 8vw, 16px)">
                      Acesso de visitante
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr style="height: 12px"></tr>
        <tr>
          <td style="width: 552px; max-width: 100%">
            <table style="width: 100%" cellpadding="0" cellspacing="0" role="none">
              <tr align="center" style="position: relative">
                <td style="position: relative; overflow: hidden; border-radius: 20px"></td>
              </tr>
              <tr>
                <td align="center">
                  <div class="bg-var--card border-solid_1px_var--border text-var--text" style="border-radius: 25px; background-color: #191919; padding: 24px; color: #fff; border: 1px solid #2c2c2c">
                    <span data-subtitle style="font-weight: 600; letter-spacing: -1px; font-size: clamp(10px, 8vw, 18px)">
                    <div style="margin-bottom: 16px">
                      <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Ffull-logo%20(1).png?alt=media&token=71740192-ef22-47a4-9b69-80abf21de38b" alt="Livo Logo" style="width: 60px" width="60">
                    </div>
                    <p style="margin: 0; text-align: center">Informamos que seu visitante</p>
                    <p style="margin: 0; text-align: center">
                      <span style="text-align: center; color: #663c9d">Pablo Novaes
                      </span>
                    entrou
                    </p>
                    </span>
                    <div style="height: 20px"></div>
                    <div style="margin-left: auto; margin-right: auto; max-height: 280px; max-width: 280px; overflow: hidden; border-radius: 24px; padding: 4px; border: 3px solid #4f2b78">
                      <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FIMG_20220723_191648_093.jpg?alt=media&token=9cd547ad-fe3d-4a59-97b6-b0ee31349847" alt style="width: 100%; border-radius: 16px">
                    </div>
                    <div style="height: 20px"></div>
                    <table align="center" style="width: 100%" cellpadding="0" cellspacing="0" role="none">
                      <tr align="center">
                        <td>
                          <table cellpadding="0" cellspacing="0" role="none">
                            <tr>
                              <td>
                                <p data-name style="line-height: 22px; margin: 0 0 0 4px; text-align: center; font-size: clamp(10px, 8vw, 12px)"> Pablo Novaes Goncalves de Macedo
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    <table align="center" style="width: 100%" cellpadding="0" cellspacing="0" role="none">
                      <tr align="center">
                        <td>
                          <table cellpadding="0" cellspacing="0" role="none">
                            <tr>
                              <td>
                                <div>
                                  <p data-condominium style="line-height: 22px; margin: 0 0 0 4px; text-align: center; font-size: clamp(10px, 8vw, 12px)"> Livo App
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <tr style="height: 16px"></tr>
              <tr>
                <td>
                  <div class="bg-var--card border-solid_1px_var--border text-var--text" style="border-radius: 25px; background-color: #191919; padding: 24px; color: #fff; border: 1px solid #2c2c2c">
                    <table style="width: 100%" cellpadding="0" cellspacing="0" role="none">
                      <tr align="center" data-content class="resize-text" style="line-height: 22px; text-align: center; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; font-weight: 300; font-size: clamp(10px, 8vw, 12px)">
                        <td>
                          Essa notificação foi enviada ao endereço de e-mail
                          <br>
                          associado a sua conta LIVO.
                        </td>
                      </tr>
                      <tr style="height: 4px"></tr>
                      <tr align="center" data-content class="resize-text" style="line-height: 22px; text-align: center; font-weight: 300; font-size: clamp(10px, 8vw, 12px)">
                        <td>
                          Não responda a este e-mail, caso necessite de ajuda,
                          <br>
                          entre em contato com nosso suporte
                        </td>
                      </tr>
                      <tr style="height: 24px"></tr>
                      <tr align="center" data-content class="resize-text" style="line-height: 22px; text-align: center; font-weight: 300; font-size: clamp(10px, 8vw, 12px)">
                        <td>
                          <a target="_blank" class="resize-text text-var--purple-text" href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: #663C9D">
                            Suporte via WhatsApp
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <tr style="height: 16px"></tr>
              <tr>
                <td>
                  <div class="text-var--text" style="border-radius: 25px; padding: 24px; color: #fff">
                    <table align="center" style="width: 100%" cellpadding="0" cellspacing="0" role="none">
                      <tr align="center">
                        <td>
                          <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fico%20(1).png?alt=media&token=c0a9eb99-5e50-48fa-8d3a-144c380f5548" alt style="width: 56px" width="56">
                        </td>
                      </tr>
                      <tr align="center" style="font-weight: 600">
                        <td>Livo App</td>
                      </tr>
                      <tr align="center" style="font-size: 13px; font-weight: 600">
                        <td>Sua portaria conectada</td>
                      </tr>
                    </table>
                    <div style="height: 12px"></div>
                    <table align="center" style="width: 100%" cellpadding="0" cellspacing="0" role="none">
                      <tr align="center" style="font-weight: 600">
                        <td colspan="3">Contatos</td>
                      </tr>
                      <tr style="height: 4px"></tr>
                      <tr align="center" style="height: 40px">
                        <td align="right">
                          <a href>
                            <div class="border-solid_1px_var--border bg-var--social-links" style="height: 24px; width: fit-content; border-radius: 14px; background-color: #242424; padding: 6px; border: 1px solid #2c2c2c">
                              <img loading="lazy" class="sm-w-6" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame.png?alt=media&token=ddeed02a-f189-4e42-a804-79763e35c7e7" style="width: 28px" width="28" alt>
                            </div>
                          </a>
                        </td>
                        <td style="width: 60px">
                          <a href>
                            <div class="border-solid_1px_var--border bg-var--social-links" style="height: 24px; width: fit-content; border-radius: 14px; background-color: #242424; padding: 6px; border: 1px solid #2c2c2c">
                              <img loading="lazy" class="sm-w-6" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" style="width: 28px" width="28" alt>
                            </div>
                          </a>
                        </td>
                        <td align="left">
                          <a href>
                            <div class="border-solid_1px_var--border bg-var--social-links" style="height: 24px; width: fit-content; border-radius: 14px; background-color: #242424; padding: 6px; border: 1px solid #2c2c2c">
                              <img loading="lazy" class="sm-w-6" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" style="width: 28px" width="28" alt>
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                    <table style="width: 100%" cellpadding="0" cellspacing="0" role="none">
                      <tr>
                        <p style="margin: 0; padding-top: 12px; text-align: center; font-size: 12px">
                          LIVO TECNOLOGIA DA INFORMACAO LTDA
                          <br>
                          CNPJ: 40.008.355/0001-41
                        </p>
                      </tr>
                      <tr align="center">
                        <td style="padding-top: 12px">
                          <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fcopy.png?alt=media&token=2c506de9-3624-4dcd-919f-36c63f4bd6c2" alt style="width: 104px" width="104">
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </div>
</body>
</html>
    `
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
