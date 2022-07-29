import { Router, Request, Response } from 'express';
import { UserController, AuthController } from '../../controllers/index'

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

	route.post('/signin', async (req: Request, res: Response) => {
		const { email, password } = req.body;
		try {
			const isTokenValid = await AuthController.authenticate(email, password);
			if (isTokenValid) {
				return res
					.send({ auth: true, JWTtoken: isTokenValid, user: email })
					.status(200)
					.end();
			}
		} catch (e) {
			return res.send({ auth: false, error: e }).status(401).end();
		}
	});

};