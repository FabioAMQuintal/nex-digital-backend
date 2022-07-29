import { Router, Request, Response } from 'express';
import { AuthMiddleware } from '../../middlewares';
import { ProductsController } from '../../controllers/index';

const route = Router();

export default (app: Router) => {
    app.use('/products', route);

    route.get('/', AuthMiddleware, async (req: Request, res: Response) => {
        const random = ProductsController.randomCars()
        return res.send({ random }).status(201).end();
    })

};