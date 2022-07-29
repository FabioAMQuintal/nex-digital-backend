import { Router } from 'express';
import { userRoute, productRoute } from './routes/index';

export default () => {
	const app = Router();
	userRoute(app);
	productRoute(app);
	return app;
};
