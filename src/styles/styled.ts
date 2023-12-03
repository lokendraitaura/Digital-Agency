import styled, { keyframes } from "styled-components";
import homeImg from "./images/homeImg.png";
import directorImg from "./images/director.png";
import login from "./images/login.jpg";

export const ParentContainer = styled.div`
  font-family: Plus Jakarta Sans;
  font-style: normal;
  line-height: normal;
  padding: 0%;
  margin: 0%;
  min-width: 100%;
`;

export const Container = styled.div`
  max-width: 76%;
  margin: auto;
  @media (max-width: 1100px) {
    max-width: 98%;
  }
`;
export const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9.3rem;
  margin-top: 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.span`
  max-width:: 21px;
  height: 31px;
  flex-shrink: 0;
`;
export const HeaderTitle = styled.span`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
`;
export const NavItem = styled.span`
  color: #2d3748;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 16px;
  &:hover {
    color: #000;
    border-bottom: 2px solid ${(props) => props?.theme?.colors?.primary};
  }
`;

export const Button = styled.button`
  display: inline-flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  border-color: ${(props) => props?.theme?.colors?.primary};
  font-feature-settings: "liga" off;
  background: ${(props) => props?.theme?.colors?.primary};
  color: ${(props) => props?.theme?.colors?.secondary};
`;

export const HeadingContent = styled.span`
  max-width: 486px;
  color: #2d3748;
  font-size: 60px;
  font-weight: 700;
`;
export const HeadingContentBlue = styled.span`
  color: ${(props) => props?.theme?.colors?.primary};
  font-size: 60px;
  font-weight: 700;
`;

export const ParagraphContent = styled.span`
  max-width: 455px;
  color: #47536b;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-top: 20px;
`;
export const ButtonDiv = styled.div`
  margin-top: 25px;
`;
export const RoundedImage = styled.div`
  width: 523px;
  height: 361px;
  flex-shrink: 0;
  border-radius: 50px;
  margin-right: 2.4rem;
  background: url(${homeImg}), lightgray 50% / cover no-repeat;
`;

export const RoundedImageBadge = styled.div`
  width: 161px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 16px;
  margin-top: 22rem;
  position: absolute;
  margin-left: 26rem;
  display: flex;
  justify-content: center;
  background: ${(props) => props?.theme?.colors?.secondary};
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
`;

export const StartLogo = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const StartParagraph = styled.span`
  color: #1d1d1d;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12px;
  text-transform: uppercase;
  opacity: 0.5;
`;
export const CardText = styled.span`
  color: #1d1d1d;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.2px;
`;
export const CardSubText = styled.span`
  color: #1d1d1d;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.2px;
`;
export const TextCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TextParagraph = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.14px;
  margin-bottom: 15px;
`;
export const SvgStyle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 70px;
  color: #b5afaf;
`;
export const SvgItem1 = styled.span`
  width: 107.863px;
  height: 25.975px;
  color: #b5afaf;
`;
export const SvgItem2 = styled.span`
  width: 115.617px;
  height: 26.088px;
  color: #b5afaf;
`;
export const SvgItem3 = styled.span`
  width: 124.66px;
  height: 26.483px;
  color: #b5afaf;
`;
export const SvgItem4 = styled.span`
  width: 98px;
  height: 55px;
  flex-shrink: 0;
  color: #b5afaf;
  font-size: xx-large;
  font-weight: bold;
  padding-top: 15px;
`;
export const SvgItem5 = styled.span`
  width: 82.108px;
  height: 24.19px;
  transform: rotate(-0.004deg);
  fill: #b5afaf;
  color: #b5afaf;
`;
export const Box = styled.div`
  margin-bottom: 9.3rem;
  margin-top: 2rem;
`;
export const MainHeading = styled.div`
  color: ${(props) => props?.theme?.colors?.globalColor};
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`;
export const P = styled.p`
  color: #47536b;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
`;
export const ServicesBox = styled.div`
  display: flex;
  width: 243px;
  padding: 29px 0px 18px 0px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
`;

