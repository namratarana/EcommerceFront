import React from 'react';
import { render,screen,waitFor} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'
import Header from '../components/header';
import {BrowserRouter} from 'react-router-dom';

describe("Testing",()=>
{
    it('it is',()=>{
        //const div = document.createElement("div");
        render(<BrowserRouter><Header/></BrowserRouter>);
    // await waitFor(()=>screen.getAllByPlaceholderText("Enter Password"));
        
        
    })
})