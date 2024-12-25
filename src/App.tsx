import React, {useMemo, useState} from 'react';
import './styles.css'
import {AppInput} from "./AppInput";
import {TOperation, toTernary, TTernary} from "./shared";
import {AppOperationsSelect} from "./AppOperationsSelect";

export function App() {
  const [first, setFirst] = useState<TTernary>(0)
  const [second, setSecond] = useState<TTernary>(0)
  const [operation, setOperation] = useState<TOperation>('+')

  const result = useMemo(() => {
    switch (operation) {
      case '+':
        return toTernary(first + second)
      case '-':
        return toTernary(first - second)
      case 'AND':
        return toTernary(first & second)
      case 'OR':
        return toTernary(first | second)
      case 'XOR':
        return toTernary(first ^ second)
    }
  }, [first, second, operation]);

  return (
    <div className={'app'}>
      <AppInput value={first} onChange={setFirst} />
      <AppOperationsSelect value={operation} onSelect={setOperation} />
      <AppInput value={second} onChange={setSecond} />
      <div>=</div>
      <div>{result}</div>
    </div>
  );
}
