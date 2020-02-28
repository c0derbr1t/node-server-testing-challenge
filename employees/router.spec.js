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

    describe('GET /api/employees', function() {
        it('should return a json object', function() {
            return request(server).get('/api/employees').then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });
    });

    describe('GET /api/employees/:id', function() {
        it('should return an object with the id and name', function() {
            return request(server).get('/api/employees/2').then(res => {
                expect(res.body).toEqual({ id: 2, name: 'Phantom' })
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