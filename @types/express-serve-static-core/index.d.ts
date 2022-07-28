import { IDecodedUser } from './src/types/decodeduser';

declare global {
	namespace Express {
		interface Request {
			decoded?: IDecodedUser;
		}
	}
}
