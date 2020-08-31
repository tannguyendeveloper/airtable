import React from 'react';

const Select = (props) => {
    return(
        <div className={`custom-select ${props.className ? props.className : null}`}>
            <label htmlFor={props.id} className="label mb-2">{props.label}</label>
            <div className="select-container">
                <select id={props.id} name={props.name} defaultValue={props.value} onChange={(e) => { props.onChange(e) }}>
                    {
                        props.options.map(option => { 
                        return(<option key={option.id} value={option.id}>{option.name}</option>)
                        })
                    }
                </select>
                <div className="caret"></div>
            </div>
        </div>
    )
}

export default Select;