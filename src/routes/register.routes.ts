import { Router } from 'express';

import { registerGameFactory } from '../useCases/RegisterGameFactory';

const registerRoutes = Router();
const registerGameController = registerGameFactory();
registerRoutes.post('/register', registerGameController.handle);

export { registerRoutes };
