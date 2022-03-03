import Button from "@mui/material/Button";
import styledComponent from "styled-components";

const ButtonDesign = styledComponent(Button)`
    width: ${(props) => props.width};
    height: 40px;
    background:  ${(props) => (props.back ? "#000" : "#fff")};
    border-radius: 5px;
    font-style: normal;
    font-size: 16px;
    text-transform: none;
    color: ${(props) => (props.back ? "#fff" : "#000")};
    transition: all .6s ease;
    border: 1px solid #000;
    margin-left: ${(props) => props.margin_left};
    &:hover{
        background: ${(props) => (props.back ? "#000" : "#000")};
        color: ${(props) => (props.back ? "#fff" : "#fff")};
    }
    
`;

const ButtonStyle = (props) => {
  const { btnName, width, margin_left, back } = props;

  return (
    <ButtonDesign width={width} margin_left={margin_left} back={back}>
      {btnName}
    </ButtonDesign>
  );
};

export default ButtonStyle;
