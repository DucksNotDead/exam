import {KeyboardEvent, useCallback, useMemo} from "react";
import {TernaryValues, TTernary} from "./shared";

interface IProps {
	value: string | TTernary;
	onChange: (value: TTernary) => void;
}

export function AppInput({ value, onChange }: IProps) {
	const ternary = useMemo<TTernary>(() => {
		const number = Number(value) as TTernary;
		return TernaryValues.includes(number as TTernary) ? number : 0
	}, [value]);

	const handleKeyPres = useCallback(({ key }: KeyboardEvent<HTMLInputElement>) => {
		const number = Number(key) as TTernary;
		if (TernaryValues.includes(number)) {
			onChange(number)
		}
	}, [onChange]);

	return <input value={ternary} onKeyDown={handleKeyPres}/>
}