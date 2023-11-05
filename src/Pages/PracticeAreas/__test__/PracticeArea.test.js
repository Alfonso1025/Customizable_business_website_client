import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PracticeAreas from '../PracticeAreas';


describe('tests the PracticeAreas component', ()=>{
    test('Initially renders the grid of clickable card titles', () => {
        render(<PracticeAreas />);
        
        // Use a data-testid or class name to select the element
        const divElem = screen.getByTitle('cards-grid');
      
        // Assert that the component renders with the expected text
        expect(divElem).toBeInTheDocument();
        expect(divElem).toHaveClass('cards-grid')
      });
      test('should render individual clickable card correctly', () => {

        render(<PracticeAreas />);
        
        // Use a data-testid or class name to select the element
        const divElem = screen.getByTestId('card-item-0');
        const allClickCards = screen.getAllByTitle('card-main')
        
        expect(divElem).toBeInTheDocument();
        expect(allClickCards.length).toBe(5)
      });
    test('when a card is clicked, the practice area info should be displayed.', ()=>{
        render(<PracticeAreas />);
        //grab the first clickavble div rendered
        const divClicableCard = screen.getByTestId('card-item-0')
        //simulate event onclick over the first clikable div
        fireEvent.click(divClicableCard)
       //test if the elements from practice area info are present in the document
        const divAreaWrapp = screen.getByTitle('area-wrapper')
        expect(divAreaWrapp).toBeInTheDocument() 

        const headerTitle = screen.getByText('Derecho de familia')
        expect(headerTitle).toBeInTheDocument()

        const pElem = screen.getByTitle('area-description')
        expect(pElem.textContent).toBe('test')
        const pElemText = screen.getByText('test')
        expect(pElemText).toBeInTheDocument()    
        
    })
    test('when a card is clicked, the PracticeCard component should not be present in the document.', ()=>{
        render(<PracticeAreas />);

        const divElem = screen.getByTitle('cards-grid');
        expect(divElem).toBeInTheDocument()
        //grab the first clickavble div rendered
        const divClicableCard = screen.getByTestId('card-item-0')
        //simulate event onclick over the first clikable div
        fireEvent.click(divClicableCard)
        expect(divElem).not.toBeInTheDocument()
       
          
        
    })
       
    
})


