import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 50px;

  form {
    padding: 0 40px;
    width: 100%;
    max-width: 1020px;
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

    hr {
      width: 100%;
      margin-top: 30px;
      margin-bottom: 15px;
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }

    button {
      display: flex;
      align-items: center;
      align-self: flex-end;
      margin-top: 10px;
      font-weight: bold;
      font-size: 16px;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
