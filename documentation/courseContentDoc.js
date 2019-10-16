const courseContentProperties = {
    id: { type: "integer", readOnly: true },
    course_lesson_id: { type: "integer" },
    title: { type: "string" },
    content_type: { type: "string" },
    text: { type: "string" },
    src: { type: "string" },
    order: { type: "integer" },
    created_at: { type: "string", format: "date-time", readOnly: true },
    updated_at: { type: "string", format: "date-time", readOnly: true }
};

swagger = {
  list: {
    description: "Get all course content in the database",
    summary: "Get all course content in the database",
    tags: ["coursecontent"],
    params: {},
    response: {
      200: {
        description: "Array containing all course content",
        type: "array",
        items: { type: "object", properties: courseContentProperties }
      }
    }
  },
  get: {
    tags: ["coursecontent"],
    description: "Get a course Content from the database",
    summary: "Get a course Content from the database",

    params: { id: { type: "string" } },
    response: {
      200: {
        description: "A course Content",
        type: "object",
        properties: courseContentProperties
      }
    }
  },
  add: {
    tags: ["coursecontent"],
    description: "Add a course Content to the database",
    summary: "Add a course Content to the database",

    params: {},
    body: {
      type: "object",
      required: ["course_lesson_id", "title", "content_type", "order"],
      properties: courseContentProperties
    },
    response: {
      200: {
        description: "A course Content",
        type: "object",
        properties: courseContentProperties
      }
    }
  },
  update: {
    tags: ["coursecontent"],
    description: "Update a course Content in the database",
    summary: "Update a course Content in the database",

    params: { id: { type: "string" } },
    body: {
      type: "object",
      required: ["course_lesson_id", "title", "content_type", "order"],
      properties: courseContentProperties    
    },
    response: {
      200: {
        description: "A courseContent",
        type: "object",
        properties: courseContentProperties
      }
    }
  },
  delete: {
    tags: ["coursecontent"],
    description: "Delete a course Content from the database",
    summary: "Delete a course Content from the database",

    params: { id: { type: "string" } },
    response: {
      200: {
        description: "",
        type: "object",
      }
    }
  }
};

module.exports = swagger;
  