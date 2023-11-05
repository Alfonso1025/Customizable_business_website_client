import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../HomePage';


describe('tests the Home component', ()=>{
    test('renders home component with the expected text', () => {
        render(<Home />);
        
        // Use a data-testid or class name to select the element
        const homeTextElement = screen.getByText(/Con más de 40 años de trayectoria/);
      
        // Assert that the component renders with the expected text
        expect(homeTextElement).toBeInTheDocument();
      });
      test('div container has correct class applied', () => {
        render(<Home />);
        
        // Use a data-testid or class name to select the element
        const divConntainer = screen.getByTestId('div-elem');
      
        // Assert that the component renders with the expected text
        expect(divConntainer).toHaveClass('home-wrapper');
      });
      test('paragraph  has correct class applied', () => {
        render(<Home />);
        
        // Use a data-testid or class name to select the element
        const pElem = screen.getByText(/Con más de 40 años de trayectoria/i);
      
        // Assert that the component renders with the expected text
        expect(pElem).toHaveClass('home-text');
      });
    
})


