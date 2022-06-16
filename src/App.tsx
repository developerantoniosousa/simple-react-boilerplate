import React from "react";

type AppProps = {
  name: string;
};

export function App({ name }: AppProps) {
  return <h1>Hello {name}</h1>;
}
