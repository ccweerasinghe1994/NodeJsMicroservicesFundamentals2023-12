import {Router} from "express";
import {deleteVehicleById, getAllVehicles, getVehicleById, updateVehicleById} from "../../services/vehicleService";

const vehicleRouter = Router();

/**
 * @swagger
 * /vehicles:
 *   get:
 *     summary: Retrieve a list of vehicles
 *     description: Retrieve a list of vehicles from the database
 *     responses:
 *       200:
 *         description: A list of vehicles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The vehicle ID
 *                   type:
 *                     type: string
 *                     description: The type of vehicle
 *                   model:
 *                     type: string
 *                     description: The model of the vehicle
 *                   year:
 *                     type: integer
 *                     description: The year the vehicle was manufactured
 *                   brand:
 *                     type: string
 *                     description: The brand of the vehicle
 */
vehicleRouter.get("/", getAllVehicles);

/**
 * @swagger
 * /vehicles/{id}:
 *   get:
 *     summary: Retrieve a vehicle by ID
 *     description: Retrieve a specific vehicle from the database using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The vehicle ID
 *     responses:
 *       200:
 *         description: A vehicle object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The vehicle ID
 *                 type:
 *                   type: string
 *                   description: The type of vehicle
 *                 model:
 *                   type: string
 *                   description: The model of the vehicle
 *                 year:
 *                   type: integer
 *                   description: The year the vehicle was manufactured
 *                 brand:
 *                   type: string
 *                   description: The brand of the vehicle
 */
vehicleRouter.get("/:id", getVehicleById);


/**
 * @swagger
 * /vehicles/{id}:
 *   put:
 *     summary: Update a vehicle by ID
 *     description: Update a specific vehicle from the database using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The vehicle ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: The type of vehicle
 *               model:
 *                 type: string
 *                 description: The model of the vehicle
 *               year:
 *                 type: integer
 *                 description: The year the vehicle was manufactured
 *               brand:
 *                 type: string
 *                 description: The brand of the vehicle
 *     responses:
 *       200:
 *         description: Vehicle updated successfully
 *       404:
 *         description: Vehicle not found
 */
vehicleRouter.put("/:id", updateVehicleById)


/**
 * @swagger
 * /vehicles/{id}:
 *   delete:
 *     summary: Delete a vehicle by ID
 *     description: Delete a specific vehicle from the database using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The vehicle ID
 *     responses:
 *       200:
 *         description: Vehicle deleted successfully
 *       404:
 *         description: Vehicle not found
 */
vehicleRouter.delete("/:id", deleteVehicleById)


export default vehicleRouter;
