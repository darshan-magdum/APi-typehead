const express = require("express");
const app = express();
const port = 3000;

// Full game list
const games = [
  "Minecraft",
  "Minecraft Dungeons",
  "GTA V",
  "GTA San Andreas",
  "Call of Duty",
  "Call of Duty Modern Warfare",
  "Death's Door",
  "Fortnite",
  "Forza Horizon 5"
];

app.get("/getGames", (req, res) => {
  const results = games.map(g => ({
    title: g,
    value: g.toLowerCase().replace(/ /g, "_")
  }));

  res.json({
    value: results
  });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
