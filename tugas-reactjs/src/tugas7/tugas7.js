import React from 'react';
import '../App.css';

const tugas7 = (props) => {
    return (
        <>
            <div className="card">
                <h1>Data diri peserta kelas Reactjs</h1>
                <hr />
                <ul>
                    <li><b>Nama Lengkap : </b>{props.name}</li>
                    <li><b>Email : </b>{props.email}</li>
                    <li><b>Batch Pelatihan : </b>{props.batch}</li>
                </ul>
            </div>
        </>
    )
}

export default tugas7;