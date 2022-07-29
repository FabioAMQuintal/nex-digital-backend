import { Router, Request, Response } from 'express';
import {UserController} from '../../controllers/index'

const route = Router();

export default (app: Router) => {
	app.use('/user', route);

	route.post('/signup', async (req: Request, res: Response) => {
		const { name, password, email } = req.body;
		try {
			const newEmployer = await UserController.createUser(email, password, name);
			return res.send({ message: `User ${newEmployer.email} has been created` }).status(201).end();
		} catch (e) {
			return res.send({ error: e }).status(400).end();
		}
	});

};