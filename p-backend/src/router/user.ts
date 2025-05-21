import { Router } from "express";
import { authMiddleWare } from "../middleware";

const router = Router();

router.post("/signup", (res, req)=> {
    console.log("signup handler");
})

router.post("/signin", (res, req)=> {
    console.log("signin handler");
})

router.get("/user", authMiddleWare, (res, req)=> {
    console.log("signin handler");
})


export const userRouter = router;