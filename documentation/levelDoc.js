const levelProperties = {
    id: { type: "integer", readOnly: true },
    name: { type: "string" },
    created_at: { type: "string", format: "date-time", readOnly: true },
    updated_at: { type: "string", format: "date-time", readOnly: true }
};

swagger = {
  list: {
    description: "Get all levels in the database",
    summary: "Get all levels in the database",
    tags: ["level"],
    params: {},
    body: {},
    response: {
      200: {
        description: "Array containing all levels",
        type: "array",
        items: { type: "object", properties: levelProperties }
      }
    }
  },
  get: {
    tags: ["level"],
    description: "Get a level from the database",
    summary: "Get a level from the database",

    params: { id: { type: "string" } },
    body: {},
    response: {
      200: {
        description: "A level",
        type: "object",
        properties: levelProperties
      }
    }
  },
  add: {
    tags: ["level"],
    description: "Add a level to the database",
    summary: "Add a level to the database",

    params: {},
    body: {
      type: "object",
      required: ["name"],
      properties: levelProperties
    },
    response: {
      200: {
        description: "A level",
        type: "object",
        properties: levelProperties
      }
    }
  },
  update: {
    tags: ["level"],
    description: "Update a level in the database",
    summary: "Update a level in the database",

    params: { id: { type: "string" } },
    body: {
      type: "object",
      required: ["name"],
      properties: levelProperties    
    },
    response: {
      200: {
        description: "A level",
        type: "object",
        properties: levelProperties
      }
    }
  },
  delete: {
    tags: ["level"],
    description: "Delete a level from the database",
    summary: "Delete a level from the database",

    params: { id: { type: "string" } },
    body: {},
    response: {
      200: {
        description: "",
        type: "object",
      }
    }
  }
};

module.exports = swagger;
  