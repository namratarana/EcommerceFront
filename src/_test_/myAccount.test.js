import React from 'react';
import { render,screen,waitFor,fireEvent} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'
import {BrowserRouter} from 'react-router-dom';
import MyAccount from '../components/myAccount';

describe("Testing",()=>
{
    it('it is',()=>{
        //const div = document.createElement("div");
        render(<BrowserRouter><MyAccount/></BrowserRouter>);
    // await waitFor(()=>screen.getAllByPlaceholderText("Enter Password"));
        expect(screen.getAllByPlaceholderText("Zip"));
        const inputEmail = screen.getByTitle("mobilenumber")
        const inputPassword = screen.getByTitle("zip")
        fireEvent.change(inputEmail, { target: { value: "" } })
        fireEvent.change(inputPassword, { target: { value: "" } })
        fireEvent.click(screen.getByTitle("sign"))
        expect(screen.getByTitle("MobileNumberError").innerHTML).toBe("Mobile Number cannont be empty")
        expect(screen.getByTitle("ZipError").innerHTML).toBe("Zip cannont be blank") 
    })
    it('it is',()=>{
        render(<BrowserRouter><MyAccount/></BrowserRouter>);
        expect(screen.getAllByPlaceholderText("Zip"));
        const inputEmail = screen.getByTitle("mobilenumber")
        const inputPassword = screen.getByTitle("zip")
        fireEvent.change(inputEmail, { target: { value: "" } })
        fireEvent.change(inputPassword, { target: { value: "" } })
        fireEvent.click(screen.getByTitle("sign"))
        expect(screen.getByTitle("MobileNumberError").innerHTML).toBe("Mobile Number cannont be empty")
        expect(screen.getByTitle("ZipError").innerHTML).toBe("Zip cannont be blank") 
    })
})