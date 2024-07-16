import express from 'express';

export const getProducts = async (request: express.Request, response: express.Response) => {
    response.json({message: "Getting products..."});
}