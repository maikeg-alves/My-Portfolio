const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('./dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './dist/index.html'))    
    })
}

app.listen(PORT, () => {
    console.log(`server rodando na porta ${PORT} ✅🚪`);
})