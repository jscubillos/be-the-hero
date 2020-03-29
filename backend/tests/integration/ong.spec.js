const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const ong = {
      name: "APAD2",
      email: "contato@apad.com.br",
      whatsapp: "8283492304",
      city: "São Paulo",
      uf: "SP"
    };
    
    const response = await request(app)
      .post('/ongs')
      .send(ong);

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(16);
  });

  it('should be able to get a ONG', async () => {
    const response = await request(app)
      .get('/ongs')
      .send();

    const ongs = response.body;
    expect(ongs.length).toBeGreaterThan(0);
  });
});