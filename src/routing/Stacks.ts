import express from 'express';

export const stack = express.Router();

stack.get('/', (_req, res) => {
    res.send("stack send");
});


