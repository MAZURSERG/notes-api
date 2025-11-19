const swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "Notes API",
      version: "1.0.0",
      description: "Simple Notes API built with Node.js, TypeScript and MongoDB"
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Local server"
      }
    ],
    paths: {
      "/health": {
        get: {
          summary: "Health check",
          responses: {
            "200": {
              description: "Server is healthy"
            }
          }
        }
      },
      "/api/notes": {
        get: {
          summary: "Get all notes",
          responses: {
            "200": {
              description: "List of notes"
            }
          }
        },
        post: {
          summary: "Create a note",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateNoteInput"
                }
              }
            }
          },
          responses: {
            "201": {
              description: "Note created"
            },
            "400": {
              description: "Validation error"
            }
          }
        }
      },
      "/api/notes/{id}": {
        get: {
          summary: "Get note by id",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: { type: "string" }
            }
          ],
          responses: {
            "200": { description: "Note found" },
            "404": { description: "Note not found" }
          }
        },
        put: {
          summary: "Update note",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: { type: "string" }
            }
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateNoteInput"
                }
              }
            }
          },
          responses: {
            "200": { description: "Note updated" },
            "404": { description: "Note not found" }
          }
        },
        delete: {
          summary: "Delete note",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: { type: "string" }
            }
          ],
          responses: {
            "204": { description: "Note deleted" },
            "404": { description: "Note not found" }
          }
        }
      }
    },
    components: {
      schemas: {
        CreateNoteInput: {
          type: "object",
          required: ["title", "content"],
          properties: {
            title: { type: "string", example: "My note" },
            content: { type: "string", example: "Some text" }
          }
        },
        UpdateNoteInput: {
          type: "object",
          properties: {
            title: { type: "string", example: "Updated title" },
            content: { type: "string", example: "Updated text" }
          }
        }
      }
    }
  };
  
  module.exports = swaggerDocument;
  export {};
  