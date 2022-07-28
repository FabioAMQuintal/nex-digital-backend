import { Request, Response, NextFunction } from 'express';
import AuthController from '../../controllers/auth/auth';

export default (
	req: Partial<Request>,
	res: Partial<Response>,
	next: NextFunction,
): void => {
	const token = req.headers?.['x-access-token'];

	try {
		const decoded = AuthController.decodeToken(token as string);
		req.decoded = decoded;
		next();
	} catch (e) {
		res.status?.(401).send({ error: e });
	}
};
