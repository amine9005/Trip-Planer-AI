import { JSX } from "react";

export interface Suggestions {
  title: string;
  icon: JSX.Element;
}

export interface DisplayType {
  display: "horizontal" | "vertical";
}
