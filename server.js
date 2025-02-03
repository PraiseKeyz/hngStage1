const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());

app.get('/api', (req, res) => {
    try{
        const date = new Date();
        const isoTimestamp = date.toISOString();
        const responseData = {
            email: 'praiseoluwatobilobaadebayo@gmail.com',
            current_datetime: isoTimestamp,
            github_url: 'github.com/PraiseKeyz/stage0'
        };
        res.status(200).json(responseData);
    }
    catch (error) {
        console.error("Error getting data:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});