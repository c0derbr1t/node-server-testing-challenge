const router = require("express").Router();

const Products = require('./model.js');

// routes
router.get('/', (req, res) => {
    Products.find()
        .then(products => {
            res.json(products);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Products.findById(id)
        .then(product => {
            res.json(product);
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        });
});

router.post('/', (req, res) => {
    const productData = req.body;

    Products.add(productData)
        .then(added => {
            Products.findById(added[0])
            .then(product => {
                res.json(product);
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

    Products.remove(id)
        .then(deleted => {
            res.status(200).json({ removed: deleted })
        })
        .catch(({ name, code, message, stack }) => {
            res.status(500).json({ name, code, message, stack });
        })
})


module.exports = router;