import {Operations, TOperation} from "./shared";
import {ChangeEvent, useCallback, useEffect, useState} from "react";

interface IProps {
	value: TOperation;
	onSelect: (operation: TOperation) => void;
}

export function AppOperationsSelect({ value, onSelect }: IProps) {
	const handleChange = useCallback(({ target }: ChangeEvent<HTMLSelectElement>) => {
		onSelect((target as HTMLSelectElement).value as TOperation)
	}, [onSelect]);

	return (
		<select onChange={handleChange} value={value}>
			{Operations.map(operation => (
				<option key={operation} value={operation}>{operation}</option>
			))}
		</select>
	)
}