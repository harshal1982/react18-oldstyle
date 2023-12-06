import renderer from 'react-test-renderer';
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from '../src/server/helpers/configureStore';
import Todo from '../src/app/component/ToDo';
import { render } from '@testing-library/react';
jest.mock('react-router-dom', () => ({
  Link: ({ children }) => <div>{children}</div>,
}));
test('Rotate with actual store', async () => {
  const store = configureStore();
  renderer.create(<Provider store={store}><Todo/></Provider>) 
});

test('Rotate with actual store', async () => {
	const store = configureStore();
	const {container, getByText, getByAltText} = render(<Provider store={store}><Todo/></Provider>);

	fireEvent.click(getByText(/GetTodo/i));
	

  });

