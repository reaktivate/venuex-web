const admin = require('firebase-admin');
const moment = require('moment');
const functions = require('firebase-functions');

const sendEmail = require('./utils/sendEmail');
const employeeCreated = require('./emailTemplates/employeeCreated');

module.exports = functions.https.onCall((data, context) => {
  const { fullName, email, permissions } = data;
  const userEmail = context.auth.token.email;
  const venueId = userEmail.split('+')[0];

  const randomlyGeneratedPassword = Math.random().toString(36).slice(-10);

  return admin.auth().createUser({
    displayName: fullName,
    email: `${venueId}+${email}`,
    password: randomlyGeneratedPassword,
  }).then(userRecord => {
    return admin.database().ref(`/employees/${userRecord.uid}`).set({
      venueId: venueId,
      addedAt: parseInt(moment().format('X'), 10) * 1000,
      fullName,
      email,
      permissions,
    });
  }).then(() => {
    return sendEmail(
      email,
      'You\'ve been invited',
      employeeCreated({
        password: randomlyGeneratedPassword
      }),
      context
    );
  });
});
