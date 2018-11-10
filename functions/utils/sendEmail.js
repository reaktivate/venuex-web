const admin = require('firebase-admin');
const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(
  functions.config().sendgrid.key
);

module.exports = (recipientEmail, subject, html, requestContext, onFinish) => {
  const userEmail = requestContext.auth.token.email;
  const venueId = userEmail.split('+')[0];
  admin
    .database()
    .ref(`/venues/${venueId}`)
    .once('value', snapshot => {

      const value = snapshot.val();
      const { emailSender } = value;

      sgMail.send({
        to: recipientEmail,
        from: emailSender,
        subject: subject,
        html: html,
      });

      onFinish && onFinish();
    });
};
