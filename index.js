const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to redirect all traffic
app.use((req, res) => {
  res.redirect(301, 'https://breastcanceralliance.org/goforpink');
});

app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});