// server-middleware/klaviyo-api.js
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { parse } = require('json2csv'); 
const app = express();
const cors = require('cors');  // Import the cors middleware
app.use(express.json());
app.use(cors({
  origin: '*',  // Allow only this origin
  methods: ['GET', 'POST'],  // Allowed HTTP methods
  credentials: true  // Allow credentials like cookies, if needed
}));


// CSV File Path
const csvFilePath = path.join(__dirname, 'smsData.csv');

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


app.post('/storesms', async (req, res) => {
    const { casino,recipient } = req.body;
  
  
    if (!casino) {
      return res.status(400).json({ error: 'casino is required' });
    }
  
    let domain;
    
    switch (casino.toUpperCase()) {
      case 'INSTASPIN':
        domain = instaSpinDomain;
      
        break;
      case 'LEGENDSPIN':
        domain = legendspinDomain;
        break;
      case 'SLOTMONSTER':
        domain = slotMonsterDomain;
        break;
      case 'BUBBLESBET':
        domain = bubblesBetDomain;
        break;
      case 'LOVECASINO':
        domain = lovecasinoDomain;
        break;
      case 'IWILDCASINO':
        domain = iWildDomain;
        break;
      case 'LUCKYPAYS':
        domain = luckyPaysDomain;
        break;
      case 'BOFCASINO':
        domain = bofcasinoDomain;
        break;
      case 'CASINOLUCKYCHARMS':
        domain = luckyCharmsDomain;
        break;
      case 'SAVANNAWINS':
        domain = savannaDomain;
        break;
      default:
        return res.status(404).json({ error: 'Invalid casino name' });
    }

    
   

    //store in csv 
    const csvRow = {
      casino,
      recipient
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
  