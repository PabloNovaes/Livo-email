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


app.get("/project", async (_req, res) => {
  try {
    const mailOptions = {
      from: '"Livo App" <noreaply@livoapp.com.br>',
      to: [
        // "ppablo.0028922@gmail.com",
        "contato@livoapp.com.br",
        // "david@visstas.com",
        // "pablo.ng.macedo@outlook.com",
        // "danyyandrade25@gmail.com",
      ],
      subject: "Notificação de projeto",
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
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
  </style></head>
<body style="color: black; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color-scheme: light only; box-sizing: border-box; margin: 0; width: 100%; background-color: #ebf0f6; padding: 10px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">    <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; display: none">
      Sua participação em um projeto foi confirmada:.
      &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
    </div>
  <div aria-roledescription="email" aria-label lang="pt" style="color: black; box-sizing: border-box; margin: 0; padding: 0; margin-left: auto; margin-right: auto; max-width: 600px">
    <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; overflow: auto; background-color: #fff">
      <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; padding-bottom: 8px; padding-top: 12px; text-align: center">
        <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" style="box-sizing: border-box; margin: 0; padding: 0; width: 40px; color: #fffffe; filter: grayscale(100%)" width="40">
      </div>
      <header style="color: black; background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c') center top/cover no-repeat; box-sizing: border-box; margin: 0; padding: 24px; padding-top: 64px; padding-bottom: 64px"></header>    <div style="color: black; box-sizing: border-box; margin: 0; background-color: #ffffff; padding: 24px">
        <h1 data-subtitle style="color: black; line-height: 0.95em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -.8px; font-size: 1.7em">Participação confirmada!
        </h1>  <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
        <p data-content style="color: black; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; letter-spacing: -1px; font-size: 1.15em">
            <span style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                Olá<span style="box-sizing: border-box; margin: 0; padding: 0; color: #663C9D"> Diego Santana,</span>
            </span>
            Informamos que sua participação no projeto <span style="box-sizing: border-box; margin: 0; padding: 0; color: #663C9D">"Livo LGDP"</span> foi confimada
        </p>  <div role="separator" style="color: black; line-height: 20px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
        <div style="color: black; border: solid 1px #E6E6E6; background: linear-gradient(to top, white 74%, #f8f9fa 20%); width: 100%; height: fit-content; box-sizing: border-box; margin: 0; padding: 0; overflow: auto; border-radius: 24px; border-width: 1px; padding-left: 12px; padding-right: 12px; padding-bottom: 12px">
            <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 25%; width: 100%" cellpadding="0" cellspacing="0" role="none"> <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                        <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: fit-content" cellpadding="0" cellspacing="0" role="none">
                            <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                                <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                                    <h3 style="color: black; box-sizing: border-box; padding: 0; margin: 0; padding-top: 8px; padding-bottom: 8px; font-size: 1.2em">Livo LGPD</h3>
                                </td>
                            </tr>
                            <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                                <td align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                                    <img src="https://blog.synergyco.com.br/wp-content/uploads/2018/03/172165-estender-500-palavras-x-dicas-para-impressionar-seus-clientes-em-uma-reuniao-de-negocios-1000x640.jpg" alt style="color: black; border: solid 1px #E6E6E6; box-sizing: border-box; margin: 0; width: 100%; border-radius: 24px; border-width: 1px; background-color: #fff; object-fit: fill; padding: 6px">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 8px"></tr>
                <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                    <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none"> <tr align="center" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                            <td style="color: black; border: solid 1px #E6E6E6; box-sizing: border-box; margin: 0; padding: 0; border-radius: 16px; border-width: 1px; background-color: #f8f9fa">
                                <table align="center" style="color: black; box-sizing: border-box; margin: 0; width: 100%; padding: 4px" cellpadding="0" cellspacing="0" role="none">
                                    <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                                        <td colspan="2" style="color: black; box-sizing: border-box; margin: 0; padding: 12px">
                                            <strong style="color: black; box-sizing: border-box; margin: 0; padding: 0">Descrição:</strong>
                                            Nesse projeto, será abordada a evolução da proteção de dados no Brasil,
                                            destacando a importância da adequação à Lei
                                            Geral de Proteção de Dados (LGPD) e os desafios enfrentados por empresas na
                                            implementação de boas práticas.
                                        </td>
                                    </tr>
                                    <tr role="separator" style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 1px; background-color: #E6E6E6">
    <td colspan="2" style="color: black; box-sizing: border-box; margin: 0; padding: 0"></td>
</tr>
                                    <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                                        <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100px; padding-left: 12px">
                                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.01em; font-weight: 400">Participação</p>
                                        </td>
                                        <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0; padding-right: 12px">
                                            <span style="box-sizing: border-box; margin: 0; padding: 0; width: fit-content; color: #21dc6c">Confirmada</span>
                                        </td>
                                    </tr>
                                    <tr role="separator" style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 1px; background-color: #E6E6E6">
    <td colspan="2" style="color: black; box-sizing: border-box; margin: 0; padding: 0"></td>
</tr>
                                    <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 32px">
                                        <td align="start" style="color: black; box-sizing: border-box; margin: 0; padding: 0; padding-left: 12px">
                                            <p data-subtext style="letter-spacing: -0.5px; line-height: 1.2em; color: #656370; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.01em; font-weight: 400">Condomínio</p>
                                        </td>
                                        <td align="end" style="color: black; box-sizing: border-box; margin: 0; padding: 0; padding-right: 12px">
                                            <p data-text style="letter-spacing: -0.5px; line-height: 1.2em; color: black; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.01em; font-weight: 400">Livo App</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </tr>
            </table>
        </div>
    </div>
      <div style="color: black; box-sizing: border-box; margin: 0; background-color: #F8F9FA; padding: 24px">
        <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" alt="livo-logo" style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 64px" width="64">  <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
        <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; width: 86%; font-size: 1.06em">
          Essa notificação foi enviada ao endereço de e-mail associado
          a sua conta LIVO.
        </p>  <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
        <p data-default-message style="color: black; letter-spacing: -0.5px; line-height: 1.2em; box-sizing: border-box; padding: 0; margin: 0; font-size: 1.06em">
          Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; margin: 0; padding: 0; color: #7D40AC">WhatsApp</a>
        </p>  <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
        <table style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 100%" cellpadding="0" cellspacing="0" role="none">
          <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; font-weight: 600">
            <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; letter-spacing: -.6px">Contatos</td>
          </tr>
          <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 4px"></tr>
          <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
            <td style="color: black; box-sizing: border-box; margin: 0; padding: 0">
              <table style="color: black; box-sizing: border-box; margin: 0; padding: 0" cellpadding="0" cellspacing="0" role="none">
                <tr style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                  <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: solid 1px #E9ECF2">
                    <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                      <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                        <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                      </div>
                    </a>
                  </td>
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                  <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: solid 1px #E9ECF2">
                    <a href="https://www.instagram.com/livoapp/" style="color: black; box-sizing: border-box; margin: 0; padding: 0">
                      <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; height: 28px">
                        <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram" style="box-sizing: border-box; margin: 0; padding: 0; height: 28px; width: 28px; color: #fffffe" width="28" height="28">
                      </div>
                    </a>
                  </td>
                  <td style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 4px"></td>
                  <td style="color: black; box-sizing: border-box; margin: 0; border-radius: 14px; background-color: #fffffe; padding: 6px; border: solid 1px #E9ECF2">
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
        </table>  <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
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
        </table>  <div role="separator" style="color: black; line-height: 10px; box-sizing: border-box; margin: 0; padding: 0">&zwj;</div>
        <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" alt style="color: black; box-sizing: border-box; margin: 0; padding: 0; width: 112px" width="112">
      </div>      <footer style="color: black; box-sizing: border-box; margin: 0; background-color: #fff; padding: 16px; padding-left: 24px; padding-right: 24px">
        <div style="color: black; box-sizing: border-box; margin: 0; padding: 0; text-align: center; font-size: 12px; font-weight: 300; letter-spacing: -1px">
          &copy; 2025 Livo App. Todos os direitos reservados
        </div>
      </footer>
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
app.get("/invite", async (_req, res) => {
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
      subject: "Você foi convidado!",
      html: `
     <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml">

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
      .mso-break-all {word-break: break-all;}
    </style>
    <![endif]-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
    /* ======================= */
    /* 📦 Tailwind Directives   */
    /* ======================= */
    .m-0 {
      margin: 0 !important;
    }
    .mx-2px {
      margin-left: 2px !important;
      margin-right: 2px !important;
    }
    .mx-auto {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    .mt-2 {
      margin-top: 8px !important;
    }
    .inline-block {
      display: inline-block !important;
    }
    .table {
      display: table !important;
    }
    .inline-table {
      display: inline-table !important;
    }
    .hidden {
      display: none !important;
    }
    .aspect-video {
      aspect-ratio: 16 / 9 !important;
    }
    .size-42 {
      width: 168px !important;
      height: 168px !important;
    }
    .h-1 {
      height: 4px !important;
    }
    .h-12 {
      height: 48px !important;
    }
    .h-2 {
      height: 8px !important;
    }
    .h-3 {
      height: 12px !important;
    }
    .h-7 {
      height: 28px !important;
    }
    .h-8 {
      height: 32px !important;
    }
    .h-25pc {
      height: 25% !important;
    }
    .h-28px {
      height: 28px !important;
    }
    .h-full {
      height: 100% !important;
    }
    .h-px {
      height: 1px !important;
    }
    .max-h-128px {
      max-height: 128px !important;
    }
    .min-h-svh {
      min-height: 100svh !important;
    }
    .w-1 {
      width: 4px !important;
    }
    .w-1_5 {
      width: 6px !important;
    }
    .w-14 {
      width: 56px !important;
    }
    .w-16 {
      width: 64px !important;
    }
    .w-2 {
      width: 8px !important;
    }
    .w-28 {
      width: 112px !important;
    }
    .w-7 {
      width: 28px !important;
    }
    .w-40px {
      width: 40px !important;
    }
    .w-86pc {
      width: 86% !important;
    }
    .w-90pc {
      width: 90% !important;
    }
    .w-90px {
      width: 90px !important;
    }
    .w-fit {
      width: fit-content !important;
    }
    .w-full {
      width: 100% !important;
    }
    .min-w-1_5 {
      min-width: 6px !important;
    }
    .max-w-420px {
      max-width: 420px !important;
    }
    .max-w-450px {
      max-width: 450px !important;
    }
    .max-w-600px {
      max-width: 600px !important;
    }
    .cursor-pointer {
      cursor: pointer !important;
    }
    .overflow-auto {
      overflow: auto !important;
    }
    .rounded-2xl {
      border-radius: 16px !important;
    }
    .rounded-3xl {
      border-radius: 24px !important;
    }
    .rounded-14px {
      border-radius: 14px !important;
    }
    .rounded-25px {
      border-radius: 25px !important;
    }
    .rounded-30px {
      border-radius: 30px !important;
    }
    .rounded-xl {
      border-radius: 12px !important;
    }
    .border {
      border-width: 1px !important;
    }
    .border-none {
      border-style: none !important;
    }
    .border-_E9ECF2 {
      border-color: #E9ECF2 !important;
    }
    .bg-_663C9D {
      background-color: #663C9D !important;
    }
    .bg-_E6E6E6 {
      background-color: #E6E6E6 !important;
    }
    .bg-_F8F9FA {
      background-color: #F8F9FA !important;
    }
    .bg-_ebf0f6 {
      background-color: #ebf0f6 !important;
    }
    .bg-_f8f9fa {
      background-color: #f8f9fa !important;
    }
    .bg-_fff {
      background-color: #fff !important;
    }
    .bg-_ffffff {
      background-color: #ffffff !important;
    }
    .bg-white {
      background-color: #fffffe !important;
    }
    .object-contain {
      object-fit: contain !important;
    }
    .object-cover {
      object-fit: cover !important;
    }
    .object-fill {
      object-fit: fill !important;
    }
    .p-1 {
      padding: 4px !important;
    }
    .p-1_5 {
      padding: 6px !important;
    }
    .p-2 {
      padding: 8px !important;
    }
    .p-2_5 {
      padding: 10px !important;
    }
    .p-3 {
      padding: 12px !important;
    }
    .p-4 {
      padding: 16px !important;
    }
    .p-6 {
      padding: 24px !important;
    }
    .px-2 {
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
    .px-6 {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .py-2 {
      padding-top: 8px !important;
      padding-bottom: 8px !important;
    }
    .py-4 {
      padding-top: 16px !important;
      padding-bottom: 16px !important;
    }
    .py-px {
      padding-top: 1px !important;
      padding-bottom: 1px !important;
    }
    .pb-1_5 {
      padding-bottom: 6px !important;
    }
    .pl-6 {
      padding-left: 24px !important;
    }
    .pt-3 {
      padding-top: 12px !important;
    }
    .text-left {
      text-align: left !important;
    }
    .text-center {
      text-align: center !important;
    }
    .text-right {
      text-align: right !important;
    }
    .text-start {
      text-align: start !important;
    }
    .font-inter {
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif !important;
    }
    .text-_9em {
      font-size: .9em !important;
    }
    .text-0_94em {
      font-size: 0.94em !important;
    }
    .text-1_08em {
      font-size: 1.08em !important;
    }
    .text-1_1em {
      font-size: 1.1em !important;
    }
    .text-1_24em {
      font-size: 1.24em !important;
    }
    .text-1_25em {
      font-size: 1.25em !important;
    }
    .text-sm {
      font-size: 14px !important;
    }
    .text-xs {
      font-size: 12px !important;
    }
    .font-bold {
      font-weight: 700 !important;
    }
    .font-light {
      font-weight: 300 !important;
    }
    .font-medium {
      font-weight: 500 !important;
    }
    .font-normal {
      font-weight: 400 !important;
    }
    .font-semibold {
      font-weight: 600 !important;
    }
    .-tracking-_6px {
      letter-spacing: -.6px !important;
    }
    .-tracking-_8px {
      letter-spacing: -.8px !important;
    }
    .-tracking-1px {
      letter-spacing: -1px !important;
    }
    .text-_5C307E {
      color: #5C307E !important;
    }
    .text-_663C9D {
      color: #663C9D !important;
    }
    .text-_7D40AC {
      color: #7D40AC !important;
    }
    .text-black {
      color: #000001 !important;
    }
    .text-white {
      color: #fffffe !important;
    }
    .antialiased {
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
    }
    .opacity-75 {
      opacity: 0.75 !important;
    }
    .no-underline {
      text-decoration: none !important;
    }
    .grayscale {
      filter: grayscale(100%) !important;
    }
    .mso-font-width-150pc {
      mso-font-width: 150%;
    }
    .-webkit-font-smoothing-antialiased {
      -webkit-font-smoothing: antialiased !important;
    }
    .background-url-https---firebasestorage_googleapis_com-v0-b-upload-hub-fdabc_appspot_com-o-filespc2Fbgpc206_jpgq-alteq-mediaand-tokeneq-3f62a10e-1c5a-46b7-b4d0-0d85f72002b6-center_top-cover_no-repeat {
      background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fbg%20(6).jpg?alt=media&token=3f62a10e-1c5a-46b7-b4d0-0d85f72002b6')center top/cover no-repeat !important;
    }
    .border-solid_1px__E9ECF2 {
      border: solid 1px #E9ECF2 !important;
    }
    .border-solid_6px__F6F6FD {
      border: solid 6px #F6F6FD !important;
    }
    .word-break-break-word {
      word-break: break-word !important;
    }
    /* ======================= */
    /* 🌐 Global Reset & Base   */
    /* ======================= */
    * {
      box-sizing: border-box !important;
      margin: 0 !important;
      padding: 0 !important;
      color: black;
    }
    body {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      font-family: Outfit, sans-serif;
    }
    span[data-bold] {
      font-weight: 600;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 !important;
    }
    /* ======================= */
    /* 🟡 Borders & Layout      */
    /* ======================= */
    .border {
      border: solid 1px #E6E6E6;
    }
    .border-bottom {
      border-bottom: solid 1px #E6E6E6;
    }
    .card {
      background-color: #f0f2f5;
      border: solid 1px #b3b5bb2f !important;
    }
    .custom-card-bg {
      background: linear-gradient(to top, white 74%, #f8f9fa 20%);
      width: 100%;
      padding-bottom: 1rem;
      height: fit-content;
    }
    /* ======================= */
    /* 🎨 Backgrounds & Images  */
    /* ======================= */
    .header-gradient {
      background: url('https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c') center top/cover no-repeat;
    }
    .qrcode-wrapper {
      border-radius: 30px;
      border: solid 1px #F6F6FD;
      max-width: 300px;
    }
    .doc-or-faceid {
      max-width: 400px;
    }
    /* ======================= */
    /* ✨ Typography & Text     */
    /* ======================= */
    .gradient-text {
      background-image: linear-gradient(365deg, #353C74, #9C3FFF);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-weight: 900;
    }
    [data-statement-subtitle],
    [data-statement-title],
    [data-title],
    [data-subtitle],
    [data-content],
    [data-notify],
    [data-default-message],
    [data-name],
    [data-subtext],
    [data-text] {
      letter-spacing: -0.5px;
      line-height: 1.2em;
    }
    [data-statement-subtitle] {
      font-size: 1.2em !important;
      line-height: 0.95em;
    }
    [data-statement-title] {
      font-size: 1.2em !important;
      line-height: 1.3em;
    }
    [data-title] {
      font-size: 1.8em !important;
      line-height: 0.9em;
    }
    [data-subtitle] {
      font-size: 1.7em !important;
      line-height: 0.95em;
    }
    [data-content] {
      font-size: 1.15em !important;
    }
    [data-notify] {
      font-size: 1em !important;
      line-height: 0.9em;
    }
    [data-name] {
      font-size: 1.08em !important;
      font-weight: 600;
    }
    [data-default-message] {
      font-size: 1.06em !important;
    }
    [data-subtext] {
      font-size: 1.01em !important;
      color: #656370;
      font-weight: 400 !important;
    }
    [data-text] {
      font-size: 1.01em !important;
      color: black;
      font-weight: 400 !important;
    }
    /* ======================= */
    /* 🏷️ Tags & Indicators     */
    /* ======================= */
    .pending-tag {
      background-color: #fff5be;
      border: solid 1px #fef1a4;
      color: #FFC107;
      border-radius: 8px;
    }
    .approved-tag {
      background-color: #21dc6c33;
      border: solid 1px #21dc6c33;
      color: #21dc6c;
      border-radius: 8px;
    }
    /* ======================= */
    /* 📱 Responsive (Mobile)   */
    /* ======================= */
    @media (max-width: 600px) {
      .sm-w-6 {
        width: 24px !important;
      }

      .sm-px-2 {
        padding-left: 8px !important;
        padding-right: 8px !important;
      }

      .sm-text-xs {
        font-size: 12px !important;
      }
    }
    .hover-brightness-75:hover {
      filter: brightness(.75) !important;
    }
    .and-_gt---text-white > * {
      color: #fffffe !important;
    }
    .and-_li-text-start li {
      text-align: start !important;
    }
    .and-_spandata-bold-text-_663C9D span[data-bold] {
      color: #663C9D !important;
    }
    .and-_strong-text-_663C9D strong {
      color: #663C9D !important;
    }
    .and-_strong-text-_7D40AC strong {
      color: #7D40AC !important;
    }
    .and-_tr_tdaligneq--end--pr-3 tr td[align='end'] {
      padding-right: 12px !important;
    }
    .and-_tr_tdaligneq--start--pl-3 tr td[align='start'] {
      padding-left: 12px !important;
    }
  </style>


</head>

<body style="color-scheme: light only;" class="m-0 w-full word-break-break-word font-airbnb p-2_5 antialiased -webkit-font-smoothing-antialiased bg-_ebf0f6">

  <div class="hidden">
    Você recebeu um convite.
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <table class="mx-auto" cellpadding="0" cellspacing="0" role="none">
    <tr">
      <td>
        <div aria-roledescription="email" aria-label="" lang="pt">
          <div class="max-w-600px overflow-auto bg-_fff">
            <div class="text-center py-2 pt-3">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(5).png?alt=media&token=9a784cd7-0d4e-45ea-a9e0-4d04994511bb" alt="condominio-logo" class="w-40px grayscale text-white">
            </div>
            <header>
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fstatement-bg%20(4).jpg?alt=media&token=b16860c8-f182-4ed2-bcf2-330b3bd0ac4c" class="w-full aspect-video max-h-128px object-cover" alt="">
            </header>

            <div class="bg-_ffffff p-6 text-center">
              <h1 data-subtitle="" class="-tracking-_8px">
                Você foi convidado!
              </h1>



              <div role="separator" style="line-height: 10px">&zwj;</div>

              <p data-content="" class="-tracking-1px and-_spandata-bold-text-_663C9D">
                <span>
                Olá<span data-bold=""> Diego Santana,</span>
                </span>
                agora você pode utilizar a sua <span data-bold="">facial</span> para
                acessar o condomínio de forma prática e segura.
              </p>



              <div role="separator" style="line-height: 20px">&zwj;</div>

              <img class="mx-auto w-full doc-or-faceid" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fface-scan.png?alt=media&token=a2d878f9-df91-4c81-b434-80b34651fb7e" alt="">



              <div role="separator" style="line-height: 15px">&zwj;</div>


              <button class="bg-_663C9D border-none w-full max-w-420px rounded-xl p-2 py-4 hover-brightness-75 cursor-pointer">
                <a class="no-underline" href="https://maps.app.goo.gl/RqGsUdQbcVTekLzTA">
                  <table class="w-full" cellpadding="0" cellspacing="0" role="none">
                    <tr align="center">
                      <td>
                        <p class="text-white text-0_94em">Ver local no Google Maps</p>
                      </td>
                    </tr>
                  </table>
                </a>

              </button>



              <div role="separator" style="line-height: 20px">&zwj;</div>

              <div class="bg-_f8f9fa p-4 rounded-xl border mx-auto">
                <h3 class="text-start text-1_25em">Mensagem do condominio</h3>
                <p class="text-start text-1_1em">Seja muito bem-vindo! Siga as intruções para entrar no condomnio:



                </p>
                <div role="separator" style="line-height: 10px">&zwj;</div>

                <p></p>
                <ul class="pl-6 text-1_08em and-_li-text-start">
                  <li>Localize e utilize o equipamento de reconhecimento facial na entrada do condomínio.</li>
                  <li>Se houver algum problema, apresente-se na portaria com o documento que foi utilizado ao preencher o
                    convite.</li>
                </ul>

                <p></p>
              </div>

            </div>

            <div class="bg-_F8F9FA p-6">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLogo%20(4).png?alt=media&token=b71580ae-371a-4672-8410-313f3c61324b" class="w-16" alt="livo-logo">



              <div role="separator" style="line-height: 10px">&zwj;</div>

              <p data-default-message="" class="w-86pc">
                Essa notificação foi enviada ao endereço de e-mail associado
                a sua conta LIVO.
              </p>



              <div role="separator" style="line-height: 10px">&zwj;</div>

              <p data-default-message="">
                Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte via <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." class="text-_7D40AC">WhatsApp</a>
              </p>



              <div role="separator" style="line-height: 10px">&zwj;</div>

              <table class="w-full" cellpadding="0" cellspacing="0" role="none">
                <tr class="font-semibold">
                  <td class="-tracking-_6px">Contatos</td>
                </tr>
                <tr class="h-1"></tr>
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" role="none">
                      <tr>
                        <td class="bg-white border-solid_1px__E9ECF2 rounded-14px p-1_5">
                          <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo.">
                            <div class="h-7">
                              <img loading="lazy" class="w-7 h-7 text-white" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fwpp.png?alt=media&token=cb113f85-df38-49df-b8c4-996c9e1746c8" alt="WhatsApp">
                            </div>
                          </a>
                        </td>

                        <td class="w-1"></td>

                        <td class="bg-white border-solid_1px__E9ECF2 rounded-14px p-1_5">
                          <a href="https://www.instagram.com/livoapp/">
                            <div class="h-28px">
                              <img loading="lazy" class="w-7 h-7 text-white" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" alt="Instagram">
                            </div>
                          </a>
                        </td>

                        <td class="w-1"></td>

                        <td class="bg-white border-solid_1px__E9ECF2 rounded-14px p-1_5">
                          <a href="mailto:contato@livoapp.com.br">
                            <div class="h-28px">
                              <img loading="lazy" class="w-7 h-7 text-white" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" alt="Email">
                            </div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>



              <div role="separator" style="line-height: 10px">&zwj;</div>

              <table class="w-full" align="center" cellpadding="0" cellspacing="0" role="none">
                <tr class="font-semibold">
                  <td class="-tracking-_6px">Transparência</td>
                </tr>
                <tr class="h-1"></tr>
                <tr>
                  <td>
                    <a href="https://livoapp.com.br/lgpd.php" data-notify="" class="no-underline">politica de
                      privacidade</a>
                  </td>
                </tr>
              </table>



              <div role="separator" style="line-height: 10px">&zwj;</div>

              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FLGPD.png?alt=media&token=d01a856e-bf78-4457-93cf-d43e99417590" class="w-28" alt="">
            </div>


            <footer class="p-4 bg-_fff px-6">
              <div class="font-light text-xs -tracking-1px text-center">
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

app.get("/password", async (_req, res) => {
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

app.get("/statement", async (_req, res) => {
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

app.get("/access", async (_req, res) => {
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

app.get("/delivery", async (_req, res) => {
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

app.get("/reservation", async (_req, res) => {
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

app.get("/finish", async (_req, res) => {
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
