// server-middleware/klaviyo-api.js
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY;
const KLAVIYO_LIST_ID_INSTASPIN = process.env.KLAVIYO_LIST_ID_INSTASPIN;
const KLAVIYO_LIST_ID_FATPIRATE = process.env.KLAVIYO_LIST_ID_FATPIRATE;
const KLAVIYO_LIST_ID_SLOTMONSTER = process.env.KLAVIYO_LIST_ID_SLOTMONSTER;
const KLAVIYO_LIST_ID_BUBBLESBET = process.env.KLAVIYO_LIST_ID_BUBBLESBET;
const KLAVIYO_LIST_ID_GRANSINO = process.env.KLAVIYO_LIST_ID_GRANSINO;
const KLAVIYO_LIST_ID_IWILDCASINO = process.env.KLAVIYO_LIST_ID_IWILDCASINO;
const KLAVIYO_LIST_ID_LUCKYPAYS = process.env.KLAVIYO_LIST_ID_LUCKYPAYS;
const KLAVIYO_LIST_ID_LUCKYMAX = process.env.KLAVIYO_LIST_ID_LUCKYMAX;
const KLAVIYO_LIST_ID_CASINOLUCKYCHARMS = process.env.KLAVIYO_LIST_ID_CASINOLUCKYCHARMS;
const KLAVIYO_LIST_ID_SAVANNAWINS = process.env.KLAVIYO_LIST_ID_SAVANNAWINS;


app.post('/subscribe', async (req, res) => {
  const { email, campaignName } = req.body;


  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  let klaviyoListId;
  
  switch (campaignName.toUpperCase()) {
    case 'INSTASPIN':
      klaviyoListId = KLAVIYO_LIST_ID_INSTASPIN;
      break;
    case 'FATPIRATE':
      klaviyoListId = KLAVIYO_LIST_ID_FATPIRATE;
      break;
    case 'SLOTMONSTER':
      klaviyoListId = KLAVIYO_LIST_ID_SLOTMONSTER;
      break;
    case 'BUBBLESBET':
      klaviyoListId = KLAVIYO_LIST_ID_BUBBLESBET;
      break;
    case 'GRANSINO':
      klaviyoListId = KLAVIYO_LIST_ID_GRANSINO;
      break;
    case 'IWILDCASINO':
      klaviyoListId = KLAVIYO_LIST_ID_IWILDCASINO;
      break;
    case 'LUCKYPAYS':
      klaviyoListId = KLAVIYO_LIST_ID_LUCKYPAYS;
      break;
    case 'LUCKYMAX':
      klaviyoListId = KLAVIYO_LIST_ID_LUCKYMAX;
      break;
    case 'CASINOLUCKYCHARMS':
      klaviyoListId = KLAVIYO_LIST_ID_CASINOLUCKYCHARMS;
      break;
    case 'SAVANNAWINS':
      klaviyoListId = KLAVIYO_LIST_ID_SAVANNAWINS;
      break;
    default:
      return res.status(404).json({ error: 'Invalid campaign name' });
  }
console.log('klaviyoListId ==>> ', klaviyoListId);



  try {
   
    var data = JSON.stringify({
      "data": {
        "type": "profile-subscription-bulk-create-job",
        "attributes": {
          "profiles": {
            "data": [
              {
                "type": "profile",
                "attributes": {
                  "subscriptions": {
                    "email": {
                      "marketing": {
                        "consent": "SUBSCRIBED"
                      }
                    }
                  },
                  "email": email
                }
              }
            ]
          },
          "historical_import": false
        },
        "relationships": {
          "list": {
            "data": {
              "type": "list",
              "id": klaviyoListId
            }
          }
        }
      }
    });
    
    var config = {
      method: 'post',
      url: 'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/',
      headers: { 
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`, 
        'revision': '2024-07-15', 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      res.status(200).json({ status: 200, message: 'Thank you for subscribing! Please check your email for further instructions.', data: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json({ status: 400, error: 'Subscription failed', details: error.response ? error.response.data : error.message });
    });

  } catch (error) {
    console.error('Klaviyo API error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Subscription failed', details: error.response ? error.response.data : error.message });
  }
});

module.exports = app;
