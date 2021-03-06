import styled from 'styled-components';

export const OtherContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.mainColor};
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
`;

export const OtherWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 400px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 580px;
  }
`;

export const OtherRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr 2fr;
  align-items: center;
  grid-template-areas: \'col2 col1\';

  @media screen and (max-width: 768px) {
      grid-template-areas: \'col2 col2\' \'col1 col1\';
  }
`;

export const Column1 = styled.div`
  padding: 0 15px 0 0px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0 15px 0 15px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 30px 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 780px;
  padding-top: 0;
  padding-bottom: 24px;
`;

export const ImgWrap = styled.div` 
  max-width: 250px;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 350px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  background-color: lightblue;
  border: 3px solid ${(props) => props.theme.textColor};
  border-radius: 20px;
  transition: 0.3s ease-in-out;
`;

export const TopWrapper = styled.div`
  align-text: left;
  width: 100%;
  max-width: 1100px;
  padding-left: 40px;
  margin-bottom: -35px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

