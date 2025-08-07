const express = require('express');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
res.set('Access-Control-Allow-Origin', '*');
res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
if (req.method === 'OPTIONS') return res.sendStatus(204);
next();
});

app.get('/', (req, res) => res.send('Proxy OK'));

app.get('/proxy', (req, res) => {
const ts = encodeURIComponent(req.query.ts || Date.now());
const targetUrl = https://tts.cognitive.microsoft.com/consumer/speech/synthesize/readaloud/edge/v1?trustedclienttoken=1&ts=${ts};

https.get(targetUrl, (upRes) => {
if (upRes.headers['content-type']) res.set('Content-Type', upRes.headers['content-type']);
upRes.pipe(res);
}).on('error', (err) => {
res.status(502).send('Proxy error: ' + err.message);
});
});

app.listen(PORT, () => console.log(Proxy on ${PORT}));

