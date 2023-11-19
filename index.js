const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  // Check for X-Forwarded-For header
  const forwardedFor = req.headers['x-forwarded-for'];
  const requestIP = forwardedFor ? forwardedFor.split(',')[0] : req.connection.remoteAddress;

  // Check for X-Real-IP header
  const realIP = req.headers['x-real-ip'];

  console.log(`Requester's IP Address (X-Forwarded-For): ${forwardedFor}`);
  console.log(`Requester's IP Address (X-Real-IP): ${realIP}`);
  console.log(`Requester's IP Address (Fallback): ${requestIP}`);
  console.log("request.ip", req.ip);

  res.redirect('https://invezza-demo.onrender.com/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
