import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DAL } from '../../model/index'
import config from '../../../config';

class Auth {

	private generateToken(payload: object): string {
		return jwt.sign(payload, config.auth.key as jwt.Secret, {
			expiresIn: config.auth.tokenExpiresIn,
		});
	}

	decodeToken(token: string) {
		return jwt.verify(token, config.auth.key as jwt.Secret);
	}

	
	async authenticate(email: string, password: string) {
		if (!(email && password)) {
			return Promise.reject('Empty value for email or passwoaaaaaaaaaaard');
		}
		try {
			const user = await DAL.findUser(email);
			if(!user){
				return Promise.reject("User not found");
			}
			const pass = user.password
			const isEqual = await bcrypt.compare(password, pass);
			if (!isEqual) {
				return Promise.reject("Credentials doesn't match");
			}
			
			const token = this.generateToken({
				email: user.email,
				name: user.name,
				id: user.id,
			});
			return token;
		} catch (e) {
			return e;
		}
	}
}

export default new Auth();
