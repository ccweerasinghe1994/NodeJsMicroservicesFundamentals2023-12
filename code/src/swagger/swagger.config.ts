import { Options } from "swagger-jsdoc";

// Define the basic information about the API
export const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "A simple CRUD API application with Swagger documentation",
      contact: {
        name: "ccweerasinghe",
        url: "http://localhost:3000",
        email: "ccweerasinghe1994@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000", // URL of the API
      },
    ],
  },
  apis: ["./src/routes/vehicles/*.ts"], // Define the paths to your route files where you will document the APIs
};

