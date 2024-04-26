const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
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
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Hubo un error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
