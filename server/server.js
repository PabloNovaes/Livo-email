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
      subject: "Nova encomenda",
      html: `
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
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
<body style="color: black; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; width: 100%; background-color: #ebf0f6; padding: 12px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; display: none">
    Sua encomenda acabou de chegar.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; padding: 0; margin: 0 auto; width: 100%; max-width: 650px" cellpadding="0" cellspacing="0" role="none">
    <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
      <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
        <div aria-roledescription="email" aria-label lang="pt" style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
          <div role="separator" style="color: black; line-height: 10px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
          <div style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; max-width: 600px; overflow: auto; background-color: #fff">
            <div style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 12px 0 8px; text-align: center">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" style="filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; width: 40px; color: #fffffe" width="40">
            </div>
            <header style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg.png?alt=media&token=62694f46-93a2-49a8-b78a-4c01ab8b6074')center top/cover no-repeat; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 64px 24px"> </header>
            <div style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; background-color: #ffffff; padding: 24px">
              <h1 data-subtitle style="color: black; line-height: .95em; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -.8px; font-size: 1.7em">Sua encomenda chegou!
              </h1>
              <div role="separator" style="color: black; line-height: 10px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-content style="color: black; line-height: 1.2em; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -1px; font-size: 1.15em">
                <span style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                    Olá<span style="filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; color: #5937c0"> Diego Santana,</span>
                </span>
                Informamos que sua encomenda chegou no condomnio e já pode ser retirada.
              </p>
              <div role="separator" style="color: black; line-height: 10px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <div style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg.png?alt=media&token=62694f46-93a2-49a8-b78a-4c01ab8b6074')center top/cover no-repeat; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; border-radius: 30px; text-align: center">
                <div style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; border-radius: 24px; background-color: #fff; padding: 10px 8px 8px; border: 1px solid #ebeff6">
                  <table style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                    <tr align="center" style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                      <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                        <div style="color: black; background-color: #fef7cd; border: 1px solid #fef1a4; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0 auto; width: fit-content; border-radius: 6px; padding: 4px 8px">
                          <p data-notify style="line-height: .9em; letter-spacing: -.5px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; padding: 0; margin: 0; color: #FFD207; font-size: 1em">Pendente</p>
                        </div>
                        <div role="separator" style="color: black; line-height: 10px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
                        <img src="https://imagens.ebc.com.br/2MupZTQZN10kmC8fsnZI17ct6Q8=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2024/06/01/_ja_2712.jpg?itok=pT_XVx6N" alt style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; width: 100%; max-width: 450px; border-radius: 24px; object-fit: cover">
                      </td>
                    </tr>
                    <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; height: 6px"></tr>
                    <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                      <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                        <strong style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">Fone de ouvido</strong>
                        <br style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                        <span style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">#512345</span>
                      </td>
                    </tr>
                  </table>
                </div>
                <footer style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 4px 0">
                  <p data-default-message style="line-height: 1.2em; letter-spacing: -.5px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; padding: 0; margin: 0; color: #fffffe; font-size: 1.08em">Pablo Novaes - Livo App</p>
                </footer>
              </div>
            </div>
            <div style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; background-color: #F8F9FA; padding: 24px">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" alt="livo-logo" style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; width: 64px" width="64">
              <div role="separator" style="color: black; line-height: 10px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; line-height: 1.2em; letter-spacing: -.5px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.08em">
                Essa notificação foi enviada ao endereço de e-mail associado
                a sua conta LIVO.
              </p>
              <div role="separator" style="color: black; line-height: 10px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <p data-default-message style="color: black; line-height: 1.2em; letter-spacing: -.5px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.08em">
                Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte
              </p>
              <div role="separator" style="color: black; line-height: 10px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table align="center" style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Contatos</td>
                </tr>
                <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                      <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                        <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp" style="filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="https://www.instagram.com/livoapp/" style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram" style="filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                        <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                        <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: 1px solid #e9ecf2">
                          <a href="mailto:contato@livoapp.com.br" style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                            <div style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                              <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" alt="Email" style="filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <table align="center" style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
                  <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Transparência</td>
                </tr>
                <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
                <tr style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">
                    <a href="https://livoapp.com.br/lgpd.php" data-notify style="color: black; line-height: .9em; letter-spacing: -.5px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; text-decoration: none; font-size: 1em">politica de
                      privacidade</a>
                  </td>
                </tr>
              </table>
              <div role="separator" style="color: black; line-height: 10px; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: black; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
            </div>
            <footer style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg.png?alt=media&token=62694f46-93a2-49a8-b78a-4c01ab8b6074')center top/cover no-repeat; filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 16px 24px">
              <div style="filter: invert(0); mix-blend-mode: normal; color-scheme: light only; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 12px; font-weight: 300; letter-spacing: -1px; color: #fffffe">
                &copy; 2025 Livo App. Todos os direitos reservados
              </div>
            </footer>
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
