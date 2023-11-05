import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Calendar from '../Calendar';

const currentWeekSample = [
    new Date('2023-11-03T18:44:21.000Z'),
    new Date('2023-11-04T18:44:21.000Z'),
    new Date('2023-11-05T18:44:21.000Z'),
    new Date('2023-11-06T18:44:21.000Z'),
    new Date('2023-11-07T18:44:21.000Z'),
  ];
const generateWeek = (startDate, numDays) => {
    const week = [];
    for (let i = 0; i < numDays; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      week.push(day);
    }
    return week
  };
  const goToNextWeek = (week)=>{

    if (week.length > 0) {
        const last = week[week.length - 1];
        const nextWeekStartDate = new Date(last);
        nextWeekStartDate.setDate(last.getDate() + 1); // Start the next week
  
        return generateWeek(nextWeekStartDate,5)
 }
}
const goToLastWeek = (week) => {
    if (week.length > 0) {
      const first = week[0];
      const lastWeekStartDate = new Date(first);
      lastWeekStartDate.setDate(first.getDate() - 6);
      return generateWeek(lastWeekStartDate,5)
      
    }
  };
const produceHeadingText = (week)=>{

    const firtsDay = week[0].toLocaleString('en-US', {year: 'numeric',month: 'long', day: 'numeric'})
    const lastDay =  week[week.length - 1].toLocaleString('en-US', {year: 'numeric',month: 'long', day: 'numeric'})
    const text = `From ${firtsDay} to ${lastDay}`
    console.log('this is the expected header text: ', text)
    return text

}

describe('tests the Table component', ()=>{
    test('renders the table elements form elements', () => {
        render(
            
                <Calendar />  
            );

        const calendarWrapperDiv = screen.getByTestId('calendar-wrapper')
        expect(calendarWrapperDiv).toBeInTheDocument()
        const calendarHeader = screen.getByTestId('calendar-header')
        expect(calendarHeader).toBeInTheDocument()
        const moveWeekWrapper= screen.getByTestId('move-week-wrapper')
        expect(moveWeekWrapper).toBeInTheDocument()
        const tableWrapper = screen.getByTestId('table-wrapper')
        expect(tableWrapper).toBeInTheDocument()
        
    }) 
    test('the header should render the fisrt and last days of the week', () => {
        render(
            
                <Calendar />  
            );
        const week = generateWeek(new Date(), 5)
        const text = produceHeadingText(week)

        const headerElement = screen.getByRole('heading')
        expect(headerElement).toHaveTextContent(text)
        const headerElementText = screen.getByText(text)
        expect(headerElementText).toBeInTheDocument()
    }) 
    
    
      test('when move-forward button is clicked, the header should display the next week', () => {
        
        render(<Calendar/>);
        console.log('creating the current week')
        const week = generateWeek(new Date(), 5)
        console.log('creating the next week')
        const nextWeek = goToNextWeek(week,5)
        console.log('producing the next weeks text')
        const text = produceHeadingText(nextWeek)

        const headerElement = screen.getByRole('heading')
        const forwardButton = screen.getByTestId('button-forward');
        fireEvent.click(forwardButton);
        expect(headerElement).toHaveTextContent(text)
        
      });
      test('when move-back button is clicked, the header should display the last week', () => {
        
        render(<Calendar/>);
        console.log('creating the current week')
        const week = generateWeek(new Date(), 5)
        console.log('creating the last week')
        const lastWeek = goToLastWeek(week,5)
        console.log('producing the next weeks text')
        const text = produceHeadingText(lastWeek)

        const headerElement = screen.getByRole('heading')
        const backButton = screen.getByTestId('button-back');
        fireEvent.click(backButton);
        expect(headerElement).toHaveTextContent(text)
        
      });
   
})
