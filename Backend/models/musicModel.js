const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const music = sequelize.define(
  "music_playlist_tb",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "music_playlist_tb",
  }
);

module.exports = music;
