const admin = require('firebase-admin');
const moment = require('moment');
const functions = require('firebase-functions');

const sendEmail = require('./utils/sendEmail');
const paymentReminderTemplate = require('./emailTemplates/paymentReminder');


const PAYMENT_KEYS = [
  null,
  'firstPaymentDue',
  'secondPaymentDue',
  'thirdPaymentDue',
];

module.exports = functions.https.onCall((data, context) => {
  const { eventId } = data;
  admin
    .database()
    .ref(`/events/${eventId}`)
    .once('value', snapshot => {
      const event = snapshot.val();

      let paymentNumber = 3;

      if (!event.firstPaymentPaid) {
        paymentNumber = 1;
      }

      if (!event.secondPaymentPaid) {
        paymentNumber = 2;
      }

      const emailContext = {
        eventName: event.name,
        paymentNumber: paymentNumber,
        paymentDue: moment(
          event[PAYMENT_KEYS[paymentNumber]]
        ).format('YYYY-MM-DD'),
        clientName: event.clientName,
        eventDate: moment(event.start).format('YYYY-MM-DD'),
      };

      sendEmail(
        event.clientEmail,
        'Payment reminder email',
        paymentReminderTemplate(emailContext),
        context,
        () => {
          admin
            .database()
            .ref(`/events/${eventId}/lastRemindedAt`)
            .set(
              parseInt(moment().format('X'), 10) * 1000
          );
        }
      );
  });
});
