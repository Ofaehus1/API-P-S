describe('GET /api/dispositivos', () => {
    test('Debería retornar una lista de dispositivos', async () => {
      const res = await request(app).get('/api/dispositivos');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
    });
  });
  