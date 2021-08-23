import { stack } from './routing/Stacks';
import express from 'express';


const app = express();

app.use('/stack', stack);

app.get('/', (_req, res) => {
    res.send("hellll");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("server running");

});