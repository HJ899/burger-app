const path = require('path');
const express = require('express');
const app = express();
const buildDir = path.join(__dirname, '../', 'build');

const port = process.env.PORT || 3000;

app.use(express.static(buildDir));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
});

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});