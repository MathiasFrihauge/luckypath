// server-middleware/klaviyo-api.js
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());


const url = "https://sms.messagewhiz.com/sms";


const instaSpinMessage = process.env.INSTASPIN_MESSAGE;
const fatPirateMessage = process.env.FAT_PIRATE_MESSAGE;
const slotMonsterMessage = process.env.SLOT_MONSTER_MESSAGE;
const bubblesBetMessage = process.env.BUBBLESBET_MESSAGE;
const lovecasinoMessage = process.env.LOVECASINO_MESSAGE;
const iWildMessage = process.env.IWILD_MESSAGE;
const luckyPaysMessage = process.env.LUCKY_PAYS_MESSAGE;
const luckyMaxMessage = process.env.LUCKY_MAX_MESSAGE;
const luckyCharmsMessage = process.env.LUCKY_CHARMS_MESSAGE;
const savannaMessage = process.env.SAVANNA_MESSAGE;


app.post('/sendsms', async (req, res) => {
    const { casino,recipient } = req.body;
  
  
    if (!casino) {
      return res.status(400).json({ error: 'casino is required' });
    }
  
    let message;
    
    switch (casino.toUpperCase()) {
      case 'INSTASPIN':
        message = instaSpinMessage;
        break;
      case 'FATPIRATE':
        message = fatPirateMessage;
        break;
      case 'SLOTMONSTER':
        message = slotMonsterMessage;
        break;
      case 'BUBBLESBET':
        message = bubblesBetMessage;
        break;
      case 'GRANSINO':
        message = gransinoMessage;
        break;
      case 'IWILDCASINO':
        message = iWildMessage;
        break;
      case 'LUCKYPAYS':
        message = luckyPaysMessage;
        break;
      case 'LUCKYMAX':
        message = luckyMaxMessage;
        break;
      case 'CASINOLUCKYCHARMS':
        message = luckyCharmsMessage;
        break;
      case 'SAVANNAWINS':
        message = savannaMessage;
        break;
      default:
        return res.status(404).json({ error: 'Invalid casino name' });
    }

   
    try {
        
        var data = JSON.stringify({
          "api_key": process.env.SMS_API_KEY,
          "to": recipient,
          "from": "BigMax",
          "text": message
        });
    
        var config = {
          method: 'post',
          url: url,
          headers: {
            "Content-Type": "application/json"
          },
          data: data
        };
    
        const response = await axios(config);
        res.status(200).json({
          status: 200,
          message: 'SMS sent successfully!',
          data: response.data
        });
    
      } catch (error) {
        console.error('SMS API error:', error.response ? error.response.data : error.message);
        res.status(500).json({
          status: 500,
          error: 'SMS sending failed',
          details: error.response ? error.response.data : error.message
        });
      }
        
  });

  module.exports = app;
  