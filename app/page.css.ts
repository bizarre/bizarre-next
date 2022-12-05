import { style, globalStyle } from "@vanilla-extract/css";
export const container = style({
  padding: "0 2rem",
});

export const main = style({
  minHeight: "100vh",
  padding: "4rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const footer = style({
  display: "flex",
  flex: 1,
  padding: "2rem 0",
  borderTop: "1px solid #eaeaea",
  justifyContent: "center",
  alignItems: "center",
});

export const footerA = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
});

export const title = style({
  margin: 0,
  lineHeight: "1.15",
  fontSize: "4rem",
  fontStyle: "normal",
  fontWeight: 800,
  letterSpacing: "-0.025em",
});

export const titleA = style({
  textDecoration: "none",
  color: "#0070f3",
});

export const titleAHover = style({
  textDecoration: "underline",
});

export const titleAndDescription = style({
  textAlign: "center",
});

export const description = style({
  margin: "4rem 0",
  lineHeight: "1.5",
  fontSize: "1.5rem",
});

export const code = style({
  background: "#fafafa",
  borderRadius: "5px",
  padding: "0.75rem",
  fontSize: "1.1rem",
  fontFamily:
    "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
});

export const grid = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "1200px",
});

export const card = style({
  margin: "1rem",
  padding: "1.5rem",
  textAlign: "left",
  color: "inherit",
  textDecoration: "none",
  border: "1px solid #eaeaea",
  borderRadius: "10px",
  transition: "color 0.15s ease, border-color 0.15s ease",
  maxWidth: "300px",
});

export const cardHover = style({
  color: "#0070f3",
  borderColor: "#0070f3",
});

export const cardH2 = style({
  margin: "0 0 1rem 0",
  fontSize: "1.5rem",
});

export const cardP = style({
  margin: 0,
  fontSize: "1.25rem",
  lineHeight: "1.5",
});

export const logo = style({
  height: "1em",
  marginLeft: "0.5rem",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
