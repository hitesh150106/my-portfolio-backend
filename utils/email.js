module.exports.SendEmail = async ({ name, email, message }) => {
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Portfolio Contact',
          email: process.env.HITESH_EMAIL, // ✅ verified sender
        },
        to: [
          { email: process.env.HITESH_EMAIL },
        ],
        replyTo: {
          name,
          email, // user's email
        },
        subject: 'New Portfolio Message',
        htmlContent: `
          <h2>New Message 🚀</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errData = await response.text();
      throw new Error(errData);
    }

    console.log('✅ Brevo email sent');
  } catch (err) {
    console.error('❌ Brevo email error:', err.message);
    throw err;
  }
};
