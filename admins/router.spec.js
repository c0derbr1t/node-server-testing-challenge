require('dotenv').config();
const request = require("supertest");
const server = require("../api/server.js");

describe('router', function() {
    describe('environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        });
    });


    // describe('POST /api/admins', function() {
    //     it('should return an object with the new admin', function() {
    //         return request(server).post('/api/admins').send({name: "Phantom"}).then(res => {
    //             expect(res.body.name).toEqual("Phantom");
    //         });
    //     });
    // });

    describe('GET /api/admins', function() {
        it('should return a json object', function() {
            return request(server).get('/api/admins').then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });
    });

    describe('GET /api/admins/:id', function() {
        it('should return an object with the id and name', function() {
            return request(server).get('/api/admins/1').then(res => {
                expect(res.body).toEqual({ id: 1, name: 'Brit' })
            });
        });
    });

    // describe('DELETE /api/admins/:id', function() {
    //     it('should return {removed: 1}', function() {
    //         return request(server).delete('/api/admins/2').then(res => {
    //             expect(res.body).toEqual({ removed: 1 });
    //         });
    //     });
    // });
});





/*
 await request(server)
    .post("/api/auth/register")
    .send({username: "farmerJohn", password: "cowJumpsOverMoon");
*/