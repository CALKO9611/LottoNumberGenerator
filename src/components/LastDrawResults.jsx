import { styled } from "styled-components";

// 스타일 정의
const LastDrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  margin-bottom: 80px; /* 바닥 마진 추가 */
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
  align-items: center;
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

const BonusBox = styled(NumberBox)``;

const PlusContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PlusSign = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin: 0 5px;
`;

// 컴포넌트 정의
export default function LastDrawResults() {
  // 임시 데이터, 실제 데이터는 props나 API 호출을 통해 전달받을 수 있습니다.
  const winningNumbers = [3, 11, 24, 32, 38, 45];
  const bonusNumber = 8;

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
        <PlusContainer>
          <PlusSign>+</PlusSign>
        </PlusContainer>
        <BonusBox backgroundColor={getBackgroundColor(bonusNumber)}>
          {bonusNumber}
        </BonusBox>
      </NumberList>
    </LastDrawContainer>
  );
}
