import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Table from '../Table';
const currentWeekSample = [
    new Date('2023-11-03T18:44:21.000Z'),
    new Date('2023-11-04T18:44:21.000Z'),
    new Date('2023-11-05T18:44:21.000Z'),
    new Date('2023-11-06T18:44:21.000Z'),
    new Date('2023-11-07T18:44:21.000Z'),
  ];
const failyCurrentWeekSample = [
    // this week has less than five days which is incorrect
    new Date('2023-11-03T18:44:21.000Z'),
    new Date('2023-11-04T18:44:21.000Z'),
    new Date('2023-11-05T18:44:21.000Z'),
    new Date('2023-11-06T18:44:21.000Z'),
]
const mockIsHourAvailable =  jest.fn()
const mockSelectDate = jest.fn()

describe('tests the Table component', ()=>{
    test('renders the table elements form elements', () => {
        render(
            
                <Table currentWeek = {currentWeekSample}
                       isHourAvailable = {mockIsHourAvailable}
                       selectDate = {mockSelectDate} />  
            );

        // test is the main div and table appear in the document
        const divWrapper = screen.getByTestId('table-wrapper')
        const tableElement = screen.getByTestId('table-element')
        expect(divWrapper).toBeInTheDocument()
        expect(tableElement).toBeInTheDocument()
        //test is table headers appear in the document
        const headerElements = currentWeekSample.map((day) =>
            screen.getByText(day.toLocaleString('en-US', { weekday: 'long' }))
         );

         headerElements.forEach((element) => {
            expect(element).toBeInTheDocument();
          });
        //test if the cells in the table are correctly rendered
        const hourCells = screen.getAllByTitle('hour-cell');
        expect(hourCells).toHaveLength(currentWeekSample.length * 7);
        
    }) 


    test('the table rows are rendered from 14:00 to 20:00', () => {
        render(
            
                <Table currentWeek = {currentWeekSample}
                       isHourAvailable = {mockIsHourAvailable}
                       selectDate = {mockSelectDate} />  
            );
        // Assert that the rows render the hours from 14:00 to 21:00
        const hourRow = screen.getAllByTestId('hour-row');
        const expectedHours = Array.from({ length: 7 }, (_, hourIndex) => {
        const hour = 14 + hourIndex;
            return `${hour}:00`;
        });
        expectedHours.forEach((hour, index) => {
        expect(hourRow[index]).toHaveTextContent(hour);
    });
    })

    test('calls selectDate when a cell is clicked', () => {
        render(
            
                <Table currentWeek = {currentWeekSample}
                       isHourAvailable = {mockIsHourAvailable}
                       selectDate = {mockSelectDate} />  
            );

        // Query the element
        const cell = screen.getAllByTitle('hour-cell')[0];

        // Perform the action
        fireEvent.click(cell);

        // Assert the action
        expect(mockSelectDate).toHaveBeenCalled();
        
    }) 

    test('if the current week array does not contain 5 date Objects the error message should be rendered', () => {
        render(
            
                <Table currentWeek = {failyCurrentWeekSample}
                       isHourAvailable = {mockIsHourAvailable}
                       selectDate = {mockSelectDate} />  
            );

        
        const errorContainerElement = screen.getByTestId('error-container')
        expect(errorContainerElement).toBeInTheDocument()

        const errorTextElement = screen.getByRole('heading')
        expect(errorTextElement).toHaveTextContent('There was an error retrieving the calendar please try again later')
        
    }) 
   
})
