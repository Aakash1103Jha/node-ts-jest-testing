import supertest from "supertest";
import app from "../app";
import connection from "../index";

afterAll(() => {
    connection.close();
});

describe("Tests root api endpoint /", () => {
    test("Tests the GET / endpoint", async () => {
        const res = await supertest.agent(app).get("/");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("Welcome");
        expect(res.header).toHaveProperty("content-type", "application/json; charset=utf-8");
    });
    test("Tests the POST / endpoint", async () => {
        const data = { name: "Aakash Jha" };
        const res = await supertest.agent(app).post("/").send(data);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(data);
        expect(res.header).toHaveProperty("content-type", "application/json; charset=utf-8");
    });
    test("Tests the POST / endpoint", async () => {
        const data = {};
        const res = await supertest.agent(app).post("/").send(data);
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual("No data");
        expect(res.header).toHaveProperty("content-type", "application/json; charset=utf-8");
    });
});
