import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';


describe('test the Contact component', ()=>{
    test('renders ContactForm with all required elements', () => {
        render(<Contact />);
      
        // Check if the main container is present
        const contactWrapper = screen.getByTestId('contact-wrapper');
        expect(contactWrapper).toBeInTheDocument();
      
        // Check if the form is present
        const form = screen.getByTestId('contact-form');
        expect(form).toBeInTheDocument();
      
        // Check if the input fields are present
        const firstNameInput = screen.getByPlaceholderText('Nombre');
        expect(firstNameInput).toBeInTheDocument();
        const lastNameInput = screen.getByPlaceholderText('Apellidos');
        expect(lastNameInput).toBeInTheDocument();
        const emailInput = screen.getByPlaceholderText('Correo electronico');
        expect(emailInput).toBeInTheDocument();
        const companyInput = screen.getByPlaceholderText('Tipo de asunto');
        expect(companyInput).toBeInTheDocument();
      
        // Check if the textarea is present
        const messageTextarea = screen.getByPlaceholderText('Escriba su mensaje');
        expect(messageTextarea).toBeInTheDocument();
      
        // Check if the submit button is present
        const submitButton = screen.getByText('SEND MESSAGE');
        expect(submitButton).toBeInTheDocument();
      });
      
    test('input fields receive correct input values', () => {
        render(<Contact />);
      
        // Query the input fields
        const firstNameInput = screen.getByPlaceholderText('Nombre');
        const lastNameInput = screen.getByPlaceholderText('Apellidos');
        const emailInput = screen.getByPlaceholderText('Correo electronico');
        const companyInput = screen.getByPlaceholderText('Tipo de asunto');
       
      
        // Simulate user input
        const firstNameValue = 'John';
        const lastNameValue = 'Doe';
        const emailValue = 'johndoe@example.com';
        const companyValue = 'Inquiry';
      
        fireEvent.change(firstNameInput, { target: { value: firstNameValue } });
        fireEvent.change(lastNameInput, { target: { value: lastNameValue } });
        fireEvent.change(emailInput, { target: { value: emailValue } });
        fireEvent.change(companyInput, { target: { value: companyValue } });
      
        // Verify the input values
        expect(firstNameInput).toHaveValue(firstNameValue);
        expect(lastNameInput).toHaveValue(lastNameValue);
        expect(emailInput).toHaveValue(emailValue);
        expect(companyInput).toHaveValue(companyValue);
      });
})
