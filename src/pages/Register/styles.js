import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  width: 315px;
  align-self: center;

  img {
    width: 41px;
    height: 42px;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      width: 100%;
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      margin-bottom: 5px;
    }

    button {
      width: 100%;
      margin-top: 10px;
      font-weight: bold;
      font-size: 16px;
    }

    a {
      margin-top: 25px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      text-decoration: none;
    }

    /* mensagem de validação do Yup */
    span {
      font-weight: bold;
      color: #f94d6a;
      margin-bottom: 5px;
    }
  }
`;
