import React from 'react';
import { render,screen,waitFor} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'
import Home from '../components/home';
import {BrowserRouter} from 'react-router-dom';

describe("Testing",()=>
{
    it('it is',()=>{
        //const div = document.createElement("div");
        render(<BrowserRouter><Home/></BrowserRouter>);
    // await waitFor(()=>screen.getAllByPlaceholderText("Enter Password"));
        
        
    })
})