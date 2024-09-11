import express from "express"
import { getUsers, Login, Logout, Register } from "../controllers/UserController.js"
import { VerifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js"

const router = express.Router()

router.get('/users', VerifyToken, getUsers)
router.post('/users', Register)
router.post('/login', Login)
router.delete('/logout', Logout)
router.get('/token', refreshToken)

export default router