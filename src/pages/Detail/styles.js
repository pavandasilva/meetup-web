import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1020px;
  padding: 0 40px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  background: ${props => props.background};
  margin-left: 10px;

  span {
    margin-left: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  img {
    border-radius: 4px;
    background: #d7d7d7;
    width: 100%;
  }

  p,
  span {
    line-height: 32px;
    font-size: 18px;
  }

  p {
    margin-top: 20px;
  }

  span {
    width: 100%;
    margin-top: 40px;
  }

  footer {
    display: flex;
    align-items: flex-end;
    margin-top: 40px;
    width: 100%;
    font-size: 16px;
    color: #999;

    span {
      vertical-align: bottom;
    }

    svg {
      margin-right: 10px;

      & + svg {
        margin-left: 30px;
      }
    }
  }
`;
