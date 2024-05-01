import { useState } from "react";
import { styled } from "styled-components";

const ContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  margin-top: 50px;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-items: center;
  justify-items: center;
`;

const Box = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid #333;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled.button`
  margin-top: 50px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: ${(props) => props.color || "#4caf50"};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export default function Content() {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  const generateLottoNumbers = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    numbers.sort((a, b) => a - b);
    setLottoNumbers(numbers);
  };

  return (
    <ContentComponent>
      <BoxContainer>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Box key={index}>{lottoNumbers[index - 1]}</Box>
        ))}
      </BoxContainer>
      <ButtonContainer>
        <StyledButton onClick={generateLottoNumbers}>
          로또 번호
          <br />
          생성 버튼
        </StyledButton>
        <StyledButton color="blue">
          다른 번호
          <br />
          예시 버튼
        </StyledButton>
      </ButtonContainer>
    </ContentComponent>
  );
}
