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

app.get("/invite", async (req, res) => {
  try {
    const mailOptions = {
      from: '"Livo App" <noreaply@livoapp.com.br>',
      to: [
        "ppablo.0028922@gmail.com",
        "contato@livoapp.com.br",
        // "david@visstas.com",
        "pablo.ng.macedo@outlook.com",
        // "danyyandrade25@gmail.com",
      ],
      subject: "Você foi convidado!",
      html: `
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
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
<body style="color: black; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color-scheme: light only; box-sizing: border-box; margin: 0; width: 100%; background-color: #ebf0f6; padding: 10px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Você recebeu um convite.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
    <tr" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
      <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
        <div aria-roledescription="email" aria-label lang="pt" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
          <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; max-width: 600px; overflow: auto; background-color: #fff">
            <div style="color: black; box-sizing: border-box; margin: 0; padding: 12px 0 8px; text-align: center">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" style="box-sizing: border-box; margin: 0; padding: 0; width: 40px; color: #fffffe; filter: grayscale(100%)" width="40">
            </div>
            <header style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c') center top/cover no-repeat; box-sizing: border-box; margin: 0; padding: 64px 24px"></header>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #ffffff; padding: 24px; text-align: center">
              <h1 data-subtitle style="color: black; line-height: 0.95em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -.8px; font-size: 1.7em">
                Você foi convidado!
              </h1>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-content style="color: black; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -1px; font-size: 1.15em">
                <span style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                Olá<strong style="box-sizing: border-box; margin: 0; padding: 0; font-weight: 900; color: #5937c0"> Diego Santana,</strong>
            </span>
                agora você pode utilizar a <strong style="box-sizing: border-box; margin: 0; padding: 0; font-weight: 900; color: #5937c0">Facial</strong> para entrar no condomínio de maneira rápida e
                prática.
              </p>
              <div role="separator" style="color: black; line-height: 20px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Ffacial.jpg?alt=media&token=a026ef30-89c6-4afb-be55-251e531233d5" alt style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto; height: 100%; width: 100%; border-radius: 30px; object-fit: cover; border: 6px solid #f6f6fd">
            </div>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #F8F9FA; padding: 24px">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" alt="livo-logo" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 64px" width="64">
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.06em">
                Essa notificação foi enviada ao endereço de e-mail associado
                a sua conta LIVO.
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.06em">
                Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #7D40AC">WhatsApp</a>
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Contatos</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: black; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                      <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://www.instagram.com/livoapp/" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="mailto:contato@livoapp.com.br" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" alt="Email" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Transparência</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <a href="https://livoapp.com.br/lgpd.php" data-notify style="color: black; letter-spacing: -0.5px; line-height: 0.9em; box-sizing: border-box; margin: 0; padding: 0; text-decoration: none; font-size: 1em">politica de
                      privacidade</a>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
            </div>
            <footer style="color: black; box-sizing: border-box; margin: 0; background-color: #fff; padding: 16px 24px">
              <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 12px; font-weight: 300; letter-spacing: -1px">
                &copy; 2025 Livo App. Todos os direitos reservados
              </div>
            </footer>
          </div>
        </div>
      </td>
    </tr">
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
app.get("/password", async (req, res) => {
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
      subject: "Recupere sua senha",
      html: `
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
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
<body style="color: black; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color-scheme: light only; box-sizing: border-box; margin: 0; width: 100%; background-color: #ebf0f6; padding: 10px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Recupere sua senha utilizando o codigo recebido.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
    <tr" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
      <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
        <div aria-roledescription="email" aria-label lang="pt" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
          <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; max-width: 600px; overflow: auto; background-color: #fff">
            <div style="color: black; box-sizing: border-box; margin: 0; padding: 12px 0 8px; text-align: center">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" style="box-sizing: border-box; margin: 0; padding: 0; width: 40px; color: #fffffe; filter: grayscale(100%)" width="40">
            </div>
            <header style="color: black; clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 75%); background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c') center top/cover no-repeat; box-sizing: border-box; margin: 0; padding: 64px 24px"></header>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #ffffff; padding: 24px; text-align: center">
              <h1 data-subtitle style="color: black; line-height: 0.95em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -.8px; font-size: 1.7em">
                Recuperação de senha
              </h1>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-content style="color: black; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -1px; font-size: 1.15em">
                <span style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                Olá<strong style="box-sizing: border-box; margin: 0; padding: 0; color: #5937c0"> Diego Santana,</strong>
            </span>
                Utilize o código abaixo para redefinir sua senha do Livo App:
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <span style="color: black; box-sizing: border-box; margin: 0; padding: 0; display: inline-table">
                        <span style="color: black; box-sizing: border-box; margin: 0 2px; display: inline-block; border-radius: 12px; border: 1px solid #e9ecf2; background-color: #F8F9FA; padding: 8px 12px; font-size: 1.24em; font-weight: 700">7</span>
                    <span style="color: black; box-sizing: border-box; margin: 0 2px; display: inline-block; border-radius: 12px; border: 1px solid #e9ecf2; background-color: #F8F9FA; padding: 8px 12px; font-size: 1.24em; font-weight: 700">4</span>
                    <span style="color: black; box-sizing: border-box; margin: 0 2px; display: inline-block; border-radius: 12px; border: 1px solid #e9ecf2; background-color: #F8F9FA; padding: 8px 12px; font-size: 1.24em; font-weight: 700">5</span>
                    <span style="color: black; box-sizing: border-box; margin: 0 2px; display: inline-block; border-radius: 12px; border: 1px solid #e9ecf2; background-color: #F8F9FA; padding: 8px 12px; font-size: 1.24em; font-weight: 700">4</span>
                    <span style="color: black; box-sizing: border-box; margin: 0 2px; display: inline-block; border-radius: 12px; border: 1px solid #e9ecf2; background-color: #F8F9FA; padding: 8px 12px; font-size: 1.24em; font-weight: 700">7</span>
                    <span style="color: black; box-sizing: border-box; margin: 0 2px; display: inline-block; border-radius: 12px; border: 1px solid #e9ecf2; background-color: #F8F9FA; padding: 8px 12px; font-size: 1.24em; font-weight: 700">8</span>
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #F8F9FA; padding: 24px">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" alt="livo-logo" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 64px" width="64">
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.06em">
                Essa notificação foi enviada ao endereço de e-mail associado
                a sua conta LIVO.
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.06em">
                Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #7D40AC">WhatsApp</a>
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Contatos</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: black; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                      <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://www.instagram.com/livoapp/" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="mailto:contato@livoapp.com.br" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" alt="Email" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Transparência</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <a href="https://livoapp.com.br/lgpd.php" data-notify style="color: black; letter-spacing: -0.5px; line-height: 0.9em; box-sizing: border-box; margin: 0; padding: 0; text-decoration: none; font-size: 1em">politica de
                      privacidade</a>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
            </div>
            <footer style="color: black; box-sizing: border-box; margin: 0; background-color: #fff; padding: 16px 24px">
              <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 12px; font-weight: 300; letter-spacing: -1px">
                &copy; 2025 Livo App. Todos os direitos reservados
              </div>
            </footer>
          </div>
        </div>
      </td>
    </tr">
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

app.get("/statement", async (req, res) => {
  try {
    const mailOptions = {
      from: '"Livo App" <noreaply@livoapp.com.br>',
      to: [
        "ppablo.0028922@gmail.com",
        "contato@livoapp.com.br",
        // "david@visstas.com",
        "pablo.ng.macedo@outlook.com",
        // "danyyandrade25@gmail.com",
      ],
      subject: "Comunicado",
      html: `
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
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
<body style="color: black; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color-scheme: light only; box-sizing: border-box; margin: 0; width: 100%; background-color: #ebf0f6; padding: 10px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Você recebeu um novo comunicado.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
    <tr" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
      <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
        <div aria-roledescription="email" aria-label lang="pt" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
          <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; max-width: 600px; overflow: auto; background-color: #fff">
            <div style="color: black; box-sizing: border-box; margin: 0; padding: 12px 0 8px; text-align: center">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" style="box-sizing: border-box; margin: 0; padding: 0; width: 40px; color: #fffffe; filter: grayscale(100%)" width="40">
            </div>
            <header style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c') center top/cover no-repeat; box-sizing: border-box; margin: 0; padding: 64px 24px"></header>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #ffffff; padding: 24px">
              <h1 data-subtitle style="color: black; line-height: 0.95em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -.8px; font-size: 1.7em">Comunicado de reunião
              </h1>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-content style="color: black; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -1px; font-size: 1.15em">
                <span style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                Olá<span style="box-sizing: border-box; margin: 0; padding: 0; color: #5937c0"> Diego Santana,</span>
                </span>
                Informamos que na próxima segunda-feira (24/02), haverá a reunião sobre a substituição do atual
                sub-sindico.
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Freunion%20(1).jpg?alt=media&token=077b4cae-517d-4ab8-836e-370eed4ee7dd" alt style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto; height: 100%; width: 100%; border-radius: 30px; border: 6px solid #f6f6fd">
            </div>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #F8F9FA; padding: 24px">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" alt="livo-logo" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 64px" width="64">
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.06em">
                Essa notificação foi enviada ao endereço de e-mail associado
                a sua conta LIVO.
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.06em">
                Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #7D40AC">WhatsApp</a>
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Contatos</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: black; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                      <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://www.instagram.com/livoapp/" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="mailto:contato@livoapp.com.br" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" alt="Email" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Transparência</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <a href="https://livoapp.com.br/lgpd.php" data-notify style="color: black; letter-spacing: -0.5px; line-height: 0.9em; box-sizing: border-box; margin: 0; padding: 0; text-decoration: none; font-size: 1em">politica de
                      privacidade</a>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
            </div>
            <footer style="color: black; box-sizing: border-box; margin: 0; background-color: #fff; padding: 16px 24px">
              <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 12px; font-weight: 300; letter-spacing: -1px">
                &copy; 2025 Livo App. Todos os direitos reservados
              </div>
            </footer>
          </div>
        </div>
      </td>
    </tr">
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

app.get("/access", async (req, res) => {
  try {
    const mailOptions = {
      from: '"Livo App" <noreaply@livoapp.com.br>',
      to: [
        "ppablo.0028922@gmail.com",
        "contato@livoapp.com.br",
        // "david@visstas.com",
        "pablo.ng.macedo@outlook.com",
        // "danyyandrade25@gmail.com",
      ],
      subject: "Acesso de visitante",
      html: `
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
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
<body style="color: black; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color-scheme: light only; box-sizing: border-box; margin: 0; width: 100%; background-color: #ebf0f6; padding: 10px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Seu visitante acabou de entrar.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
    <tr" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
      <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
        <div aria-roledescription="email" aria-label lang="pt" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
          <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; max-width: 600px; overflow: auto; background-color: #fff">
            <div style="color: black; box-sizing: border-box; margin: 0; padding: 12px 0 8px; text-align: center">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" style="box-sizing: border-box; margin: 0; padding: 0; width: 40px; color: #fffffe; filter: grayscale(100%)" width="40">
            </div>
            <header style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c') center top/cover no-repeat; box-sizing: border-box; margin: 0; padding: 64px 24px"></header>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #ffffff; padding: 24px">
              <h1 data-subtitle style="color: black; line-height: 0.95em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -.8px; font-size: 1.7em">Acesso de visitante
              </h1>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-content style="color: black; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -1px; font-size: 1.15em">
                <span style="color: black; box-sizing: border-box; margin: 0; padding: 0">
        Olá<span style="box-sizing: border-box; margin: 0; padding: 0; color: #5937c0"> Diego Santana,</span>
                </span>
                Informamos que seu visitante acabou de entrar no condominio.
              </p>
              <div role="separator" style="color: black; line-height: 20px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <div style="color: black; background: linear-gradient(to top, white 74%, #f8f9fa 20%); width: 100%; height: fit-content; box-sizing: border-box; margin: 0; overflow: auto; border-radius: 24px; border: 1px solid #e6e6e6; padding: 0 0 6px">
                <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 25%; width: 100%" cellpadding="0" cellspacing="0" role="none">
                  <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 12px"></tr>
                  <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 6px"></td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                      <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: fit-content" cellpadding="0" cellspacing="0" role="none">
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                          <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2F20241104_122624%201.png?alt=media&token=d2a3547b-0d0d-4e1c-b127-3aff4cd6b3eb" alt style="color: black; box-sizing: border-box; margin: 0; width: 168px; height: 168px; border-radius: 24px; border: 1px solid #e6e6e6; background-color: #fff; object-fit: contain; padding: 8px" width="168" height="168">
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 6px"></td>
                  </tr>
                  <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                      <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                        <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                          <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <p data-name style="color: black; letter-spacing: -0.5px; line-height: 1.2em; font-weight: 600; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.08em">Pablo Novaes</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                  </tr>
                  <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 12px"></tr>
                  <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; border-radius: 16px; border: 1px solid #e6e6e6; background-color: #f8f9fa">
                      <table align="center" style="color: black; box-sizing: border-box; margin: 0; width: 100%; padding: 4px" cellpadding="0" cellspacing="0" role="none">
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                          <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0 0 0 12px">
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Morador</p>
                          </td>
                          <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0 12px 0 0">
                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Diego Santana</p>
                          </td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 1px; background-color: #E6E6E6">
                          <td colspan="2" style="color: black; box-sizing: border-box; margin: 0; padding: 0"></td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                          <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0 0 0 12px">
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Condomínio</p>
                          </td>
                          <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0 12px 0 0">
                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Livo App</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                  </tr>
                </table>
              </div>
            </div>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #F8F9FA; padding: 24px">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" alt="livo-logo" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 64px" width="64">
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.06em">
                Essa notificação foi enviada ao endereço de e-mail associado
                a sua conta LIVO.
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.06em">
                Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #7D40AC">WhatsApp</a>
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Contatos</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: black; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                      <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://www.instagram.com/livoapp/" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="mailto:contato@livoapp.com.br" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" alt="Email" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Transparência</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <a href="https://livoapp.com.br/lgpd.php" data-notify style="color: black; letter-spacing: -0.5px; line-height: 0.9em; box-sizing: border-box; margin: 0; padding: 0; text-decoration: none; font-size: 1em">politica de
                      privacidade</a>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
            </div>
            <footer style="color: black; box-sizing: border-box; margin: 0; background-color: #fff; padding: 16px 24px">
              <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 12px; font-weight: 300; letter-spacing: -1px">
                &copy; 2025 Livo App. Todos os direitos reservados
              </div>
            </footer>
          </div>
        </div>
      </td>
    </tr">
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

app.get("/delivery", async (req, res) => {
  try {
    const mailOptions = {
      from: '"Livo App" <noreaply@livoapp.com.br>',
      to: [
        "ppablo.0028922@gmail.com",
        "contato@livoapp.com.br",
        // "david@visstas.com",
        "pablo.ng.macedo@outlook.com",
        // "danyyandrade25@gmail.com",
      ],
      subject: "Nova encomenda",
      html: `
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
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
<body style="color: black; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color-scheme: light only; box-sizing: border-box; margin: 0; width: 100%; background-color: #ebf0f6; padding: 10px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Sua encomenda acabou de chegar.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
    <tr" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
      <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
        <div aria-roledescription="email" aria-label lang="pt" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
          <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; max-width: 600px; overflow: auto; background-color: #fff">
            <div style="color: black; box-sizing: border-box; margin: 0; padding: 12px 0 8px; text-align: center">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" style="box-sizing: border-box; margin: 0; padding: 0; width: 40px; color: #fffffe; filter: grayscale(100%)" width="40">
            </div>
            <header style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c') center top/cover no-repeat; box-sizing: border-box; margin: 0; padding: 64px 24px"></header>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #ffffff; padding: 24px">
              <h1 data-subtitle style="color: black; line-height: 0.95em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -.8px; font-size: 1.7em">Sua encomenda chegou!
              </h1>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-content style="color: black; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -1px; font-size: 1.15em">
                <span style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                Olá<span style="box-sizing: border-box; margin: 0; padding: 0; color: #5937c0"> Diego Santana,</span>
                </span>
                Informamos que sua encomenda chegou no condomnio e já pode ser retirada.
              </p>
              <div role="separator" style="color: black; line-height: 20px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <div style="color: black; background: linear-gradient(to top, white 74%, #f8f9fa 20%); width: 100%; height: fit-content; box-sizing: border-box; margin: 0; overflow: auto; border-radius: 24px; border: 1px solid #e6e6e6; padding: 0 0 6px">
                <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 25%; width: 100%" cellpadding="0" cellspacing="0" role="none">
                  <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 12px"></tr>
                  <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 6px"></td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                      <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: fit-content" cellpadding="0" cellspacing="0" role="none">
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                          <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <img src="https://droper-media.us-southeast-1.linodeobjects.com/11420221410911.webp" alt style="color: black; box-sizing: border-box; margin: 0; width: 168px; height: 168px; border-radius: 24px; border: 1px solid #e6e6e6; background-color: #fff; object-fit: contain; padding: 8px" width="168" height="168">
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 6px"></td>
                  </tr>
                  <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                      <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                        <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                          <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <p data-name style="color: black; letter-spacing: -0.5px; line-height: 1.2em; font-weight: 600; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.08em">Air Jordan 4 - Military Black</p>
                            <div role="separator" style="color: black; line-height: 2px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">#98614</p>
                            <div role="separator" style="color: black; line-height: 2px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
                            <div style="background-color: #fef7cd; border: 1px solid #fef1a4; color: #FFC107; border-radius: 8px; box-sizing: border-box; margin: 0; width: fit-content; padding: 1px 8px">Pendente</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                  </tr>
                  <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 12px"></tr>
                  <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; border-radius: 16px; border: 1px solid #e6e6e6; background-color: #f8f9fa">
                      <table align="center" style="color: black; box-sizing: border-box; margin: 0; width: 100%; padding: 4px" cellpadding="0" cellspacing="0" role="none">
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                          <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0 0 0 12px">
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Recebimento</p>
                          </td>
                          <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0 12px 0 0">
                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">27/02/2025</p>
                          </td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 1px; background-color: #E6E6E6">
                          <td colspan="2" style="color: black; box-sizing: border-box; margin: 0; padding: 0"></td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                          <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0 0 0 12px">
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Morador</p>
                          </td>
                          <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0 12px 0 0">
                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Diego Santana</p>
                          </td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 1px; background-color: #E6E6E6">
                          <td colspan="2" style="color: black; box-sizing: border-box; margin: 0; padding: 0"></td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                          <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0 0 0 12px">
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Condomínio</p>
                          </td>
                          <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0 12px 0 0">
                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Livo App</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                  </tr>
                </table>
              </div>
            </div>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #F8F9FA; padding: 24px">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" alt="livo-logo" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 64px" width="64">
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.06em">
                Essa notificação foi enviada ao endereço de e-mail associado
                a sua conta LIVO.
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.06em">
                Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #7D40AC">WhatsApp</a>
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Contatos</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: black; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                      <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://www.instagram.com/livoapp/" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="mailto:contato@livoapp.com.br" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" alt="Email" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Transparência</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <a href="https://livoapp.com.br/lgpd.php" data-notify style="color: black; letter-spacing: -0.5px; line-height: 0.9em; box-sizing: border-box; margin: 0; padding: 0; text-decoration: none; font-size: 1em">politica de
                      privacidade</a>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
            </div>
            <footer style="color: black; box-sizing: border-box; margin: 0; background-color: #fff; padding: 16px 24px">
              <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 12px; font-weight: 300; letter-spacing: -1px">
                &copy; 2025 Livo App. Todos os direitos reservados
              </div>
            </footer>
          </div>
        </div>
      </td>
    </tr">
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


app.get("/reservation", async (req, res) => {
  try {
    const mailOptions = {
      from: '"Livo App" <noreaply@livoapp.com.br>',
      to: [
        "ppablo.0028922@gmail.com",
        "contato@livoapp.com.br",
        // "david@visstas.com",
        "pablo.ng.macedo@outlook.com",
        // "danyyandrade25@gmail.com",
      ],
      subject: "Reserva de espaço",
      html: `<!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
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
<body style="color: black; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color-scheme: light only; box-sizing: border-box; margin: 0; width: 100%; background-color: #ebf0f6; padding: 10px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Houve uma atualização na sua reserva de espaço, confira:.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
    <tr" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
      <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
        <div aria-roledescription="email" aria-label lang="pt" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
          <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; max-width: 600px; overflow: auto; background-color: #fff">
            <div style="color: black; box-sizing: border-box; margin: 0; padding: 12px 0 8px; text-align: center">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" style="box-sizing: border-box; margin: 0; padding: 0; width: 40px; color: #fffffe; filter: grayscale(100%)" width="40">
            </div>
            <header style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c') center top/cover no-repeat; box-sizing: border-box; margin: 0; padding: 64px 24px"></header>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #ffffff; padding: 24px">
              <h1 data-subtitle style="color: black; line-height: 0.95em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -.8px; font-size: 1.7em">Atualização de reserva
              </h1>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-content style="color: black; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -1px; font-size: 1.15em">
                <span style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                Olá<span style="box-sizing: border-box; margin: 0; padding: 0; color: #5937c0"> Diego Santana,</span>
                </span>
                Informamos que sua reserva de espaço foi confirmada.
              </p>
              <div role="separator" style="color: black; line-height: 20px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <div style="color: black; background: linear-gradient(to top, white 74%, #f8f9fa 20%); width: 100%; height: fit-content; box-sizing: border-box; margin: 0; overflow: auto; border-radius: 24px; border: 1px solid #e6e6e6; padding: 0 0 6px">
                <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 25%; width: 100%" cellpadding="0" cellspacing="0" role="none">
                  <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 12px"></tr>
                  <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 6px"></td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                      <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: fit-content" cellpadding="0" cellspacing="0" role="none">
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                          <td align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <img src="https://a0.muscache.com/im/pictures/e3fa44a8-82ba-4b26-8260-826ec9d4007c.jpg?im_w=1440&im_format=avif&im_origin=fuzzy" alt style="color: black; box-sizing: border-box; margin: 0; width: 90%; border-radius: 24px; border: 1px solid #e6e6e6; background-color: #fff; object-fit: fill; padding: 6px">
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 6px"></td>
                  </tr>
                  <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                      <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                        <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                          <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div role="separator" style="color: black; line-height: 8px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
                            <div style="background-color: #21dc6c33; border: 1px solid #21dc6c33; color: #21dc6c; border-radius: 8px; box-sizing: border-box; margin: 0; width: fit-content; padding: 1px 8px">Aprovado</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                  </tr>
                  <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 12px"></tr>
                  <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; border-radius: 16px; border: 1px solid #e6e6e6; background-color: #f8f9fa">
                      <table align="center" style="color: black; box-sizing: border-box; margin: 0; width: 100%; padding: 4px" cellpadding="0" cellspacing="0" role="none">
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                          <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0 0 0 12px">
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Espaço</p>
                          </td>
                          <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0 12px 0 0">
                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Academia</p>
                          </td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 1px; background-color: #E6E6E6">
                          <td colspan="2" style="color: black; box-sizing: border-box; margin: 0; padding: 0"></td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                          <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0 0 0 12px">
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Data</p>
                          </td>
                          <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0 12px 0 0">
                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">27/02/2025</p>
                          </td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 1px; background-color: #E6E6E6">
                          <td colspan="2" style="color: black; box-sizing: border-box; margin: 0; padding: 0"></td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                          <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0 0 0 12px">
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Morador</p>
                          </td>
                          <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0 12px 0 0">
                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Diego Santana</p>
                          </td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 1px; background-color: #E6E6E6">
                          <td colspan="2" style="color: black; box-sizing: border-box; margin: 0; padding: 0"></td>
                        </tr>
                        <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                          <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0 0 0 12px">
                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Condomínio</p>
                          </td>
                          <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0 12px 0 0">
                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.03em; font-weight: 600">Livo App</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; min-width: 6px"></td>
                  </tr>
                </table>
              </div>
            </div>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #F8F9FA; padding: 24px">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" alt="livo-logo" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 64px" width="64">
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.06em">
                Essa notificação foi enviada ao endereço de e-mail associado
                a sua conta LIVO.
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.06em">
                Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #7D40AC">WhatsApp</a>
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Contatos</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: black; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                      <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://www.instagram.com/livoapp/" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="mailto:contato@livoapp.com.br" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" alt="Email" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Transparência</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <a href="https://livoapp.com.br/lgpd.php" data-notify style="color: black; letter-spacing: -0.5px; line-height: 0.9em; box-sizing: border-box; margin: 0; padding: 0; text-decoration: none; font-size: 1em">politica de
                      privacidade</a>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
            </div>
            <footer style="color: black; box-sizing: border-box; margin: 0; background-color: #fff; padding: 16px 24px">
              <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 12px; font-weight: 300; letter-spacing: -1px">
                &copy; 2025 Livo App. Todos os direitos reservados
              </div>
            </footer>
          </div>
        </div>
      </td>
    </tr">
  </table>
</body>
</html>`
    };

    // Enviar e-mail
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "E-mail enviado com sucesso!", info });
  } catch (error) {
    res.status(400).json({ error: "Erro ao enviar o e-mail", details: error });
  }
});

app.get("/finish", async (req, res) => {
  try {
    const mailOptions = {
      from: '"Livo App" <noreaply@livoapp.com.br>',
      to: [
        "ppablo.0028922@gmail.com",
        "contato@livoapp.com.br",
        // "david@visstas.com",
        "pablo.ng.macedo@outlook.com",
        // "danyyandrade25@gmail.com",
      ],
      subject: "Finalize seu cadastro",
      html: `
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
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
<body style="color: black; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color-scheme: light only; box-sizing: border-box; margin: 0; width: 100%; background-color: #ebf0f6; padding: 10px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Finalize seu cadastro e aproveite todos os benefícios do aplicativo!
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
    <tr" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
      <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
        <div aria-roledescription="email" aria-label lang="pt" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
          <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; max-width: 600px; overflow: auto; background-color: #fff">
            <div style="color: black; box-sizing: border-box; margin: 0; padding: 12px 0 8px; text-align: center">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" style="box-sizing: border-box; margin: 0; padding: 0; width: 40px; color: #fffffe; filter: grayscale(100%)" width="40">
            </div>
            <header style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c') center top/cover no-repeat; box-sizing: border-box; margin: 0; padding: 64px 24px"></header>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #ffffff; padding: 24px">
              <h1 data-subtitle style="color: black; line-height: 0.95em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -.8px; font-size: 1.7em">
                Falta pouco para você finalizar seu cadastro
              </h1>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-content style="color: black; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -1px; font-size: 1.15em">
                <span style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                Olá<strong style="box-sizing: border-box; margin: 0; padding: 0; color: #5937c0"> Diego Santana,</strong>
            </span>
                somos do LivoApp e temos o prazer de informá-lo que você foi vinculado ao condomínio
                <strong style="box-sizing: border-box; margin: 0; padding: 0; color: #5937c0">Alphalivo</strong>, em Rua Santos, 10.
              </p>
              <p data-content style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 8px 0 0; font-size: 1.15em">
                Para criar o seu acesso ao aplicativo, basta clicar no link abaixo e realizar um breve
                cadastro. Além disso, solicitamos
                que tire uma foto para o reconhecimento facial, o que garantirá seu acesso aos
                equipamentos.
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Ffinish-register%20(1).jpg?alt=media&token=844636dc-3044-41e7-a8c3-14d1b302acc7" alt style="color: black; box-sizing: border-box; padding: 0; margin: 0 auto; height: 100%; width: 100%; border-radius: 30px; border: 6px solid #f6f6fd">
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <button style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 48px; width: 100%; border-radius: 12px; border-style: none; background-color: #5937c0; text-align: center; font-weight: 500">
                <p style="box-sizing: border-box; padding: 0; margin: 0; font-size: .9em; color: #fffffe">Finalize seu cadastro</p>
              </button>
            </div>
            <div style="color: black; box-sizing: border-box; margin: 0; background-color: #F8F9FA; padding: 24px">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" alt="livo-logo" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 64px" width="64">
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.06em">
                Essa notificação foi enviada ao endereço de e-mail associado
                a sua conta LIVO.
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.06em">
                Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #7D40AC">WhatsApp</a>
              </p>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Contatos</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: black; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                      <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://www.instagram.com/livoapp/" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="mailto:contato@livoapp.com.br" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" alt="Email" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Transparência</td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <a href="https://livoapp.com.br/lgpd.php" data-notify style="color: black; letter-spacing: -0.5px; line-height: 0.9em; box-sizing: border-box; margin: 0; padding: 0; text-decoration: none; font-size: 1em">politica de
                      privacidade</a>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
            </div>
            <footer style="color: black; box-sizing: border-box; margin: 0; background-color: #fff; padding: 16px 24px">
              <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 12px; font-weight: 300; letter-spacing: -1px">
                &copy; 2025 Livo App. Todos os direitos reservados
              </div>
            </footer>
          </div>
        </div>
      </td>
    </tr">
  </table>
</body>
</html>`
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
