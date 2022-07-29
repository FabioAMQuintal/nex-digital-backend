import { Router } from 'express';
import { userRoute } from './routes/index';


export default () => {
	const app = Router();
	userRoute(app)
	return app;
};
