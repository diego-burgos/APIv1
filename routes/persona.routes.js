import { personaController } from "../controllers/persona.controller.js";
import { Router } from "express";
import { verifiToken } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get('/',verifiToken,personaController.getPersonas)
router.get('/:id',verifiToken,personaController.getPersonaById)
router.post('/create',verifiToken, personaController.createPersona)
router.put('/:id',verifiToken,personaController.updatePersona)
router.delete('/:id',verifiToken,personaController.deletePersona)



export default router;
