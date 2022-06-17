import { useRef } from "react";

export function Input(props) {
  const ref = useRef(null);

  return <input ref={ref} {...props} />;
}
