import React from 'react';
import { render,screen,waitFor} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'
import Login from '../components/login';
import {BrowserRouter} from 'react-router-dom';

describe("Testing",async()=>
{
    it('it is',()=>{
        //const div = document.createElement("div");
        render(<BrowserRouter><Login/></BrowserRouter>);
    // await waitFor(()=>screen.getAllByPlaceholderText("Enter Password"));
        expect(screen.getAllByPlaceholderText("Enter Password"));
        
    })
})