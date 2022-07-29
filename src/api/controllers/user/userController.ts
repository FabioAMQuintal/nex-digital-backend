import bcrypt from 'bcrypt';

import { DAL } from '../../model/index';

class UserController {
	async createUser(email: string, passwordDumb: string, name: string) {
		if (!(name && email && passwordDumb)) {
			return Promise.reject('Empty value for email or password');
		}
		const salt = await bcrypt.genSalt(10);
		const password = await bcrypt.hash(passwordDumb, salt);
		const newUser = await DAL.create({ name, password, email });
		return newUser;
	}
}

export default new UserController();
