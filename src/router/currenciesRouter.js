const express = require('express');
const router = express.Router();
let array = [
    {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
    {"pair":"GBP USD", "buy":1.28495, "sell":1.2836},
    {"pair":"GBP CHF", "buy":1.27378, "sell":1.27147},
    {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
    {"pair":"USD JPY", "buy":110.467, "sell":110.417},
    {"pair":"EUR JPY", "buy":120.589, "sell":120.491}
]

router.get("/currencies", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    responseArray = array.map(({
        pair,
        buy,
        sell,
    }) => {
        let newSell, newBuy;
        const sellProcent = sell * 0.1;
        const buyProcent = buy * 0.1;

        if (Math.round(Math.random())) {
            newSell = sell + sellProcent;
            newBuy = buy + buyProcent;
        } else {
            newSell = sell - sellProcent;
            newBuy = buy - buyProcent;
        }

        newSell = [...newSell.toString()];
        newBuy = [...newBuy.toString()];

        newSell.length = 7;
        newBuy.length = 7;

        newSell = newSell.join('');
        newBuy = newBuy.join('');

        return {
            pair,
            buy: newBuy,
            sell: newSell,
        }
    })
    res.send(responseArray);
});

module.exports = router;