import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1020px;
  padding: 0 40px;

  img {
    width: 32px;
    height: 32px;
  }

  aside {
    display: flex;

    button {
      font-weight: bold;
    }
  }
`;

export const Profile = styled.div`
  align-self: center;
  margin-right: 20px;

  p {
    text-align: right;
    font-size: 14px;
    color: #999;
  }

  strong {
    display: block;
  }

  a {
    text-decoration: none;
  }
`;
