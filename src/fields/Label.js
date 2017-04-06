import React, { PropTypes } from 'react';

const Asterisk = () => (<abbr title="This field is required" aria-hidden="true"> *</abbr>);

const Label = ({ fieldId, label, isRequired, children }) => (
    <label htmlFor={fieldId}>
        {label}
        {isRequired && <Asterisk /> }
        {children}
    </label>
);

Label.propTypes = {
    fieldId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    children: PropTypes.element,
};

Label.defaultProps = {
    isRequired: false,
};

export default Label;