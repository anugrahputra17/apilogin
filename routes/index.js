import  express  from "express";
import { getUsers, Register, Login, Logout, deploy } from "../controller/Users.js"
import { VerifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/users', VerifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/coba', deploy);

export default router;