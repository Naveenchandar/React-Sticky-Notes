import React from 'react';

export default function SimplePopover(props) {
    return (
        <div className='colors'>
            <span className='color-name yellow' title='Yellow'></span>
            <span className='color-name green' title='Green'></span>
            <span className='color-name pink' title='Pink'></span>
            <span className='color-name purple' title='Purple'></span>
            <span className='color-name blue' title='Blue'></span>
            <span className='color-name gray' title='Gray'></span>
            <span className='color-name charcoal' title='Charcoal'></span>
        </div>
    );
}