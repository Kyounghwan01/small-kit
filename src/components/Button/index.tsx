import styled, { css } from "styled-components";

interface IButton {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

// Button아니고 index로 하면 storybook에서 설명 못읽어옴
const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
}: IButton) => {
  return (
    <ButtonWrap
      type="button"
      style={{ backgroundColor }}
      size={size || "small"}
      backgroundColor={backgroundColor || "white"}
      primary={primary || false}
    >
      {label}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button<{
  size: "small" | "medium" | "large";
  backgroundColor: string;
  primary: boolean;
}>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) =>
    props.size === "small"
      ? "10px 16px"
      : props.size === "medium"
      ? "11px 20px"
      : "12px 24px"};

  font-size: ${(props) =>
    props.size === "small"
      ? "12px"
      : props.size === "medium"
      ? "14px"
      : "16px"};

  ${(props) =>
    props.primary
      ? css`
          color: white;
          background-color: #1ea7fd;
        `
      : css`
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `}
`;

export default Button;
