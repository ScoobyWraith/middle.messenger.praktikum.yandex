import express from 'express'

const app = express();
const PORT = 3000;

app.use(express.static('./dist/'));

app.listen(PORT, function () {
    console.log(`Server was running on http://localhost:${PORT}/`);
});
