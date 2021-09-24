import React from 'react';

export default function InputForm({ label, type, onChange }) {

    var txtLabel = <label>{label}: </label>;

    return (
        <div style={{ textAlign: 'center', color: 'white' }}>
            {txtLabel}
            <input type={type} onChange={onChange} />
        </div>
    );
}