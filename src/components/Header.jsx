import styled from "styled-components";

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 2px solid #ccc;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #333;
  }
`;

export default function Header() {
  return (
    <HeaderComponent>
      <img src="/public/LottoNumberGeneratorIcon" alt="로번생 로고" />
      <h1>로번생</h1>
    </HeaderComponent>
  );
}
