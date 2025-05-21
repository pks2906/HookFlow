import { Router } from "express";
import { authMiddleWare } from "../middleware";

const router = Router();

router.post("/", authMiddleWare, (res, req)=> {
    console.log("create a zap");
})


router.get("/", authMiddleWare, (res, req)=> {
    console.log("zaps handler");
})


router.get("/:zapid", authMiddleWare, (res, req)=> {
    console.log("signin handler");
})


export const zapRouter = router; 