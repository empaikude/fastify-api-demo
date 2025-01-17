const carProperties = {
  _id: { type: "string" },
  name: { type: "string" },
  brand: { type: "string" },
  price: { type: "string" },
  age: { type: "number" },
  services: {
    type: "object",
    properties: { serviceDate: { type: "string", format: "date" } }
  }
};

swagger = {
  getCars: {
    description: "Get all cars in the database",

    summary: "Get all cars in the database",
    params: {},
    body: {},
    response: {
      200: {
        description: "Array containing all cars",
        type: "array",
        items: { type: "object", properties: carProperties }
      }
    }
  },
  getSingleCar: {
    description: "Get a cars from the database",

    summary: "Get a car from the database",

    params: { id: { type: "string" } },
    body: {},
    response: {
      200: {
        description: "A car",
        type: "object",
        properties: carProperties
      }
    }
  },
  addSingleCar: {
    description: "Add a cars from the database",

    summary: "Add a car from the database",

    params: {},
    body: {
      type: "object",
      required: ["name", "brand", "age"],
      properties: carProperties
    },
    response: {
      200: {
        description: "A car",
        type: "object",
        properties: carProperties
      }
    }
  }
};

module.exports = swagger;
