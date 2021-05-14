import React from 'react';
import { render,screen,waitFor,fireEvent} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'
import SignUp from '../components/signUp';
import {BrowserRouter} from 'react-router-dom';

describe("Testing",()=>
{
    
    it('it is',()=>{
    
        render(<BrowserRouter><SignUp/></BrowserRouter>);

        const inputEmail = screen.getByTitle("email")
        const inputPassword = screen.getByTitle("password")
        fireEvent.change(inputEmail, { target: { value: "abc(&" } })
        fireEvent.change(inputPassword, { target: { value: ";un%" } })
        fireEvent.click(screen.getByTitle("sign"))
        expect(screen.getByTitle("EmailError").innerHTML).toBe("Email Not In Format")
        expect(screen.getByTitle("passwordError").innerHTML).toBe("Password must be at least 8 characters with at least one lowercase,uppercase and two special characters")
    })
})