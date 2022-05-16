const mongoose = require("mongoose");

const compPlayerSchema = mongoose.Schema({
  compId: { type: mongoose.Schema.Types.ObjectId, ref: "Comp" },
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
});

module.exports = mongoose.model("compPlayer", compPlayerSchema);