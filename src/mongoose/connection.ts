import mongoose from 'mongoose';
import mongoConfig from '../config/mongo';

const mongoCredentials = mongoConfig.username
  ? `${mongoConfig.username}:${mongoConfig.password}`
  : '';

// console.log(
//   `mongodb+srv://${mongoCredentials}@${mongoConfig.cluster}.ngxpu.mongodb.net/${mongoConfig.database}?retryWrites=true&w=majority`,
// );

mongoose.connect(
  `mongodb+srv://${mongoCredentials}@${mongoConfig.cluster}.ge6mz.mongodb.net/${mongoConfig.database}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
