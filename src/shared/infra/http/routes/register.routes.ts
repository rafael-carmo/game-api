import { Router } from 'express';

import { registerGameFactory } from '../../../../modules/games/useCases/registerGame/RegisterGameFactory';

const registerRoutes = Router();
const registerGameController = registerGameFactory();
registerRoutes.post('/register', registerGameController.handle);

export { registerRoutes };
