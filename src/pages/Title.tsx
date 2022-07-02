import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextButton, TitleText } from '../components/atoms';



export const Title: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <TitleText>매일매일 치매방지</TitleText>
      <TextButton onClick={() => history.push(`/questions`)}>시작</TextButton>
    </div>
  );
};
