import React from 'react';
import { render, screen } from '@testing-library/react';
import Trayectoria from '../Trayectory';


describe('tests the Trayectory component', ()=>{
    test('renders home component with the expected text', () => {
        render(<Trayectoria />);
        
        // Use a data-testid or class name to select the element
        const divElem = screen.getByTitle('trayectory-wrapper');
      
        // Assert that the component renders with the expected text
        expect(divElem).toBeInTheDocument();
      });
      test('image is present in the document', () => {
        render(<Trayectoria />);
        
        const imgElem = screen.getByRole('img')
        expect(imgElem).toBeInTheDocument()
        
      });
      test('image displays the right alt text', () => {
        render(<Trayectoria />);
        
        const altText = screen.getByAltText('imagen de perfil')
        expect(altText).toBeInTheDocument()
        
      });
      test('displays the expected text content for "Estudios"', () => {
        render(<Trayectoria />);
        
        // Query the element with the text content you expect
        const estudiosText = screen.getByText(/La Maestra Mejía se graduó como Licenciada en Psicología en/i);
        
        // Assert that the text content is present
        expect(estudiosText).toBeInTheDocument();
      });
      test('displays the expected text content for "Academia"', () => {
        render(<Trayectoria />);
        
        // Query the element with the text content you expect
        const academiaText = screen.getByText(/La Maestra Mejía ha desempeñado su papel como docente de educación primaria/i);
        
        // Assert that the text content is present
        expect(academiaText).toBeInTheDocument();
      });
})