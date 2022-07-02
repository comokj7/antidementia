import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import { OPERATOR, Operator, Operators } from '../enums';
import { randomInt } from '../utils/ArithmeticUtil';
import { AnswerInput, QuestionText, TextButton } from '../components/atoms';

interface Props {
  operands: {
    left: number;
    right: number;
  };
  operator: Operator;
  calculatedAnswer: number;
}

const initProps = {
  operands: {
    left: 0,
    right: 0,
  },
  operator: Operators['0'],
  calculatedAnswer: 0,
};

export const Questions: React.FC = () => {
  const [props, setProps] = useState<Props>(initProps);
  const [answer, setAnswer] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);

  const initializeQuestion = () => {
    setProps(initProps);
    setChecked(false);

    const first = randomInt(10, 99);
    const second = randomInt(10, 99);

    props.operands.left = first > second ? first : second;
    props.operands.right = props.operands.left === first ? second : first;
    props.operator = Operators[randomInt(0, 1)]
    calculateAnswer();
    console.log(props);

    setProps(props);
  }

  const calculateAnswer = () => {
    const left = props?.operands.left ?? 0;
    const right = props?.operands.right ?? 0;
    const operator = props?.operator.id ?? 0;

    if (operator === OPERATOR.ADDITION) {
      props.calculatedAnswer = (left + right);
    } else if (operator === OPERATOR.SUBTRACTION) {
      props.calculatedAnswer = (left - right);
    }
  }

  const changeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = Number(event?.target.value)
    setAnswer(value);
    console.log('answer changed', answer);
  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (checked) return;

    setChecked(true);
    setCorrect(answer === props.calculatedAnswer);
    console.log('answer checked', checked, correct)
  }

  useEffect(() => {
    initializeQuestion();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container>
      <Grid container item>
        <Grid item>
          <QuestionText>{props?.operands.left}</QuestionText>
        </Grid>
        <Grid item>
          <QuestionText>{props?.operator.value}</QuestionText>
        </Grid>
        <Grid item>
          <QuestionText>{props?.operands.right}</QuestionText>
        </Grid>
        <Grid item>
          <QuestionText>{Operators[4].value}</QuestionText>
        </Grid>
        <Grid item>
          <AnswerInput onChange={changeAnswer} />
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item>
          <TextButton onClick={checkAnswer}>정답 확인</TextButton>
        </Grid>
        <Grid item>
          {
            checked && (
              <QuestionText>{props.calculatedAnswer}</QuestionText>
            )
          }
        </Grid>
        <Grid item>
          {
            checked && (
              <TextButton onClick={() => initializeQuestion()}>다음 문제</TextButton>
            )
          }
        </Grid>
      </Grid>
    </Grid>
  );
};
