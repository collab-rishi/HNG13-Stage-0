const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const { ServerConfig } = require('./config');
const rateLimit = require('express-rate-limit');

dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, 
  message: {
    status: "fail",
    message: "Too many requests from this IP, please try again after 15 minutes."
  },
  standardHeaders: true, 
  legacyHeaders: false,  
});

app.use(limiter);

app.get('/me', async (req, res) => {
  
try {
    const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });

  res.status(200).json({
    status: "success",
    user: {
       email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK
    },
    timestamp: new Date().toISOString(),
    fact: response.data.fact
  });
   } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    res.status(503).json({
      status: "success",
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact at this time. Please try again later."
    });
  }
});

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
