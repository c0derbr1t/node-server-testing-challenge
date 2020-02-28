const router = require("express").Router();

const Admins = require('./model.js');

// routes
router.get('/', (req, res) => {
    Admins.find()
        .then(admins => {
            res.status(200).json(admins);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Admins.findById(id)
        .then(admin => {
            res.json(admin);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        });
});

router.post('/', (req, res) => {
    const adminData = req.body;

    Admins.add(adminData)
        .then(added => {
            Admins.findById(added[0])
                .then(admin => {
                    res.json(admin);
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

    Admins.remove(id)
        .then(deleted => {
            res.status(200).json({ removed: deleted })
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        })
})

module.exports = router;