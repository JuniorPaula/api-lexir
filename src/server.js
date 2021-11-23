import app from './app';

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log(`CTRL + Click to: http://localhost:${port}`);
});
