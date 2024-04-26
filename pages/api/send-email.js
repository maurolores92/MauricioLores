import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  // Verifica si se proporciona el encabezado Authorization y compáralo con CRON_SECRET
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).end('Unauthorized');
  }

  const { name, email, subject, message } = req.body;

  // Configurar nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'maurolores1992@gmail.com',
      pass: 'Mauro2602,'
    }
  });

  const mailOptions = {
    from: `${name} <${email}>`, 
    to: 'maurolores1992@gmail.com',
    subject: subject,
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nAsunto: ${subject}\nDescripción: ${message}`
  };

  // Enviar correo electrónico
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado: ' + info.response);
    return res.status(200).send('Correo electrónico enviado correctamente');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Hubo un error al enviar el correo electrónico');
  }
}
