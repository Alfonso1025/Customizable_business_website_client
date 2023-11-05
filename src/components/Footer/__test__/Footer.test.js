import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../Footer';





describe('tests the Footer component', ()=>{
    test('renders all elements correctly', () => {
        render(<Footer/>);
        
        
    // Check if each element is in the document
    const footerWrapper = screen.getByTestId('footer-wrapper')
    const direccionElement = screen.getByText(/Dirección:/i);
    const telefonoElement = screen.getByText(/Telefono:/i);
    const emailElement = screen.getByText(/Email:/i);
    const copyrightElement = screen.getByText(/Copyright © 2023 Alfonso SoftTech. All rights reserved./i);

    // Assert that each element is in the document
    expect(footerWrapper).toBeInTheDocument()
    expect(direccionElement).toBeInTheDocument();
    expect(telefonoElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(copyrightElement).toBeInTheDocument();

    expect(footerWrapper).toHaveClass('footer-wrapper')
    expect(copyrightElement).toHaveClass('copyright');
        
      });
      
})