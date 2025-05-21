"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.post("/signup", (res, req) => {
    console.log("signup handler");
});
router.post("/signin", (res, req) => {
    console.log("signin handler");
});
router.get("/user", middleware_1.authMiddleWare, (res, req) => {
    console.log("signin handler");
});
exports.userRouter = router;
