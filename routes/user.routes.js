import { User } from "../models/user.model.js";
import { userController } from "../controllers/user.controller.js";
import { Router } from "express";
import { verifiToken } from "../middlewares/jwt.middleware.js";

const router = Router();


router.get('/',userController.getUsers);
router.get('/:id',userController.getUserById)
router.post('/create',verifiToken, userController.createUser);
router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)

router.post('/login',userController.userLogin);


export default router;