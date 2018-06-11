import express from 'express';
import config from '../config';
import initializeDb from '../db';
import middleware from '../middleware';
import foodtruck from '../controller/foodtruck';
import account from '../controller/account';
import car from '../controller/car';
import carAccount from '../controller/carAccount';

let router = express();

// connect to db
initializeDb(db => {

  // internal middleware
  router.use(middleware({ config, db }));

  // api routes v1 (/v1)
  router.use('/foodtruck', foodtruck({ config, db }));
  router.use('/account', account({ config, db }));
  router.use('/car', car({ config, db }));
  router.use('/carAccount', carAccount({ config,db }));
});

export default router;
