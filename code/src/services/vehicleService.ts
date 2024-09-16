import {RequestHandler} from "express";
import DB from "../data/seedData";
import Vehicle from "../models/VehicleModel";

// Define the interface for request parameters and query parameters
interface Params {
    id: string; // Route parameter
}

interface Query {
    type?: string; // Optional query parameter
}

type TErrorResponse = { message: string };

type TResponseBody = Vehicle[] | TErrorResponse;
type TRequestBodyGetAllVehicles = Vehicle | TErrorResponse;

const getAllVehicles: RequestHandler<
    Params,
    TResponseBody,
    any,
    Query
> = async (_req, res) => {
    try {
        const getData = DB;
        return res.json(getData);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
        res.status(500).send({message: "Internal Server Error"});
    }

    return res.json(DB);
};


const getVehicleById: RequestHandler<Params, TRequestBodyGetAllVehicles, any, any> = async (req, res) => {

    try {
        const {id} = req.params;

        const findIndex = DB.findIndex((vehicle) => vehicle.id === id);

        if (findIndex === -1) {
            return res.status(404).send({message: "Vehicle not found"});
        }

        const vehicle = DB.find((vehicle) => vehicle.id === id);

        return res.json(vehicle);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
        res.status(500).send({message: "Internal Server Error"});
    }

}

type updateVehicleByIdResponseBody = void | TErrorResponse;

const updateVehicleById: RequestHandler<Params, updateVehicleByIdResponseBody, Omit<Vehicle, 'id'>, any> = async (req, res) => {

    try {
        const {id} = req.params;
        const {model, year, registerNumber, rentalPrice, make} = req.body;

        const findIndex = DB.findIndex((vehicle) => vehicle.id === id);

        if (findIndex === -1) {
            return res.status(404).send({message: "Vehicle not found"});
        }

        DB[findIndex] = {
            id,
            model,
            year,
            registerNumber,
            rentalPrice,
            make
        };

        return res.status(204).send();

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
        res.status(500).send({message: "Internal Server Error"});
    }
}

type deleteVehicleByIdResponseBody = void | TErrorResponse;
const deleteVehicleById: RequestHandler<Params, deleteVehicleByIdResponseBody, any, any> = async (req, res) => {

    try {
        const {id} = req.params;

        const findIndex = DB.findIndex((vehicle) => vehicle.id === id);

        if (findIndex === -1) {
            return res.status(404).send({message: "Vehicle not found"});
        }

        DB.splice(findIndex, 1);

        return res.status(204).send();

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({message: error.message});
        }
        res.status(500).send({message: "Internal Server Error"});
    }


}

export {getAllVehicles, getVehicleById, updateVehicleById, deleteVehicleById};
