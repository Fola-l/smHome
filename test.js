console.log("✅ server.js is executing...");


const express = require('express');
const app = express();

console.log("✅ Express is starting...");

app.get('/', (req, res) => {
    console.log("✅ Received request at /");
    res.send('Test server is working!');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
