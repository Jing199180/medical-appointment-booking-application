import { useEffect, useRef } from "react";

export function useOutSideClick(handler, isCapturing) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click outside detected");
          handler();
        }
      }

      document.addEventListener("click", handleClick, isCapturing);
      //true為使用在捕捉階段的事件處理器
      return () =>
        document.removeEventListener("click", handleClick, isCapturing);
    },
    [handler, isCapturing]
  );

  return ref;
}
