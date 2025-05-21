"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zapRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.post("/", middleware_1.authMiddleWare, (res, req) => {
    console.log("create a zap");
});
router.get("/", middleware_1.authMiddleWare, (res, req) => {
    console.log("zaps handler");
});
router.get("/:zapid", middleware_1.authMiddleWare, (res, req) => {
    console.log("signin handler");
});
exports.zapRouter = router;
