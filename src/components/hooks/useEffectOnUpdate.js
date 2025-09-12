import React from "react"

export default function useEffectOnUpdate(clbckfun, dep){
  const firstRender = React.useRef(true)
  React.useEffect(() => {
      if (firstRender.current) {
          firstRender.current = false
          console.log("i ran first")
      } else {
          clbckfun()
      }
  }, dep)
}