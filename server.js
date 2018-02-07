const { createServer } = require("http");
const next = require("next");
const routes = require("./routes");

const PORT = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});

app.prepare().then(() => {
  createServer(handler).listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`)
  );
});
