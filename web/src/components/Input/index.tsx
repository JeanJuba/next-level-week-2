import React, { InputHTMLAttributes } from 'react';

import './styles.css';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

/**
 * ... é o "rest operator" ou "spread operator".
 * 
 */
const  Input: React.FC<InputProps> = ({ label, name, ...rest  }) =>{
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;
