import dotenv from 'dotenv';

dotenv.config();

export default {
	api: {
		prefix: '/api',
	},
	auth: {
		key: process.env.SECRET,
		tokenExpiresIn: process.env.EXPIREIN,
	},
	port: process.env.PORT,
};
