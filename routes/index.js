import  express  from "express";
import { getUsers, Register, Login, Logout, deploy } from "../controller/Users.js"
import { VerifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/userss', VerifyToken, getUsers);
router.post('/userss', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/', deploy);

export default router;