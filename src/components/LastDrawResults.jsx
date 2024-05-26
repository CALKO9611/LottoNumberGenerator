import { styled } from "styled-components";

const LastDrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const NumberList = styled.div`
  display: flex;
  gap: 10px;
`;

const NumberBox = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.backgroundColor || "#fff"};
`;

export default function LastDrawResults() {
  // 임시 번호
  const winningNumbers = [3, 11, 24, 32, 38, 45];

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

  return (
    <LastDrawContainer>
      <Title>지난 회차 당첨 번호</Title>
      <NumberList>
        {winningNumbers.map((number, index) => (
          <NumberBox key={index} backgroundColor={getBackgroundColor(number)}>
            {number}
          </NumberBox>
        ))}
      </NumberList>
    </LastDrawContainer>
  );
}
