const courseTestProperties = {
    id: { type: "integer", readOnly: true },
    course_id: { type: "integer" },
    title: { type: "string" },
    instructions: { type: "string" },
    duration_mins: { type: "integer" },
    max_tries: { type: "integer" },
    created_at: { type: "string", format: "date-time", readOnly: true },
    updated_at: { type: "string", format: "date-time", readOnly: true }
};

swagger = {
  list: {
    description: "Get all course tests in the database",
    summary: "Get all course tests in the database",
    tags: ["coursetest"],
    params: {},
    body: {},
    response: {
      200: {
        description: "Array containing all course tests",
        type: "array",
        items: { type: "object", properties: courseTestProperties }
      }
    }
  },
  get: {
    tags: ["coursetest"],
    description: "Get a course Test from the database",
    summary: "Get a course Test from the database",

    params: { id: { type: "string" } },
    body: {},
    response: {
      200: {
        description: "A course Test",
        type: "object",
        properties: courseTestProperties
      }
    }
  },
  add: {
    tags: ["coursetest"],
    description: "Add a course Test to the database",
    summary: "Add a course Test to the database",

    params: {},
    body: {
      type: "object",
      required: ["course_id", "title", "duration_mins"],
      properties: courseTestProperties
    },
    response: {
      200: {
        description: "A course Test",
        type: "object",
        properties: courseTestProperties
      }
    }
  },
  update: {
    tags: ["coursetest"],
    description: "Update a course Test in the database",
    summary: "Update a course Test in the database",

    params: { id: { type: "string" } },
    body: {
      type: "object",
      required: ["course_id", "title", "duration_mins"],
      properties: courseTestProperties
    },
    response: {
      200: {
        description: "A courseTest",
        type: "object",
        properties: courseTestProperties
      }
    }
  },
  delete: {
    tags: ["coursetest"],
    description: "Delete a course Test from the database",
    summary: "Delete a course Test from the database",

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
  