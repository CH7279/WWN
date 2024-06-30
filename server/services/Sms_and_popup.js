// Import the Firebase and Twilio SDKs
const firebase = require('firebase-admin');
const twilio = require('twilio');

// Initialize the Firebase app with your account credentials
const serviceAccount = require('/path/to/firebase_credentials.json');
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

// Initialize the Twilio client with your account credentials
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const twilioNumber = 'your_twilio_number';
const twilioClient = new twilio(accountSid, authToken);

// Define the message content and recipient's phone number
const message = 'Hello, {recipient_name}. Your order #{order_id} has been shipped.';
const recipientPhoneNumber = '+1234567890';

// Validate the recipient's phone number
const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
if (!phoneNumberRegex.test(recipientPhoneNumber)) {
    // Handle invalid phone number error
    console.error('Error: Invalid phone number.');
    process.exit(1);
}

// Personalize the message
const personalizedMessage = message.replace('{recipient_name}', 'John').replace('{order_id}', '1234');

// Send the SMS message using Twilio
twilioClient.messages.create({
    body: personalizedMessage,
    from: twilioNumber,
    to: recipientPhoneNumber,
    priority: 'high'
}).then((message) => {
    // Handle SMS message success case
    console.log('SMS message sent successfully.');
}).catch((error) => {
    // Handle SMS message error case
    console.error('Error: ' + error.message);
    process.exit(1);
});

// Define the pop-up message content and recipient's device token
const popupMessage = 'New feature announcement: Optional coordination is now available!';
const deviceToken = 'your_device_token';

// Set up the notification payload for the pop-up message
const notification = {
    title: 'New feature announcement',
    body: popupMessage,
    sound: 'default',
    clickAction: 'your_click_action'
};

// Send the pop-up message using FCM
firebase.messaging().sendToDevice(deviceToken, {notification})
    .then((response) => {
        // Handle pop-up message success case
        console.log('Pop-up message sent successfully.');
    }).catch((error) => {
        // Handle pop-up message error case
        console.error('Error: ' + error.message);
        process.exit(1);
    });
