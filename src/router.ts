import { Router } from 'express';

const router = Router();

// Products
router.get('/product', (req, res) => {});
router.get('/product/:id', (req, res) => {});
router.put('/product/:id', (req, res) => {});
router.post('/product', (req, res) => {});
router.delete('/product/:id', (req, res) => {});

// Update
router.get('/update', (req, res) => {});
router.get('/update/:id', (req, res) => {});
router.put('/update/:id', (req, res) => {});
router.post('/update', (req, res) => {});
router.delete('/update/:id', (req, res) => {});

// Update Points
router.get('/updatepoint', (req, res) => {});
router.get('/updatepoint/:id', (req, res) => {});
router.put('/updatepoint/:id', (req, res) => {});
router.post('/updatepoint', (req, res) => {});
router.delete('/updatepoint/:id', (req, res) => {});
