import mongoose from 'mongoose';
import config from '../config';

export default function loadDbConnection() {
  mongoose.connect(config.database.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection is open to ', config.database.dbUrl);
  });
  mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection has occurred ' + err + ' error');
  });
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection is disconnected');
  });
}
