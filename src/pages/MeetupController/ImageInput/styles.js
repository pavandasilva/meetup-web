import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    margin-bottom: 20px;

    strong {
      margin-top: 10px;
      font-size: 20px;
      color: #999;
    }
  }

  &:hover {
    svg {
      fill: ${lighten(0.1, '#999')};
    }

    strong {
      color: ${lighten(0.1, '#999')};
    }
  }
`;
