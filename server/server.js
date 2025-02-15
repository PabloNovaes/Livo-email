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
        "contato@livoapp.com.br",
        "david@visstas.com",
        "pablo.ng.macedo@outlook.com",
        "dannyandrade25@gmail.com",
      ],
      subject: "Finalize seu cadastro",
      html: `
      <!DOCTYPE html>
<html lang="pt" xmlns:v="urn:schemas-microsoft-com:vml" style="box-sizing: border-box; color: #18181b">
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
    @media (max-width: 415px) {
      span[role="button"].resize-text {
        font-size: 13px !important;
      }
    }
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
<body style="box-sizing: border-box; color: #18181b; background-color: #fff; margin: 0; width: 100%; padding: 0; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; word-break: break-word">
  <div style="box-sizing: border-box; color: #18181b; display: none">
    Finalize seu cadastro e aproveite todos os benefícios do aplicativo!
    &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
  </div>
  <div role="article" aria-roledescription="email" aria-label lang="pt" style="box-sizing: border-box; color: #18181b">
    <div style="box-sizing: border-box; color: #18181b; padding: 16px; letter-spacing: -.3px">
      <table align="center" style="box-sizing: border-box; color: #18181b; margin: 0 auto" cellpadding="0" cellspacing="0" role="none">
        <tr align="center" style="box-sizing: border-box; color: #18181b">
          <td style="box-sizing: border-box; color: #18181b; width: 552px; max-width: 100%">
            <div style="box-sizing: border-box; color: #18181b; padding-left: 4px">
              <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FVector%20(4).png?alt=media&token=1e1b81fe-d6ac-4a5d-8e1f-0007140c19cb" alt="condominio-logo" style="box-sizing: border-box; color: #18181b; max-width: 35px; border-radius: 6px">
              <h1 data-title style="box-sizing: border-box; color: #18181b; line-height: 16px; margin: 12px 0 0; text-align: center; font-weight: 600; font-size: clamp(10px, 8vw, 18px)">Falta pouco para você <br style="box-sizing: border-box; color: #18181b">finalizar seu
                cadastro</h1>
              <div role="separator" style="box-sizing: border-box; color: #18181b; line-height: 13px">&zwj;</div>
              <p data-content class="resize-text" style="box-sizing: border-box; color: #18181b; line-height: 16px; margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; font-weight: 300; font-size: clamp(10px, 8vw, 12px)">
                Olá <strong style="box-sizing: border-box; color: #7D40AC">Jonathan</strong>,
                Somos do LivoApp e temos o prazer de informá-lo que você foi vinculado ao condomínio
                <strong style="box-sizing: border-box; color: #7D40AC">Alphalivo</strong>, em Rua Santos, 10.
              </p>
              <p data-content class="resize-text" style="box-sizing: border-box; color: #18181b; line-height: 16px; margin: 8px 0 0; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; font-weight: 300; font-size: clamp(10px, 8vw, 12px)">
                Para criar o seu acesso ao aplicativo, basta clicar no link abaixo e realizar um breve
                cadastro. Além disso, solicitamos
                que tire uma foto para o reconhecimento facial, o que garantirá seu acesso aos equipamentos.
              </p>
            </div>
            <div role="separator" style="box-sizing: border-box; color: #18181b; line-height: 22px">&zwj;</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Ffinish-register.jpg?alt=media&token=567e22ff-4e8e-43d9-8fb0-61673822e053" alt style="box-sizing: border-box; color: #18181b; margin-left: auto; margin-right: auto; width: 100%; border-radius: 40px">
            <div role="separator" style="box-sizing: border-box; color: #18181b; line-height: 22px">&zwj;</div>
            <table style="box-sizing: border-box; color: #18181b; width: 100%" cellpadding="0" cellspacing="0" role="none">
              <tr style="box-sizing: border-box; color: #18181b">
                <td style="box-sizing: border-box; color: #18181b">
                  <button style="box-sizing: border-box; height: 48px; width: 100%; border-radius: 12px; border-style: none; background-color: #7D40AC; text-align: center; font-size: 12px; font-weight: 500; color: #fffffe">Finalize
                    seu cadastro</button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr style="box-sizing: border-box; color: #18181b; height: 20px"></tr>
        <tr style="box-sizing: border-box; color: #18181b">
          <td style="box-sizing: border-box; color: #18181b">
            <table style="box-sizing: border-box; color: #18181b; width: 100%" cellpadding="0" cellspacing="0" role="none">
              <tr style="box-sizing: border-box; color: #18181b">
                <td align="{{ align }}" style="box-sizing: border-box; color: #18181b; background-color: #F5F7FA; border: 1px solid #e6e8f057; border-radius: 25px">
                  <table style="box-sizing: border-box; color: #18181b; width: 100%; padding: 24px" cellpadding="0" cellspacing="0" role="none">
                    <tr align="center" data-content class="resize-text" style="box-sizing: border-box; color: #18181b; line-height: 16px; text-align: center; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; font-weight: 300; font-size: clamp(10px, 8vw, 12px)">
                      <td style="box-sizing: border-box; color: #18181b">
                        Essa notificação foi enviada ao endereço de e-mail associado a sua conta LIVO.
                      </td>
                    </tr>
                    <tr style="box-sizing: border-box; color: #18181b; height: 4px"></tr>
                    <tr align="center" data-content class="resize-text" style="box-sizing: border-box; color: #18181b; line-height: 16px; text-align: center; font-weight: 300; font-size: clamp(10px, 8vw, 12px)">
                      <td style="box-sizing: border-box; color: #18181b">
                        Não responda a este e-mail, caso necessite de ajuda, entre em contato com nosso suporte
                      </td>
                    </tr>
                    <tr style="box-sizing: border-box; color: #18181b; height: 8px"></tr>
                    <tr align="center" data-content class="resize-text" style="box-sizing: border-box; color: #18181b; line-height: 16px; text-align: center; font-weight: 300; font-size: clamp(10px, 8vw, 12px)">
                      <td style="box-sizing: border-box; color: #18181b">
                        <a target="_blank" class="resize-text" href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; color: #7D40AC">
                          Suporte via WhatsApp
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr style="box-sizing: border-box; color: #18181b; height: 16px"></tr>
        <tr style="box-sizing: border-box; color: #18181b">
          <td style="box-sizing: border-box; color: #18181b">
            <div style="box-sizing: border-box; color: #18181b; border-radius: 25px; padding: 24px">
              <table align="center" style="box-sizing: border-box; color: #18181b; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr align="center" style="box-sizing: border-box; color: #18181b">
                  <td style="box-sizing: border-box; color: #18181b">
                    <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fico%20(1).png?alt=media&token=c0a9eb99-5e50-48fa-8d3a-144c380f5548" alt style="box-sizing: border-box; color: #18181b; width: 56px" width="56">
                  </td>
                </tr>
                <tr align="center" style="box-sizing: border-box; color: #18181b; font-weight: 600">
                  <td style="box-sizing: border-box; color: #18181b">Livo App</td>
                </tr>
                <tr align="center" style="box-sizing: border-box; font-size: 13px; font-weight: 400; color: currentColor">
                  <td style="box-sizing: border-box; color: #18181b">Sua portaria conectada</td>
                </tr>
              </table>
              <div style="box-sizing: border-box; color: #18181b; height: 12px"></div>
              <table align="center" style="box-sizing: border-box; color: #18181b; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr align="center" style="box-sizing: border-box; color: #18181b; font-weight: 600">
                  <td colspan="3" style="box-sizing: border-box; color: #18181b">Contatos</td>
                </tr>
                <tr style="box-sizing: border-box; color: #18181b; height: 4px"></tr>
                <tr align="center" style="box-sizing: border-box; color: #18181b; height: 40px">
                  <td align="right" style="box-sizing: border-box; color: #18181b">
                    <a href="https://api.whatsapp.com/send?phone=5511991534123&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20Livo." style="box-sizing: border-box; color: #18181b">
                      <div style="box-sizing: border-box; color: #18181b; background-color: #F5F7FA; border: 1px solid #e6e8f057; height: 38px; width: fit-content; border-radius: 14px; padding: 6px">
                        <img loading="lazy" class="sm-w-6" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame.png?alt=media&token=ddeed02a-f189-4e42-a804-79763e35c7e7" style="box-sizing: border-box; color: #18181b; width: 28px" width="28" alt>
                      </div>
                    </a>
                  </td>
                  <td style="box-sizing: border-box; color: #18181b; width: 60px">
                    <a href="https://www.instagram.com/livoapp/" style="box-sizing: border-box; color: #18181b">
                      <div style="box-sizing: border-box; color: #18181b; background-color: #F5F7FA; border: 1px solid #e6e8f057; height: 38px; width: fit-content; border-radius: 14px; padding: 6px">
                        <img loading="lazy" class="sm-w-6" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-1.png?alt=media&token=ad760e02-6e6e-4d7f-b23c-fd9410e774d8" style="box-sizing: border-box; color: #18181b; width: 28px" width="28" alt>
                      </div>
                    </a>
                  </td>
                  <td align="left" style="box-sizing: border-box; color: #18181b">
                    <a href="mailto:contato@livoapp.com.br" style="box-sizing: border-box; color: #18181b">
                      <div style="box-sizing: border-box; color: #18181b; background-color: #F5F7FA; border: 1px solid #e6e8f057; height: 38px; width: fit-content; border-radius: 12px; padding: 6px">
                        <img loading="lazy" class="sm-w-6" src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2FFrame-2.png?alt=media&token=557e308f-7b51-49aa-9e21-6d6469c4315d" style="box-sizing: border-box; color: #18181b; width: 28px" width="28" alt>
                      </div>
                    </a>
                  </td>
                </tr>
              </table>
              <table style="box-sizing: border-box; color: #18181b; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr style="box-sizing: border-box; color: #18181b">
                  <p style="box-sizing: border-box; color: #18181b; margin: 0; padding-top: 12px; text-align: center; font-size: 12px">
                    LIVO TECNOLOGIA DA INFORMACAO LTDA
                    <br style="box-sizing: border-box; color: #18181b">
                    CNPJ: 40.008.355/0001-41
                  </p>
                </tr>
                <tr align="center" style="box-sizing: border-box; color: #18181b">
                  <td style="box-sizing: border-box; color: #18181b; padding-top: 12px">
                    <img src="https://firebasestorage.googleapis.com/v0/b/upload-hub-fdabc.appspot.com/o/files%2Fcopy.png?alt=media&token=2c506de9-3624-4dcd-919f-36c63f4bd6c2" alt style="box-sizing: border-box; color: #18181b; width: 104px" width="104">
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
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
