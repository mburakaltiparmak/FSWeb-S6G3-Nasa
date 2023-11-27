/*import "./header.css";*/
import { Button } from "reactstrap";
import styled from "styled-components";
const StyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
`;

const StyHeaderImg = styled.img`
  height: 50px;
  width: 50px;
`;

const Header = (props) => {
  const { date, setDate, setIsRandom } = props;

  function changeHandler(e) {
    setDate(e.target.value);
    setIsRandom(false);
  }
  const handleClick = () => {
    setIsRandom(true);
  };
  return (
    <StyHeader>
      <StyHeaderImg src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />

      <Button color="primary" onClick={handleClick}>
        Random Pick
      </Button>

      <input type="date" onChange={changeHandler} value={date} />
    </StyHeader>
  );
};
export default Header;
