const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Game list
const games = [
  "Minecraft",
  "Minecraft Dungeons",
  "GTA V",
  "GTA San Andreas",
  "Call of Duty",
  "Call of Duty Modern Warfare",
  "Death's Door",
  "Fortnite",
  "Forza Horizon 5",
  "Apex Legends",
  "Overwatch 2",
  "Valorant",
  "League of Legends",
  "Dota 2",
  "CS2",
  "Rocket League",
  "FIFA 23",
  "NBA 2K24",
  "Madden NFL 24",
  "Battlefield 2042"
];

// API for Adaptive Card Typeahead
app.get("/getGames", (req, res) => {

  const results = games.map(game => ({
    title: game,
    value: game
  }));

  const successResult = {
    status: 200,
    body: {
      type: "application/vnd.microsoft.search.searchResponse",
      value: {
        results: results
      }
    }
  };

  res.json(successResult);
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
