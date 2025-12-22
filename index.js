const express = require("express");
const app = express();
const port = 3000;

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
  "Battlefield 2042",
  "Halo Infinite",
  "Starfield",
  "The Legend of Zelda: BOTW",
  "Super Mario Odyssey",
  "Animal Crossing: New Horizons",
  "Tetris Effect",
  "Resident Evil Village",
  "The Witcher 3",
  "Red Dead Redemption 2",
  "Cyberpunk 2077",
  "Fall Guys",
  "Among Us",
  "Stardew Valley",
  "Hades",
  "Sea of Thieves",
  "Monster Hunter World",
  "Dark Souls 3",
  "Elden Ring",
  "Ghost of Tsushima",
  "Spider-Man: Miles Morales",
  "Assassin’s Creed Valhalla",
  "Far Cry 6",
  "Terraria",
  "Baldur’s Gate 3",
  "Path of Exile",
  "Pummel Party",
  "Phasmophobia",
  "Dungeon Defenders",
  "Mobile Legends"
  // … continue until 300
];

app.get("/getGames", (req, res) => {
  const results = games.map(g => ({
    title: g,
    value: g.toLowerCase().replace(/[^a-z0-9]+/g, "_") // replace spaces & special chars
  }));

  res.json(results); // direct array for Adaptive Card
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
