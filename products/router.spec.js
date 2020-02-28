require('dotenv').config();
const request = require("supertest");
const server = require("../api/server.js");

describe('router', function() {
    describe('environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        });
    });


    // describe('POST /api/employees', function() {
    //     it('should return an object with the new admin', function() {
    //         return request(server).post('/api/employees').send({name: "Phantom"}).then(res => {
    //             expect(res.body.name).toEqual("Phantom");
    //         });
    //     });
    // });

    describe('GET /api/products', function() {
        it('should return a json object', function() {
            return request(server).get('/api/products').then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });
    });

    describe('GET /api/products/:id', function() {
        it('should return an object with the all properties', function() {
            return request(server).get('/api/products/3').then(res => {
                expect(res.body).toEqual({
                    "id": 3,
                    "name": "Apple Charger",
                    "description": "Lightning Apple Charging Cord",
                    "price": 18
                  })
            });
        });
    });

    // describe('DELETE /api/employees/:id', function() {
    //     it('should return {removed: 1}', function() {
    //         return request(server).delete('/api/employees/1').then(res => {
    //             expect(res.body).toEqual({ removed: 1 });
    //         });
    //     });
    // });
});