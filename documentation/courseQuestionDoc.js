const courseQuestionProperties = {
    id: { type: "integer", readOnly: true },
    course_id: { type: "integer" },
    question: { type: "string" },
    order: { type: "integer" },
    media_src: { type: "string" },
    media_type: { type: "string" },
    marks: { type: "integer" },
    created_at: { type: "string", format: "date-time", readOnly: true },
    updated_at: { type: "string", format: "date-time", readOnly: true }
};

swagger = {
  list: {
    description: "Get all course questions in the database",
    summary: "Get all course questions in the database",
    tags: ["coursequestion"],
    params: {},
    body: {},
    response: {
      200: {
        description: "Array containing all course questions",
        type: "array",
        items: { type: "object", properties: courseQuestionProperties }
      }
    }
  },
  get: {
    tags: ["coursequestion"],
    description: "Get a course question from the database",
    summary: "Get a course question from the database",

    params: { id: { type: "string" } },
    body: {},
    response: {
      200: {
        description: "A course Question",
        type: "object",
        properties: courseQuestionProperties
      }
    }
  },
  add: {
    tags: ["coursequestion"],
    description: "Add a course Question to the database",
    summary: "Add a course Question to the database",

    params: {},
    body: {
      type: "object",
      required: ["course_id", "name", "order"],
      properties: courseQuestionProperties
    },
    response: {
      200: {
        description: "A course Question",
        type: "object",
        properties: courseQuestionProperties
      }
    }
  },
  update: {
    tags: ["coursequestion"],
    description: "Update a course Question in the database",
    summary: "Update a course Question in the database",

    params: { id: { type: "string" } },
    body: {
      type: "object",
      required: ["course_id", "name", "order"],
      properties: courseQuestionProperties    
    },
    response: {
      200: {
        description: "A courseQuestion",
        type: "object",
        properties: courseQuestionProperties
      }
    }
  },
  delete: {
    tags: ["coursequestion"],
    description: "Delete a course Question from the database",
    summary: "Delete a course Question from the database",

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
  