import React, { useState } from 'react';
import InputForm from './InputForm';

export default function Form({ submit, object: { c } }) {

    const tipo = 'text';

    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');

    const handleOnChangeName = (e) => {
        setName(e.target.value);
    }

    const handleOnChangeApellido = ({ target }) => {
        setApellido(target.value);
    }

    const handleOnChangePassword = ({ target: { value } }) => {
        console.log(value);
    }

    const handleSubmit = () => {
        // setB(prevValue => !prevValue);
        // console.log(b);
        submit(name, apellido);
    }

    return (
        <div>
            <InputForm label="Nombre" type={tipo} onChange={handleOnChangeName} />
            <InputForm label="Apellido" type="text" onChange={handleOnChangeApellido} />
            <InputForm label="Contraseña" type="password" onChange={handleOnChangePassword} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );

}