import { DataTypes } from "sequelize";
import PostgresSequelize from "../connector/postgres";

const UserSchema = PostgresSequelize.define("customers", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  username: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
  },

  role: {
    type: DataTypes.STRING,
  },
});

UserSchema.sync()
  .then(() => {
    console.log("sync completed");
  })
  .catch((error) => console.log(error));

export default UserSchema;