export const ServiceLogo1 = styled.span`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`;
export const ServiceLogo2 = styled.span`
  width: 36.001px;
  height: 36px;
  flex-shrink: 0;
`;
export const ServiceLogo3 = styled.span`
  width: 38px;
  height: 34.438px;
  flex-shrink: 0;
`;
export const ServiceLogo4 = styled.span`
  width: 37px;
  height: 35.157px;
  flex-shrink: 0;
`;
export const ServiceBoxHeading = styled.div`
  color: ${(props) => props?.theme?.colors?.globalColor};
  font-size: 20px;
  font-weight: 500;
`;
export const ServiceBoxParagraph = styled.span`
  width: 202px;
  color: ${(props) => props?.theme?.colors?.globalColor};
  font-size: 16px;
  font-weight: 400;
  opacity: 0.5;
`;
export const ServiceContent = styled.span`
  color: #000;
  font-size: 80px;
  font-weight: 600;
  position: absolute;
  left: 8%;
  top: 94rem;
`;
export const DirectorImage = styled.div`
  width: 304px;
  height: 450px;
  flex-shrink: 0;
  background: url(${directorImg}), lightgray 50% / cover no-repeat;
`;
export const FlexDiv = styled.div`
  display: flex;
`;
export const DirectorHeading = styled.div`
  width: 651px;
  color: #47536b;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 53px;
`;

export const DirectorParagraph = styled.p`
  width: 685px;
  color: #47536b;
  font-size: 20px;
  font-weight: 600;
`;
export const DirectorSubP = styled.span`
  color: #47536b;
  font-size: 20px;
  font-weight: 500;
`;

export const Ml6Rem = styled.div`
  margin-left: 6rem;
`;

export const LeftRightArrow = styled.span`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  padding: 0.6rem;
  cursor: pointer;
`;

export const ArrowDiv = styled.div`
  float: inline-end;
  float: inline-end;
  margin-top: 15rem;
`;

export const BlogImage = styled.img`
  margin: 0.7rem;
  width: 366px;
  height: 450px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
`;
export const BlogCard = styled.div`
  width: 322px;
  height: 233px;
  flex-shrink: 0;
  background: #fff;
  margin-left: 3.5rem;
  position: absolute;
  margin-top: -7rem;
`;
export const SmallArrow = styled.span`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  cursor: pointer;
  float: inline-end;
  padding-right: 2rem;
`;
export const BlogHeading = styled.div`
  color: ${(props) => props?.theme?.colors?.globalColor};
  font-size: 24px;
  font-weight: 500;
  margin: 20px;
`;
export const BlogParagraph = styled.p`
  width: 257px;
  color: ${(props) => props?.theme?.colors?.globalColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0px 20px 20px 20px;
  opacity: 0.5;
`;

export const PostButtonDiv = styled.div`
  margin-top: 12rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Footer = styled.div`
  background: #000;
  height: 394px;
  flex-shrink: 0;
`;

export const FooterHeading = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 30px;
  margin-top: 95px;
`;

export const FooterParagraph = styled.p`
  width: 343px;
  height: 98px;
  flex-shrink: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 30px;
`;

export const FooterSvg = styled.span`
  width: 113.127px;
  height: 19.307px;
  flex-shrink: 0;
  cursor: pointer;
  margin-bottom: 30px;
`;
export const FooterDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  text-align: left;
`;
export const FooterCard = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  text-align: left;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${(props) => props?.theme?.colors?.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 0.8s linear infinite;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 43%;
  left: 46%;
`;

export const ErrorStyle = styled.h1`
  color: red;
  text-align: center;
  margin-top: 19rem;
`;
export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${login}), lightgray 100% / cover no-repeat;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

export const FormButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;
export const ContentLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;
export const ErrorMsg = styled.h4`
  color: red;
  margin: auto;
`;
