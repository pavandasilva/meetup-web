import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1020px;
  padding: 0 40px;

  div {
    display: flex;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      font-weight: bold;

      svg {
        margin-right: 10px;
      }
    }

    h1 {
      font-size: 32px;
      font-weight: bold;
    }
  }
`;
export const Lista = styled.ul`
  li {
    margin-top: 50px;

    display: inline-block;
    width: 100%;

    button {
      display: flex;
      align-items: center;
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      justify-content: space-between;
      min-height: 60px;
      padding: 0 30px;

      &:hover {
        background: ${darken(0.02, '#281f2f')};
      }

      strong {
        font-size: 18px;
      }

      span {
        display: flex;
        align-items: center;
        padding: 0px;
        margin: 0px;
        font-size: 16px;
        color: #999;
        margin-right: 30px;
      }
    }

    & + li {
      margin-top: 10px;
    }
  }
`;
