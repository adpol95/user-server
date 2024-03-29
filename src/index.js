import express from 'express';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';

const app = express();
const PORT = 5000;

dbConnect(); //Mongoose
logger(app); // Morgan
parseResponse(app);
cors(app); // Не сакционированный переход
routes(app);
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Examples for host ${PORT}`);
});
