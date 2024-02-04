import React, { useState } from 'react';
import '../App.css';

const Tugas8ReactJS = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div className='card'>
                <p id='numberTugas8'>{count}</p>
                <button id='buttonTugas8' onClick={handleClick}>Tambah</button>
                {count > 10 ? <p>State count sudah lebih dari 10!!</p> : false}
            </div>
        </>
    );
}

export default Tugas8ReactJS;