import User from '../user/User'

import { UserInput, UserOuput } from '../../../types/user';

class DAL {
    
     async create(payload: UserInput): Promise<UserOuput>{ 
        try {
            const user = await User.create(payload)
            return Promise.resolve(user);
        } catch (e: any) {
            return Promise.reject(e.errors[0].message);
        }
    }

    async findUser(email: string){
        try{
            const user = await User.findOne({
                where: {
                    email
                }
            })
            return Promise.resolve(user)
        } catch (e: any){
            return Promise.reject(e.errors[0].message);
        }
    }

}

export default new DAL();