import express from "express";

const router = express.Router();

router.get("/inicio", (req, res) => {
    res.send("Hello World");
});



export default router