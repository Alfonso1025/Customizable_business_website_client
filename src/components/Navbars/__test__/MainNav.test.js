import React from 'react';
import { render, screen } from '@testing-library/react';
import MainNavbar from '../MainNavbar';
import { BrowserRouter } from 'react-router-dom';

const MockMainNavbar = () => {
    return (
        <BrowserRouter>
            <MainNavbar />
        </BrowserRouter>
    )
}
describe('tests the MainNavbar component', ()=>{
    test('renders links with correct text', () => {
        render(<MockMainNavbar />);
        
        // Ensure the links are rendered and have the correct destinations
        const homeText = screen.getByText(/Sitio/i)
        expect(homeText).toBeInTheDocument()
        const trayectoriaText = screen.getByText(/Trayectoria/i)
        expect(trayectoriaText).toBeInTheDocument()
        const areasPracticText = screen.getByText(/areas de practica/i)
        expect(areasPracticText).toBeInTheDocument()
        const citaText = screen.getByText(/Agendar cita/i)
        expect(citaText).toBeInTheDocument()
        const contactText = screen.getByText(/Contacto/i)
        expect(contactText).toBeInTheDocument()

    
})
test('render correct amount of links', ()=>{
    render(<MockMainNavbar />);
    // Ensure the links are rendered and have the correct destinations
    const links = screen.getAllByRole('link');
        
    // Assert that there are five link elements
    expect(links).toHaveLength(5);
})
test('links should have nav-item classname applied', ()=>{
    render(<MockMainNavbar />);
    const divElem = screen.getByTitle('navbar-wrapper')
    expect(divElem).toHaveClass('navbar-wrapper')
})

})