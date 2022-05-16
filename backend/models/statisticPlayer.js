const mongoose = require("mongoose");

const statPlayerSchema = mongoose.Schema({
  statId: { type: mongoose.Schema.Types.ObjectId, ref: "Stats" },
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
});

module.exports = mongoose.model("statPlayer", statPlayerSchema);