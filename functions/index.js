const functions = require('firebase-functions');
const admin = require('firebase-admin');

const sendPaymentReminderMail = require('./sendPaymentReminderMail');
const createEmployee = require('./createEmployee');

admin.initializeApp(functions.config().firebase);

exports.sendPaymentReminderMail = sendPaymentReminderMail;
exports.createEmployee = createEmployee;
