import express from 'express'

const app = express()
const port = process.env.PORT || 3000;

app.get('/L', (req, res) => {
  console.log(`${req.ip} is asking for Drink`);
  console.log("Some Changes");
  res.send('Here is your Drinks')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
