import { render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from '../app/store';
import Header from '../components/Header';

test('Renders FruitBlock Component', () => {
  const fruit = { name: 'banana', id: 1 };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div />,
    },
    {
      path: 'fruitdetails/:id',
      element: <div />,
    },
  ]);
  const tree = render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    </React.StrictMode>
  );
  expect(tree).toMatchSnapshot();
});
