import dotenv from 'dotenv';
import { Dialect } from 'sequelize';

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
	db: {
		dbName: process.env.DB_NAME as string,
		dbUser: process.env.DB_USER as string,
		dbHost: process.env.DB_HOST as string, 
		dbDriver: process.env.DB_DRIVER as Dialect, 
		dbPassword: process.env.DB_PASSWORD as string
	}
};
