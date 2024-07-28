import express from 'express';
import { getPass, createPass, updatePass, deletePass } from '../controllers/passwords.js';

const router = express.Router();

router.get('/', getPass);
router.post('/', createPass);
router.patch('/:id', updatePass);
router.delete('/:id', deletePass);

export default router;