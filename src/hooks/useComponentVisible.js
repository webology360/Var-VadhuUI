import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible = false) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (
      isComponentVisible &&
      ref.current &&
      !ref.current.contains(event.target)
    ) {
      setIsComponentVisible(!isComponentVisible);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, !isComponentVisible);
    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside,
        !isComponentVisible
      );
    };
  });

  return [ref, isComponentVisible, setIsComponentVisible];
}
