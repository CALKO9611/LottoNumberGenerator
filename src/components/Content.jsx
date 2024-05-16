import { useState } from "react";
import { styled } from "styled-components";

const ContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 80px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  align-items: center;
  justify-items: center;
  margin: 50px auto;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.backgroundColor || "#fff"};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
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

  const getBackgroundColor = (number) => {
    if (number >= 1 && number <= 10) {
      return "#f2b720";
    } else if (number >= 11 && number <= 20) {
      return "#4072ac";
    } else if (number >= 21 && number <= 30) {
      return "#de4c0e";
    } else if (number >= 31 && number <= 40) {
      return "#9195a4";
    } else if (number >= 41 && number <= 45) {
      return "#13be4b";
    } else {
      return "#fff";
    }
  };

  const dongHangSite = () => {
    window.open("https://www.dhlottery.co.kr/");
  };

  const copyToClipboard = () => {
    const textToCopy = lottoNumbers.join(", ");
    navigator.clipboard.writeText(textToCopy);
    alert("로또 번호가 복사되었습니다.");
  };

  return (
    <ContentComponent>
      <h2>이번 생은 로번생 살자!</h2>
      <BoxContainer>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Box
            key={index}
            backgroundColor={getBackgroundColor(lottoNumbers[index - 1])}
          >
            {lottoNumbers[index - 1]}
          </Box>
        ))}
      </BoxContainer>
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
    </ContentComponent>
  );
}
