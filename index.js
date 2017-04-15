const {up} = require('ireactivity');
const {get, set} = require('object.gs');

const input = (model, path, next = () => null) => {
    return {
        onChange: (event) => up(model, () => {
            const value = event.target.value;
            set(path)(model)(value);
            next(value);
        }),
        value: get(path)(model)
    }
};

const submit = (next = () => null) => {
    return {
        onSubmit: (event) => {
            event.preventDefault();
            next(event);
        }
    }
};

module.exports = {
    input,
    submit
};