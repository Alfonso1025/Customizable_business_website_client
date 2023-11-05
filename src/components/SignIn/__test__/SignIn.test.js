import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from '../SignIn';


describe('tests the SignIn component', ()=>{
    test('renders the signup form elements', () => {
        render(
            <MemoryRouter>
                <SignIn />  
            </MemoryRouter>
        );
      
        // Ensure the form and its input fields are in the document
        const authForm = screen.getByTestId('auth-form');
        const emailInput = screen.getByPlaceholderText('email');
        const passwordInput = screen.getByPlaceholderText('password');
        const submitButton = screen.getByTitle('sign-in');
      
        // Ensure success and error message divs are not in the document
        const successDiv = screen.queryByTestId('success-div');
        const errorMessageDiv = screen.queryByTestId('error-message');
      
        // Assert that form and input fields are present
        expect(authForm).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
      
        // Assert that success and error message divs are not present
        expect(successDiv).not.toBeInTheDocument();
        expect(errorMessageDiv).not.toBeInTheDocument();
      });
    test('inputs should get right value after onchange event fires',()=>{
        render(
            <MemoryRouter>
                <SignIn />  
            </MemoryRouter>
        );
        //grab inputs
        
        const emailInput = screen.getByPlaceholderText('email');
        const passwordInput = screen.getByPlaceholderText('password');
        //fire event onchange
        
        fireEvent.change(emailInput, { target: { value: 'juan@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: '123' } });

       
        expect(emailInput).toHaveValue('juan@gmail.com')
        expect(passwordInput).toHaveValue('123')
        

    })
    
    
    test('Error message should render if email is empty',()=>{
        render(
            <MemoryRouter>
                <SignIn />  
            </MemoryRouter>
        );
        
        //grab button
        const signUpButton = screen.getByTitle('sign-in')
        //grab inputs
        const passwordInput = screen.getByPlaceholderText('password');

        //fire event onchange
        
        fireEvent.change(passwordInput, { target: { value: '123' } });

        //fire event click buttons
        fireEvent.click(signUpButton)
        //grab error message div        
        const errMsgDiv = screen.getByTestId('error-message-div')
        
        const errMsgP = screen.getByTestId('error-message-p')

        expect(errMsgDiv).toBeInTheDocument()
        expect(errMsgP.textContent).toBe('missing a required field')
        

    })
    test('Error message should render if password is empty',()=>{
        render(
            <MemoryRouter>
                <SignIn />  
            </MemoryRouter>
        );
        
        //grab button
        const signUpButton = screen.getByTitle('sign-in')
        //grab inputs
        
       
        const emailInput = screen.getByPlaceholderText('email');

        //fire event onchange
        
        fireEvent.change(emailInput, { target: { value: 'juan@gmail.com' } });

        //fire event click buttons
        fireEvent.click(signUpButton)
        //grab error message div        
        const errMsgDiv = screen.getByTestId('error-message-div')
        
        const errMsgP = screen.getByTestId('error-message-p')

        expect(errMsgDiv).toBeInTheDocument()
        expect(errMsgP.textContent).toBe('missing a required field')
        

    })
   
    test('Error message should render if email has incorrect format',()=>{
        render(
            <MemoryRouter>
                <SignIn />  
            </MemoryRouter>
        );
        
        //grab button
        const signUpButton = screen.getByTitle('sign-in')
        //grab inputs
        
        
        const emailInput = screen.getByPlaceholderText('email');
        const passwordInput = screen.getByPlaceholderText('password');


        //fire event onchange
        
        
        fireEvent.change(emailInput, { target: { value: 'juangmail.com' } });
        fireEvent.change(passwordInput, { target: { value: '123' } });

        //fire event click buttons
        fireEvent.click(signUpButton)
        //grab error message div        
        const errMsgDiv = screen.getByTestId('error-message-div')
        
        const errMsgP = screen.getByTestId('error-message-p')

        expect(errMsgDiv).toBeInTheDocument()
        expect(errMsgP.textContent).toBe('invalid email format')
        

    }) 
    
    
})
