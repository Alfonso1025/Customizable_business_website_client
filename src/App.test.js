import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const MockApp = ()=>{
    return(
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    )
}
describe('test app component', ()=>{
    test('div element should have class App applied', ()=>{
        render(<MockApp/>)
        const divElem = screen.getByTestId('App-div-wrapper')
        expect(divElem).toHaveClass('App')
    })
})