const router = require("express").Router();

const Employees = require('./model.js');

// routes
router.get('/', (req, res) => {
    Employees.find()
        .then(employees => {
            res.json(employees);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Employees.findById(id)
        .then(employee => {
            res.json(employee);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        });
});

router.post('/', (req, res) => {
    const employeeData = req.body;

    Employees.add(employeeData)
        .then(added => {
            Employees.findById(added[0])
            .then(employee => {
                res.json(employee);
            })
            .catch(({ name, code, message, stack }) => {
                res.status(500).json({ name, code, message, stack });
            });
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Employees.remove(id)
        .then(deleted => {
            res.status(200).json({ removed: deleted })
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        })
})


module.exports = router;