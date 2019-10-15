const courseProperties = {
    id: { type: "integer", readOnly: true },
    programme_id: { type: "integer" },
    code: { type: "string" },
    name: { type: "string" },
    units: { type: "integer" },
    description: { type: "string" },
    created_at: { type: "string", format: "date-time", readOnly: true },
    updated_at: { type: "string", format: "date-time", readOnly: true }
};

swagger = {
  list: {
    description: "Get all courses in the database",
    summary: "Get all courses in the database",
    tags: ["course"],
    params: {},
    body: {},
    response: {
      200: {
        description: "Array containing all courses",
        type: "array",
        items: { type: "object", properties: courseProperties }
      }
    }
  },
  get: {
    tags: ["course"],
    description: "Get a course from the database",
    summary: "Get a course from the database",

    params: { id: { type: "string" } },
    body: {},
    response: {
      200: {
        description: "A course",
        type: "object",
        properties: courseProperties
      }
    }
  },
  add: {
    tags: ["course"],
    description: "Add a course to the database",
    summary: "Add a course to the database",

    params: {},
    body: {
      type: "object",
      required: ["programme_id", "code", "name", "units"],
      properties: courseProperties
    },
    response: {
      200: {
        description: "A course",
        type: "object",
        properties: courseProperties
      }
    }
  },
  update: {
    tags: ["course"],
    description: "Update a course in the database",
    summary: "Update a course in the database",

    params: { id: { type: "string" } },
    body: {
      type: "object",
      required: ["programme_id", "code", "name", "units"],
      properties: courseProperties    
    },
    response: {
      200: {
        description: "A course",
        type: "object",
        properties: courseProperties
      }
    }
  },
  delete: {
    tags: ["course"],
    description: "Delete a course from the database",
    summary: "Delete a course from the database",

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
  