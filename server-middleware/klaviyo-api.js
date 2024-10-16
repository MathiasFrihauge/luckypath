// server-middleware/klaviyo-api.js
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { parse } = require('json2csv');
const app = express();
app.use(express.json());

function getKlaviyoSetup(campaignName) {
  switch (campaignName.toUpperCase()) {
    case 'INSTASPIN':
      return {
        listId: process.env.KLAVIYO_LIST_ID_INSTASPIN,
        redirectDomain: process.env.INSTASPIN_DOMAIN
      }
    case 'LEGENDSPIN':
      return {
        listId: process.env.KLAVIYO_LIST_ID_LEGENDSPIN,
        redirectDomain: process.env.LEGENDSPIN_DOMAIN
      }
    case 'SLOTMONSTER':
      return {
        listId: process.env.KLAVIYO_LIST_ID_SLOTMONSTER,
        redirectDomain: process.env.SLOT_MONSTER_DOMAIN
      }
    case 'BUBBLESBET':
      return {
        listId: process.env.KLAVIYO_LIST_ID_BUBBLESBET,
        redirectDomain: process.env.BUBBLESBET_DOMAIN
      }
    case 'LOVECASINO':
      return {
        listId: process.env.KLAVIYO_LIST_ID_LOVECASINO,
        redirectDomain: process.env.LOVECASINO_DOMAIN
      }
    case 'IWILDCASINO':
      return {
        listId: process.env.KLAVIYO_LIST_ID_IWILDCASINO,
        redirectDomain: process.env.IWILD_DOMAIN
      }
    case 'LUCKYPAYS':
      return {
        listId: process.env.KLAVIYO_LIST_ID_LUCKYPAYS,
        redirectDomain: process.env.LUCKY_PAYS_DOMAIN
      }
    case 'BOFCASINO':
      return {
        listId: process.env.KLAVIYO_LIST_ID_BOFCASINO,
        redirectDomain: process.env.BOFCASINO_DOMAIN
      }
    case 'CASINOLUCKYCHARMS':
      return {
        listId: process.env.KLAVIYO_LIST_ID_CASINOLUCKYCHARMS,
        redirectDomain: process.env.LUCKY_CHARMS_DOMAIN
      }
    case 'SAVANNAWINS':
      return {
        listId: process.env.KLAVIYO_LIST_ID_SAVANNAWINS,
        redirectDomain: process.env.SAVANNA_DOMAIN
      }
    default:
      return false
  }
}

function getKlaviyoRequestData({ email, id }) {
  return JSON.stringify({
    data: {
      type: 'profile-subscription-bulk-create-job',
      attributes: {
        profiles: {
          data: [
            {
              type: "profile",
              attributes: {
                subscriptions: {
                  email: {
                    marketing: {
                      consent: 'SUBSCRIBED'
                    }
                  }
                },
                email: email
              }
            }
          ]
        },
        historical_import: false
      },
      relationships: {
        list: {
          data: {
            type: 'list',
            id: id
          }
        }
      }
    }
  });
}

app.post('/subscribe', (req, res) => {
  const { email, campaignName } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  let klaviyoSetup = getKlaviyoSetup(campaignName);

  if (!klaviyoSetup) {
    return res.status(404).json({ error: 'Invalid campaign name' });
  }


  try {
    //Store data in the csv
    const csvRow = {
      campaignName,
      email
    };
    const csvFilePath = path.join(__dirname, 'emailData.csv');

    // Check if the file exists, if not, write the header row
    if (!fs.existsSync(csvFilePath)) {
      const csvHeader = parse([csvRow], { header: true });
      fs.writeFileSync(csvFilePath, csvHeader, 'utf8');
    } else {
      const csvData = parse([csvRow], { header: false });
      fs.appendFileSync(csvFilePath, `\n${csvData}`, 'utf8');
    }

    // Make klaviyo API request
    const requestData = getKlaviyoRequestData({
      email: email,
      id: klaviyoSetup.listId
    });

    axios({
      method: 'POST',
      url: process.env.KLAVIYO_API_URL,
      headers: {
        'Authorization': `Klaviyo-API-Key ${(process.env.KLAVIYO_API_KEY)}`,
        'revision': '2024-07-15',
        'Content-Type': 'application/json'
      },
      data: requestData,
    }).then(response => {
      // TODO: Store success data in logs? No need to send it back to the user
      console.log('success', response);
      // res.status(200).json({
      //   status: 200,
      //   message: 'Thank you for subscribing! Please check your email for further instructions.',
      //   data: response.data
      // });
    })
    .catch(error => {
      // TODO: Store error data in logs? No need to send it back to the user
      console.log('error', error);
      // res.status(500).json({
      //   status: 400,
      //   error: 'Subscription failed',
      //   details: error.response ? error.response.data : error.message
      // });
    });

  } catch (error) {
    // TODO: Store error data in logs? No need to send it back to the user
    console.error('Klaviyo API error:', error.response ? error.response.data : error.message);
    // res.status(500).json({
    //   error: 'Subscription failed',
    //   details: error.response ? error.response.data : error.message
    // });
  } finally {
    res.json({
      url: klaviyoSetup.redirectDomain
    });
  }
});

module.exports = app;
