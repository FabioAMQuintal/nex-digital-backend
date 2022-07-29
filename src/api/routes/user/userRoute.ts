import { Router, Request, Response } from 'express';
import { UserController, AuthController } from '../../controllers/index';

const route = Router();

export default (app: Router) => {
	app.use('/user', route);

	route.post('/signup', async (req: Request, res: Response) => {
		const { name, password, email } = req.body;
		try {
			const newEmployer = await UserController.createUser(
				email,
				password,
				name,
			);
			return res
				.status(201)
				.send({ message: `User ${newEmployer.email} has been created` })
				.end();
		} catch (e) {
			return res.status(400).send({ error: e }).end();
		}
	});

	route.post('/signin', async (req: Request, res: Response) => {
		const { email, password } = req.body;
		try {
			const isTokenValid = await AuthController.authenticate(email, password);
			if (isTokenValid) {
				return res
					.status(200)
					.send({ auth: true, JWTtoken: isTokenValid, user: email })
					.end();
			}
		} catch (e) {
			return res.status(401).send({ auth: false, error: e }).end();
		}
	});
};
