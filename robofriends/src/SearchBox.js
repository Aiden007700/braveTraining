import React from 'react';

const SerchBox = ({serchChange}) => {
    return (
        <div className='pa2'>
            <input onChange={serchChange} className='pa3 ba b--green bg-lightest-blue' type='serch'  placeholder='serch robots'/>
        </div>
    );
}

export default SerchBox;