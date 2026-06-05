import express from 'express';
import { userLogin, userSignup } from './1-controller.js';
const router=express();
router.get('/login',userLogin);
router.get("/signup",userSignup);
export default router;