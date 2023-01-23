import './Field.css';

const Field = (props) => {

    const handleDigit = event => {
        props.changed(event.target.value);
    }

    return (
        <div className="field__container">
            <label htmlFor={props.label} className="field__title">{props.label}</label>
            <input value={props.value} onChange={handleDigit} required={props.required} type={props.type} name={props.label.toLowerCase()} className="field__input" placeholder={props.placeholder} />
        </div>
    )
}

export default Field;