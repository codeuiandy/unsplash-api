import React, { useState } from "react";
import style from "styled-components";
import showPasswordIcon from "./showPassword.png";
import hidePasswordIcon from "./hidePassEyeIcon.png";
import "./lib.css";
export const Center = style.div`
display:flex;
justify-content: center;
align-items:center;
margin:auto;
width:${(props) => (props.width ? props.width : "100%")};
height:${(props) => (props.height ? props.height : "100%")};
`;

export const SpaceBetween = style.div`
display:flex;
justify-content: space-between;
align-items:${(props) => (props.alignItem ? props.alignItem : "")};
padding:${(props) => (props.padding ? props.padding : "")};
margin:auto;
width:${(props) => (props.width ? props.width : "100%")};
height:${(props) => (props.height ? props.height : "100%")};
`;

export const Vertical = style.div`
display:flex;
align-items:${(props) => (props.alignItem ? props.alignItem : "center")};
flex-direction:${(props) => (props.dir ? props.dir : "column")};
padding:${(props) => (props.padding ? props.padding : "")};
margin:auto;
width:${(props) => (props.width ? props.width : "100%")};
height:${(props) => (props.height ? props.height : "100%")};
`;

export const MoveEnd = style.div`
display:flex;
justify-content: flex-end;
align-items:flex-end;
margin:auto;
width:${(props) => (props.width ? props.width : "100%")};
height:${(props) => (props.height ? props.height : "100%")};
`;

export const Padding = style.div`
padding:${(props) => (props.padding ? props.padding : "10px")};
`;

export const Margin = style.div`
margin:${(props) => (props.margin ? props.margin : "10px")};
`;

export const Container = ({
  margin,
  padding,
  display,
  width,
  height,
  background,
  border,
  className,
  flexDir,
  children,
}) => {
  return (
    <div
      className={className}
      style={{
        margin: margin ? margin : "",
        padding: padding ? padding : "",
        display: display ? display : "",
        flexDir: flexDir ? flexDir : "",
        width: width ? width : "",
        height: height ? height : "",
        background: background ? background : "",
        border: border ? border : "",
      }}
    >
      {children}
    </div>
  );
};

export const H1 = ({
  padding,
  margin,
  color,
  fontSize,
  width,
  lineHeight,
  children,
  action,
  className,
  fontWeight,
  textAlign,
}) => {
  return (
    <h1
      className={className}
      style={{
        padding: padding ? padding : "",
        margin: margin ? margin : "",
        color: color ? color : `var(--mainTextColor)`,
        fontSize: fontSize ? fontSize : "35px",
        lineHeight: lineHeight ? lineHeight : "",
        width: width ? width : "",
        fontWeight: fontWeight ? fontWeight : "",
        textAlign: textAlign ? textAlign : "",
      }}
      onClick={action}
    >
      {children}
    </h1>
  );
};

export const P = ({
  padding,
  margin,
  color,
  fontSize,
  width,
  lineHeight,
  children,
  action,
  className,
  fontWeight,
  textAlign,
}) => {
  return (
    <p
      className={className}
      style={{
        padding: padding ? padding : "",
        margin: margin ? margin : "",
        color: color ? color : `var(--mainTextColor)`,
        fontSize: fontSize ? fontSize : "25px",
        lineHeight: lineHeight ? lineHeight : "",
        width: width ? width : "",
        fontWeight: fontWeight ? fontWeight : "",
        textAlign: textAlign ? textAlign : "",
      }}
      onClick={action}
    >
      {children}
    </p>
  );
};

export const Input = ({
  placeHolder,
  type,
  className,
  required,
  action,
  label,
}) => {
  const [showUserPassword, setshowUserPassword] = useState(false);
  return (
    <React.Fragment>
      {label ? (
        <label
          htmlFor=""
          className={`${
            className ? className : "no-extra-labelSt"
          } textInputDefaultsLabel`}
        >
          {label}
        </label>
      ) : (
        ""
      )}

      <input
        placeholder={placeHolder}
        onChange={action}
        type={type}
        required={required}
        className={`${
          className ? className : "no-extra-inputSt"
        } textInputDefaultsPassword`}
        type={type}
      />
    </React.Fragment>
  );
};

export const InputPasswordWithIcon = ({
  placeHolder,
  type,
  className,
  required,
  action,
  label,
}) => {
  const [showUserPassword, setshowUserPassword] = useState(false);
  return (
    <React.Fragment>
      {label ? (
        <label
          htmlFor=""
          className={`${
            className ? className : "no-extra-labelSt"
          } textInputDefaultsLabel`}
        >
          {label}
        </label>
      ) : (
        ""
      )}

      <input
        placeholder={placeHolder}
        onChange={action}
        type={type}
        required={required}
        className={`${
          className ? className : "no-extra-inputSt"
        } textInputDefaultsPassword`}
        type={`${showUserPassword ? "text" : "password"}`}
      />

      <div className="showPasswordIconImgWrap">
        <img
          onClick={() => setshowUserPassword(!showUserPassword)}
          src={showUserPassword ? showPasswordIcon : hidePasswordIcon}
          alt=""
        />
      </div>
    </React.Fragment>
  );
};

export const Button = ({
  children,
  action,
  background,
  color,
  border,
  className,
  padding,
  width,
  height,
  fontSize,
  
}) => {
  return (
    <button
      onClick={action}
      className={`${className ? className : ""} defaultButtionStyle`}
      style={{
        backgroundColor: background ? background : "",
        color: color ? color : "",
        border: border ? border : "",
        padding: padding ? padding : "",
        height: height ? height : "",
        width: width ? width : "",
        fontSize: fontSize ? fontSize : "",
      
      }}
    >
      {children}
    </button>
  );
};
