import express from "express";
import cors from "cors";
import { Sequelize } from "sequelize";
import sequelize from './config.js'

// Importacion de los modelos
import { User } from "./models/user.model.js"
import { Persona } from "./models/persona.model.js"

// Importacion de las rutas para el apiv1
import userRoutes from './routes/user.routes.js'
import personaRoutes from './routes/persona.routes.js'

const app = express();
app.use(express.json());
app.use(cors());

// Configuracion para el puerto
app.set('port','3000')

app.get('/',(req, res)=>{
    res.send("Hello word")
})

// Uso de las rutas para el apiv1
app.use('/apiv1/user',userRoutes)
app.use('/apiv1/persona',personaRoutes)

// Puerto por donde la apiv1 escuchara las peticiones
app.listen(app.get('port'),'172.23.11.23',async ()=>{
    try {
        //await sequelize.sync({ force: true });
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log("Listen on port "+app.get('port'));
})