import React from "react";

export function useMedia(media) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      const match = window.matchMedia(media).matches;
      setMatches(match);
    }

    window.addEventListener("resize", handleResize);

    // Execute imediatamente para definir o estado inicial
    handleResize();

    // Limpeza
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [media]);

  return [matches];
}
