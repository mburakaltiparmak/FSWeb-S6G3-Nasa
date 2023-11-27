/*import "./main.css";*/
import Image from "./image";
import Video from "./video";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 60%;
  margin: 1rem auto;
  border: 2px solid black;
  padding: 1rem;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: ${(props) => (props.type === "video" ? "red" : "green")};
  border: ${(props) =>
    props.type === "video"
      ? "2px" + " " + "solid" + " " + "black"
      : "2px" + " " + "dashed" + " " + "black"};
  box-shadow: 10px 10px 5px lightblue;
  border-radius: 40rem;
  -webkit-box-reflect: below 0px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  margin: 0 0 5rem;
`;

const DetailsContainer = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  &: hover {
    background-color: gray;
  }
`;
const ExpContainer = styled.p`
  font-style: italic;
`;

const Main = (props) => {
  const { data } = props;
  return (
    data && (
      <MainContainer>
        <Title type={data.media_type}>{data.title}</Title>
        {data.media_type == "image" ? (
          <Image url={data.hdurl} />
        ) : (
          <Video url={data.url} />
        )}
        <DetailsContainer>
          <p>{data.copyright}</p>
          <p>{data.date}</p>
        </DetailsContainer>
        <ExpContainer>
          <p>{data.explanation}</p>
        </ExpContainer>
      </MainContainer>
    )
  );
};
export default Main;
