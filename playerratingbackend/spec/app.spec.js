 //start test via bash runTest.sh
let Request = require('request');

describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {});

    describe("GET /API/teams", () => {
        let data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/API/teams", (err, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(0);
        });
    });

    describe("GET /API/players", () => {
        let data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/API/players", (err, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(0);
        });
    });

    describe("GET /API/ratings", () => {
        let data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/API/ratings", (err, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(0);
        });
    });
});