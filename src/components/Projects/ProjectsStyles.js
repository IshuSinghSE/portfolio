import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 25px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: 25px;
    width: 100%;
    height: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    border-radius: 25px;
    width: 100%;
    height: 100%;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    border-radius: 25px;
    width: 100%;
    height: 100%;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 25px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  margin-top: 1rem;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 80px;
  height: 3px;
  margin: 0.5rem auto;
  border: 0;
  background: #d0bb57;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  color: ${(props) => (props.disabled ? "#e4e6e7" : "#545657")};
  background: ${(props) =>
    props.disabled
      ? "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"
      : "#22262d"};
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    opacity: 0.9;
    transform: translateY(-3px);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
