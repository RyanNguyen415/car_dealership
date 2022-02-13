const pool = require('../database');
const router = require('express').Router();

//get all cars
router.get('/', async(req, res)=>{
    try{
        const vacations = await pool.query("SELECT * FROM car");
console.log(vacations);
res.json(vacations.rows);
    }catch(e){
        console.log(e.message);
    }
})

//get 1 car
router.get('/:id', async(req, res)=> {
    const id = req.params.id;
    try{
        const car = await pool.query('SELECT * FROM car WHERE ID = $1', [id]);
        console.log(car.rows[0]);
        res.json(car.rows[0]);

    }catch(e){
        console.log(e.message);
    }
})
// insert car
router.post('/', async(req, res)=>{
    try{
        const {make, model, year, price, condition} = req.body;
        const newCar = await pool.query('INSERT INTO car (make, model, year, price, condition) VALUES ($1, $2, $3, $4, $5) RETURNING *', [make, model, year, price, condition]);
        console.log(newCar.rows[0]);
        res.json(newCar.rows[0]);

    }catch(e){console.log(e.message)};
})

//delete car by id
router.delete('/:id', async(req,res)=>{
    const id=req.params.id;
    try{
        const car = await pool.query('DELETE FROM car WHERE ID = $1 RETURNING*', [id]);
        console.log(car.rows[0]);
        res.json(car.rows[0]);
    }catch(e){console.log(e.message)}
});

model.exports = router;