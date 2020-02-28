require('dotenv').config();
const request = require("supertest");
const server = require("../api/server.js");

describe('server', function() {
    describe('environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        });
    });

    describe('GET /', function() {
        it('should return 200 OK', function() {
            return request(server).get('/').then(res => {
                expect(res.status).toBe(200);
            });
        });

        it('should return Running! as the value', function() {
            return request(server).get('/').then(res => {
                expect(res.body.api).toBe('Running!');
            });
        });
    });
});