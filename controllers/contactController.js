const contactModel = require('../models/contact');
const { SendEmail } = require('../utils/email');

module.exports.SendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    await contactModel.create({ name, email, message });

    SendEmail({ name, email, message }).catch(err =>
      console.error('Email failed:', err.message)
    );

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully 🚀',
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};
