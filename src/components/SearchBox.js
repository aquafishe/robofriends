import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    console.log('SearchBox render');
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;