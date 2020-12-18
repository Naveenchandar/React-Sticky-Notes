import React, { useState, useEffect } from 'react';

export default function SimplePopover(props) {

    const [bgColor, setBgColor] = useState();

    const handleChangeColor = (color) => {
        switch (color) {
            case 'yellow':
                setBgColor('yellow');
                break;
            case 'green':
                setBgColor('green');
                break;
            case 'pink':
                setBgColor('pink');
                break;
            case 'purple':
                setBgColor('purple');
                break;
            case 'blue':
                setBgColor('blue');
                break;
            case 'gray':
                setBgColor('gray');
                break;
            case 'charcoal':
                setBgColor('charcoal');
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        props.handleChangeColor(bgColor);
    }, [bgColor])


    return (
        <div className='colors' >
            <span
                className='color-name yellow'
                title='Yellow'
                onClick={() => handleChangeColor('yellow')}
            />
            <span
                className='color-name green'
                title='Green'
                onClick={() => handleChangeColor('green')}
            />
            <span
                className='color-name pink'
                title='Pink'
                onClick={() => handleChangeColor('pink')}
            />
            <span
                className='color-name purple'
                title='Purple'
                onClick={() => handleChangeColor('purple')}
            />
            <span
                className='color-name blue'
                title='Blue'
                onClick={() => handleChangeColor('blue')}
            />
            <span
                className='color-name gray'
                title='Gray'
                onClick={() => handleChangeColor('gray')}
            />
            <span
                className='color-name charcoal'
                title='Charcoal'
                onClick={() => handleChangeColor('charcoal')}
            />
        </div>
    );
}