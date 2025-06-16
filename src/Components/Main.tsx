import type { ReactNode } from "react";

export default function Main({children}: {children: ReactNode}) {
  return (
    <div className="main">
      {children}
    </div>
  )
}
