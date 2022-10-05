import {useState} from "react";

export const useForm = (options) => {
    const [data, setData] = useState(options?.intitalValues || {});
    const [errors, setErrors] = useState({});
    const handleChange = (key, e) => {
        const value = e.target.value;
        setData({
            ...data,
            [key]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validations = options?.validations;
        if (validations) {
            let valid = true;
            const newErrors = {}
            for (let key in validations) {
                const value = data[key];
                const validation = validations[key];
                if (validation ?.required?.value && !value) {
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }
                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }
                const custom = validation?.custom;
                if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }
            }
            setErrors({});

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        if (options?.onSubmit) {
            options.onSubmit(data);
        }
    }
    return {
        data,
        handleChange,
        handleSubmit,
        errors
    }
}