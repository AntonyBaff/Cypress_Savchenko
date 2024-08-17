describe('API Testing with Cypress', () => {

   beforeEach(() => {

  cy.request({
    method: 'POST',
    url: 'https://qauto.forstudy.space/api/auth/signin', // URL к вашему API логина
    body: {
      email: 'AntonyBaff1.doe@example.com',
      password: 'Password123!'
    }
})
})
////////////////GET CARS/////////////////////////////
it('GET CARS', () => {
  cy.request({
    method: 'GET',
    url: 'https://qauto.forstudy.space/api/cars', // Замените на ваш реальный URL
  }).then((response) => {
    // Проверка запроса
    expect(response.status).to.eq(200);

  // Проверка, что массив существует
    expect(response.body.data).to.be.an('array');

  // Проверка свойств внутри объектов массива
});
});

/////////////////GET EXPENSE//////////////////////////
it('GET EXPENSE', () => {
  cy.request({
    method: 'GET',
    url: 'https://qauto.forstudy.space/api/expenses',
  }).then((response) => {
    // Проверка запроса
    expect(response.status).to.eq(200);

  // Проверка, что массив существует
    expect(response.body.data).to.be.an('array');

  // Проверка свойств внутри объектов массива
});
});

////////////////POST CAR/////////////////
it('POST CAR', () => {
cy.request({
  method: 'POST',
  url: 'https://qauto.forstudy.space/api/cars', // Замените на ваш реальный URL
  body: {
    carBrandId: '1',
    carModelId: '2',
    mileage: 333
  }
}).then((response) => {
  // Проверка, что запрос успешен
  expect(response.status).to.eq(201);

});
});

////////////////////////POST EXPENSE////////////////////
it('POST EXPENSE', () => {
cy.request({
  method: 'POST',
  url: 'https://qauto.forstudy.space/api/expenses',
  body: {
    carId: '186207',
    reportedAt: '2024-08-17',
    mileage: 3000,
    liters: 11,
    totalCost: 111,
    forceMileage: false
  }
}).then((response) => {
  // Проверка, что запрос успешен
  expect(response.status).to.eq(200);

});
});
});
  