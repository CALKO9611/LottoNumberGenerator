import { useState } from "react";
import { styled } from "styled-components";
import getBackgroundColor from "../utils/getBackgroundColor";

const ContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  align-items: center;
  justify-items: center;
  margin: 5px auto;
`;

const Box = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.$backgroundColor || "#fff"};
`;

const ButtonContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  gap: 15px;
`;

const StyledButton = styled.button`
  padding: 10px 10px;
  width: 150px;
  font-size: 18px;
  background-color: ${(props) => props.color || "#4caf50"};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: black;
  }
`;

export default function Content() {
  const initialLottoNumbers = Array.from({ length: 5 }, () =>
    Array(6).fill(null)
  );
  const [lottoNumbers, setLottoNumbers] = useState(initialLottoNumbers);

  const generateLottoNumbers = () => {
    const allNumbers = [];
    for (let i = 0; i < 5; i++) {
      const numbers = [];
      while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
          numbers.push(randomNum);
        }
      }
      numbers.sort((a, b) => a - b);
      allNumbers.push(numbers);
    }
    setLottoNumbers(allNumbers);
  };

  const dongHangSite = () => {
    window.open("https://www.dhlottery.co.kr/");
  };

  const copyToClipboard = () => {
    const textToCopy = lottoNumbers.map((line) => line.join(", ")).join("\n");
    navigator.clipboard.writeText(textToCopy);
    alert("로또 번호가 복사되었습니다.");
  };

  return (
    <ContentComponent>
      <ButtonContainer>
        <StyledButton onClick={generateLottoNumbers}>
          로또 번호
          <br />
          생성 버튼
        </StyledButton>
        <StyledButton onClick={copyToClipboard} color="red">
          로또 번호
          <br />
          복사 버튼
        </StyledButton>
        <StyledButton onClick={dongHangSite} color="blue">
          동행복권
          <br />
          사이트 이동
        </StyledButton>
      </ButtonContainer>
      {lottoNumbers.map((line, lineIndex) => (
        <BoxContainer key={lineIndex}>
          {line.map((number, index) => (
            <Box key={index} $backgroundColor={getBackgroundColor(number)}>
              {number}
            </Box>
          ))}
        </BoxContainer>
      ))}
    </ContentComponent>
  );
}
