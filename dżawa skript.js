import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).send("Brak URL");

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Referer": "https://html5.gamedistribution.com/"
            }
        });

        const body = await response.text();
        res.send(body);
    } catch (err) {
        res.status(500).send("Błąd proxy: " + err);
    }
});

app.listen(3000, () => console.log("Proxy działa na porcie 3000"));
