import { styled } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import getBackgroundColor from "../utils/getBackgroundColor";

const LastDrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  margin-bottom: 80px;
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
  background-color: ${(props) => props.$backgroundColor || "#fff"};
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  font-weight: bold;
`;

export default function LastDrawResults() {
  const [lottoData, setLottoData] = useState(null);
  const [error, setError] = useState(null);

  const calculateDrawNumber = () => {
    const firstDrawDate = new Date("2002-12-07");
    const today = new Date();
    const timeDiff = today - firstDrawDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const drawNumber = Math.floor(daysDiff / 7) + 1;
    return drawNumber;
  };

  useEffect(() => {
    const getData = async () => {
      const drawNumber = calculateDrawNumber();
      try {
        const response = await axios.get(`/api${drawNumber}`);
        setLottoData(response.data);
      } catch (error) {
        setError("데이터를 가져오는 중 오류가 발생했습니다.");
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <LastDrawContainer>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : !lottoData ? (
        <div>로또 결과를 불러오는 중입니다...</div>
      ) : (
        <>
          <Title>지난 회차 당첨 번호 ({lottoData.drwNoDate})</Title>
          <NumberList>
            {[
              lottoData.drwtNo1,
              lottoData.drwtNo2,
              lottoData.drwtNo3,
              lottoData.drwtNo4,
              lottoData.drwtNo5,
              lottoData.drwtNo6,
            ].map((number, index) => (
              <NumberBox
                key={index}
                $backgroundColor={getBackgroundColor(number)}
              >
                {number}
              </NumberBox>
            ))}
            <PlusContainer>
              <PlusSign>+</PlusSign>
            </PlusContainer>
            <BonusBox $backgroundColor={getBackgroundColor(lottoData.bnusNo)}>
              {lottoData.bnusNo}
            </BonusBox>
          </NumberList>
        </>
      )}
    </LastDrawContainer>
  );
}
