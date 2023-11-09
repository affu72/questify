import {ReactNode} from "react";

export default function Main({children}: {children: ReactNode}) {
  return <main className="text-white w-3/4 max-w-2xl">{children}</main>;
}
