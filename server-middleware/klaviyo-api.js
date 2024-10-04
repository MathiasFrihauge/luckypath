// server-middleware/klaviyo-api.js
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { parse } = require('json2csv'); 
const app = express();
app.use(express.json());

const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY;
const KLAVIYO_LIST_ID_INSTASPIN = process.env.KLAVIYO_LIST_ID_INSTASPIN;
const KLAVIYO_LIST_ID_LEGENDSPIN = process.env.KLAVIYO_LIST_ID_LEGENDSPIN;
const KLAVIYO_LIST_ID_SLOTMONSTER = process.env.KLAVIYO_LIST_ID_SLOTMONSTER;
const KLAVIYO_LIST_ID_BUBBLESBET = process.env.KLAVIYO_LIST_ID_BUBBLESBET;
const KLAVIYO_LIST_ID_LOVECASINO = process.env.KLAVIYO_LIST_ID_LOVECASINO;
const KLAVIYO_LIST_ID_IWILDCASINO = process.env.KLAVIYO_LIST_ID_IWILDCASINO;
const KLAVIYO_LIST_ID_LUCKYPAYS = process.env.KLAVIYO_LIST_ID_LUCKYPAYS;
const KLAVIYO_LIST_ID_BOFCASINO = process.env.KLAVIYO_LIST_ID_BOFCASINO;
const KLAVIYO_LIST_ID_CASINOLUCKYCHARMS = process.env.KLAVIYO_LIST_ID_CASINOLUCKYCHARMS;
const KLAVIYO_LIST_ID_SAVANNAWINS = process.env.KLAVIYO_LIST_ID_SAVANNAWINS;


// CSV File Path
const csvFilePath = path.join(__dirname, 'emailData.csv');

const instaSpinDomain = process.env.INSTASPIN_DOMAIN;
const legendspinDomain = process.env.LEGENDSPIN_DOMAIN;
const slotMonsterDomain = process.env.SLOT_MONSTER_DOMAIN;
const bubblesBetDomain = process.env.BUBBLESBET_DOMAIN;
const lovecasinoDomain = process.env.LOVECASINO_DOMAIN;
const iWildDomain = process.env.IWILD_DOMAIN;
const luckyPaysDomain = process.env.LUCKY_PAYS_DOMAIN;
const bofcasinoDomain = process.env.BOFCASINO_DOMAIN;
const luckyCharmsDomain = process.env.LUCKY_CHARMS_DOMAIN;
const savannaDomain = process.env.SAVANNA_DOMAIN;


app.post('/subscribe', async (req, res) => {
  const { email, campaignName } = req.body;

  

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  let klaviyoListId;
  
  switch (campaignName.toUpperCase()) {
    case 'INSTASPIN':
      klaviyoListId = KLAVIYO_LIST_ID_INSTASPIN;
      domain = instaSpinDomain;
      break;
    case 'LEGENDSPIN':
      klaviyoListId = KLAVIYO_LIST_ID_LEGENDSPIN;
      domain = legendspinDomain;
      break;
    case 'SLOTMONSTER':
      klaviyoListId = KLAVIYO_LIST_ID_SLOTMONSTER;
      domain = slotMonsterDomain;
      break;
    case 'BUBBLESBET':
      klaviyoListId = KLAVIYO_LIST_ID_BUBBLESBET;
      domain = bubblesBetDomain;
      break;
    case 'GRANSINO':
      klaviyoListId = KLAVIYO_LIST_ID_LOVECASINO;
      domain = lovecasinoDomain;
      break;
    case 'IWILDCASINO':
      klaviyoListId = KLAVIYO_LIST_ID_IWILDCASINO;
      domain = iWildDomain;
      break;
    case 'LUCKYPAYS':
      klaviyoListId = KLAVIYO_LIST_ID_LUCKYPAYS;
      domain = luckyPaysDomain;
      break;
    case 'BOFCASINO':
      klaviyoListId = KLAVIYO_LIST_ID_BOFCASINO;
      domain = bofcasinoDomain;
      break;
    case 'CASINOLUCKYCHARMS':
      klaviyoListId = KLAVIYO_LIST_ID_CASINOLUCKYCHARMS;
      domain = luckyCharmsDomain;
      break;
    case 'SAVANNAWINS':
      klaviyoListId = KLAVIYO_LIST_ID_SAVANNAWINS;
      domain = savannaDomain;
      break;
    default:
      return res.status(404).json({ error: 'Invalid campaign name' });
  }

  
/*
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

*/

    //store in csv 
    const csvRow = {
      campaignName,
      email
    };

  

    try {
      // Check if the file exists, if not, write the header row
      if (!fs.existsSync(csvFilePath)) {
        const csvHeader = parse([csvRow], { header: true });
        fs.writeFileSync(csvFilePath, csvHeader, 'utf8');
      } else {
        // Append the new row to the existing CSV file
        const csvData = parse([csvRow], { header: false });
        fs.appendFileSync(csvFilePath, `\n${csvData}`, 'utf8');
      }
  
    } catch (error) {
      console.error('Error writing to CSV file:', error);
      res.status(500).json({ error: 'Failed to store SMS data' });
    }

  return res.json({ url: domain });


  
});

module.exports = app;
