import config from '../../../config/index';

import { Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize(
	config.db.dbName,
	config.db.dbUser,
	config.db.dbPassword,
	{
		host: config.db.dbHost,
		dialect: 'postgres',
	},
);

const checkConnection = async () => {
	try {
		await sequelizeConnection.authenticate();
		console.log('Connection has been established successfully.');
	} catch (e) {
		console.error('Unable to connect to the database:', e);
	}
};
checkConnection();

export default sequelizeConnection;
