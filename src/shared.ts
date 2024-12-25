export const TernaryValues = [0, 1, 2] as const

export type TTernary = typeof TernaryValues[number]

export const Operations = ['+', '-', 'AND', 'OR', 'XOR'] as const

export type TOperation = typeof Operations[number]

export function toTernary(value: number) {
	return value.toString(3)
}