const institutionProperties = {
    id: { type: "integer", readOnly: true },
    code: { type: "string" },
    name: { type: "string" },
    address: { type: "string" },
    email: { type: "string" },
    phone: { type: "string" },
    motto: { type: "string" },
    website: { type: "string" },
    twitter: { type: "string" },
    facebook: { type: "string" },
    youtube: { type: "string" },
    description: { type: "string" },
    created_at: { type: "string", format: "date-time", readOnly: true },
    updated_at: { type: "string", format: "date-time", readOnly: true }
};

  swagger = {
    list: {
        description: "Get all institutions in the database",
        summary: "Get all institutions in the database",
        tags: ["institution"],
        params: {},
        body: {},
        response: {
        200: {
            description: "Array containing all institutions",
            type: "array",
            items: { type: "object", properties: institutionProperties }
        }
        }
    },
    get: {
      tags: ["institution"],
      description: "Get an institution from the database",
      summary: "Get an institution from the database",
  
      params: { id: { type: "string" } },
      body: {},
      response: {
        200: {
          description: "An institution",
          type: "object",
          properties: institutionProperties
        }
      }
    },
    add: {
      tags: ["institution"],
      description: "Add an institution to the database",
      summary: "Add an institution to the database",
  
      params: {},
      body: {
        type: "object",
        required: ["code", "name", "address", "email", "phone"],
        properties: institutionProperties
      },
      response: {
        200: {
          description: "An institution",
          type: "object",
          properties: institutionProperties
        }
      }
    },
    update: {
      tags: ["institution"],
      description: "Update an institution in the database",
      summary: "Update an institution in the database",
  
      params: { id: { type: "string" } },
      body: {
        type: "object",
        required: ["code", "name", "address", "email", "phone"],
        properties: institutionProperties    
      },
      response: {
        200: {
          description: "An institution",
          type: "object",
          properties: institutionProperties
        }
      }
    },
    delete: {
      tags: ["institution"],
      description: "Delete an institution from the database",
      summary: "Delete an institution from the database",
  
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
  