import { createServer, Model } from "miragejs";

createServer({
  models: {
    coffee: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/coffees", (schema, request) => {
      return schema.coffees.all();
    }),
      this.get("/coffees/:id", (schema, request) => {
        let id = request.params.id;
        return schema.coffees.find(id);
      });
    this.post("/coffees", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.coffees.create(attrs);
    });
  },

  seeds(server) {
    server.create("coffee", { name: "Inception", year: 2010 });
    server.create("coffee", { name: "Interstellar", year: 2014 });
    server.create("coffee", { name: "Dunkirk", year: 2017 });
  },
});
