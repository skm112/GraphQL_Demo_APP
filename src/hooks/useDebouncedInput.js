import { useCallback, useState, useRef } from 'react';
import { debounce } from 'lodash'
export const useDebouncedInput = (defaultValue = '', timeout = 400) => {
    const [value, setValue] = useState(defaultValue);
    const inputRef = useRef(null);
    const debouncedValue = useCallback(debounce(setValue, timeout), [])
    const options = {
        defaultValue: defaultValue,
        onChangeText: debouncedValue,
        ref: inputRef
    }
    const clearValue = () => {
        inputRef.current?.clear()
        setValue(defaultValue)
    }
    return {
        value,
        options,
        focus: inputRef.current?.focus,
        blur: inputRef.current?.blur,
        isFocused: inputRef.current?.isFocused,
        clear: clearValue,
    }
}