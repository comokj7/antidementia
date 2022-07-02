export enum OPERATOR {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION,
  EQUAL,
}

export interface Operator {
  id: number;
  name: string;
  value: string;
}

export const Operators = [
  {
    id: OPERATOR.ADDITION,
    name: 'addition',
    value: '+',
  } as Operator,
  {
    id: OPERATOR.SUBTRACTION,
    name: 'subtraction',
    value: '-',
  } as Operator,
  {
    id: OPERATOR.MULTIPLICATION,
    name: 'multiplication',
    value: 'x',
  } as Operator,
  {
    id: OPERATOR.DIVISION,
    name: 'division',
    value: '÷',
  } as Operator,
  {
    id: OPERATOR.EQUAL,
    name: 'equal',
    value: '=',
  } as Operator
];
