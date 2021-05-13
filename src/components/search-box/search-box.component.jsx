import React from 'react';
import './search-box.styles.css';

export const SearchBox = ( {placeholder , handlechange} ) => (
    <input 
        className='search'
        type='search'
        placeholder={ placeholder } 
      //   setStae is just behind the current state ,
      // so whatever thing is done immediately after changing the input , that thing is done by callback.
        onChange={ handlechange }      
        
    /> 
)
