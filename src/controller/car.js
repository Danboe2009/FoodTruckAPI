import mongoose from 'mongoose';
import { Router } from 'express';
import Car from '../model/car';
import CarAccount from '../model/carAccount';
import bodyParser from 'body-parser';
import passport from 'passport';

import { authenticate } from '../middleware/authMiddleware';

export default({ config, db }) => {
  let api = Router();

  return api;
}
