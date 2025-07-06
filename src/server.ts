
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

let ipnData: any = null;

app.post('/ipn', (req, res) => {
  console.log('Received IPN notification');
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  ipnData = {
    headers: req.headers,
    body: req.body,
  };
  res.status(200).send('OK');
});

app.get('/ipn-data', (req, res) => {
  res.json(ipnData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
