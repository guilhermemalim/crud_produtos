interface IMongoConfig {
  username?: string;
  password?: string;
  database?: string;
  cluster?: string;
}

export default {
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PASS,
  database: process.env.MONGO_DATABASE,
  cluster: process.env.MONGO_CLUSTER,
} as IMongoConfig;
