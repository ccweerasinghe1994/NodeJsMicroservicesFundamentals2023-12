import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import vehicleRouter from "./routes/vehicles/routes";
import { swaggerOptions } from "./swagger/swagger.config";

const app = express();

app.use(express.json());
// Generate Swagger documentation using swagger-jsdoc
const swaggerSpec = swaggerJsDoc(swaggerOptions);

// Serve Swagger documentation at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/vehicles", vehicleRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
