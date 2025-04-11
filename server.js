const http = require("http");

const httpServer = http.createServer((request, response) => {
  const url = request.url;
  console.log(`hot this url ${url}`);
  switch (url) {
    case "/":
      response.end("no path given");

      break;
    case "/home":
      response.end("home component");

      break;
    case "/about":
      response.end("about component");

      break;

    default:
        response.end('invalid url')
      break;
  }
});

httpServer.listen(8081, () => console.log("server started on port 8081"));
