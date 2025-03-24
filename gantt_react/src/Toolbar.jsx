import React, { useContext } from 'react';

function Toolbar({curzoom, onZoomChange}) {

    const handleZoomChange = (e) =>{
        onZoomChange(e.target.value)
    }

    const zoomRadios = ['시간단위', '날짜단위', '월단위'].map(val => {
        const isActive = curzoom === val;

        return (
            <label key={val}>
                <input type='radio' 
                    checked={isActive}
                    onChange={handleZoomChange}
                    value={val}
                />
                {val}
            </label>
        )
    })

    return (
        <div className='tool-bar'>
            <b>줌 레벨 선택: </b>
            {zoomRadios}
        </div>
    )
}

export default Toolbar