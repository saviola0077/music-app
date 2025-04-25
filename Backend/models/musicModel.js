const { DataTypes } = require("sequelize"); //This is the way of import sequelize into the project
const sequelize = require("../config/db"); //

//Model define a data type of user interface, example id, username, password, email etc. 
//sequelize is a framework the help interfacing node js with the mysql db
//music_playlist_tb is the table name in mysql database

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
