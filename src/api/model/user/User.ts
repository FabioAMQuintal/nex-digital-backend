import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../sequelize/sequelize'

import { UserInput, IUser } from '../../../types/user'


class User extends Model<IUser, UserInput> implements IUser {
    public id!: number
    public name!: string
    public email!: string
    public password!: string
}
  

User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  }, {
    modelName: 'users',
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })
  
  export default User;
