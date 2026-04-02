import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export const setRoutes = (app) => {
    app.use('/api', router);
    router.get('/', indexController.getHome);
    // Add more routes as needed
};