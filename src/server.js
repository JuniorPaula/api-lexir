import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log(`CTRL + Click to: http://localhost:${port}`);
});
