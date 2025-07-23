beforeAll(() => {
  window.fetchAPI = jest.fn(() => ['17:00', '18:00']);
});

import { initializeTimes, updateTimes } from '../components/bookingReducer';


test('initializeTimes devuelve el array esperado', () => {
  //Mockear la función fetchAPI
  window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  // 1. Ejecutar la función
  const result = initializeTimes();

  // 2. Definir lo que esperas que devuelva
  const expected = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];

  // 3. Hacer la comparación
  expect(result).toEqual(expected);
});

test('updateTimes devuelve las horas correctas para una fecha específica', () => {
    const fakeDate = new Date('2025-08-01');
    window.fetchAPI = jest.fn(() => ['17:00', '18:30', '20:00']);
    const initialState = [];
    const action = { type: 'date_change', date: fakeDate };
    const result = updateTimes(initialState, action);
    const expected = ['17:00', '18:30', '20:00'];

  expect(result).toEqual(expected);
});