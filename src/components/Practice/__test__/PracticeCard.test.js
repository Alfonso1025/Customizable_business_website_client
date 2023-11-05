import React from 'react';
import { render, screen } from '@testing-library/react';
import PracticeCards from '../PracticeCards';



const mockedSetIsOpenArea = jest.fn()
const mockedSetAreaDescription = jest.fn()
const mockedSetAreaList = jest.fn()
const mockedSetAreaTitle = jest.fn()

describe('tests the PracticeCards component', ()=>{
    test('renders home component with the expected text', () => {
        render(<PracticeCards title=''
                              setIsOpenArea = {mockedSetIsOpenArea}
                              setAreaDescription={mockedSetAreaDescription}
                              setAreaList={mockedSetAreaList} setAreaTitle={mockedSetAreaTitle}/>);
        
       
        const divElem = screen.getByTitle('card-main')
      
        expect(divElem).toBeInTheDocument();
        expect(divElem).toHaveClass('card-main')
      });
      test('the title text renders correctly', () => {
        render(<PracticeCards title='test title'
                              setIsOpenArea = {mockedSetIsOpenArea}
                              setAreaDescription={mockedSetAreaDescription}
                              setAreaList={mockedSetAreaList} setAreaTitle={mockedSetAreaTitle}/>);
        
       
        const h2Elem = screen.getByText('test title')
        expect(h2Elem).toBeInTheDocument();
        expect(h2Elem).toHaveClass('card-title')
        
      });
      test('clicking the card sets the state variebles correctly', () => {
        render(<PracticeCards title=''
                              setIsOpenArea = {mockedSetIsOpenArea}
                              setAreaDescription={mockedSetAreaDescription}
                              setAreaList={mockedSetAreaList} setAreaTitle={mockedSetAreaTitle}/>);
        
       
        const divElem = screen.getByTitle('card-main')
      
        expect(divElem).toBeInTheDocument();
        expect(divElem).toHaveClass('card-main')
      });
      


      
    
})