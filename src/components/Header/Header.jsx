import React from 'react';
import Pdf from '../../images/AnnieChen_Resume.pdf';
import Typewriter from 'typewriter-effect';
import {
  HeaderWrapper,
  HeaderRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  ImgWrap,
  Img,
  HeaderContainer,
  ButtonWrap,
  TypeWrapper,
} from './styles';
import dark from '../../images/darkImg.jpg';
import light from '../../images/lightImg.jpg'
import Button from '../Button/Button';

const Header = (props) => (
  <>
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderRow>
          <Column1>
            <TextWrapper>
              <Heading lightText>Hi, </Heading>
              <Heading lightText>I&apos;m Annie</Heading>
              <TypeWrapper>
                <Typewriter
                  options={{
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString('Nice to meet you! I\'m a developer and uWaterloo Computer Science student.')
                      .start();
                  }}
                />
              </TypeWrapper>
              <ButtonWrap>
                <Button
                  link={Pdf}
                  aria="Annie Chen Resume"
                  newTab
                  width="150px"
                  content="resumé"
                  backColor={props.themeColor.darkColor}
                  frontColor={props.themeColor.mainColor}
                  textColor={props.themeColor.textColor}
                />
              </ButtonWrap>

            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={props.theme === 'light' ? light : dark} />
            </ImgWrap>
          </Column2>
        </HeaderRow>
      </HeaderWrapper>
    </HeaderContainer>
  </>
);

export default Header;
