import express from "express";
import { Sequelize } from "sequelize";
import sequelize from './config.js'

const app = express();

app.set('port','3000')

app.get('/',(req, res)=>{
    res.send("Hello word")
})
app.listen(app.get('port'),async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log("Listen on port "+app.get('port'));
})