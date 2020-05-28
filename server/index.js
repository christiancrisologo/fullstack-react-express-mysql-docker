const server = require("./src/server");
const port = process.env.PORT || 4000;
server.listen(port, () => {
  `Listening on port: ${port} wait for the development server to be up...`;
});
