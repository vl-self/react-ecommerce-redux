import { useEffect, useRef } from "react";

export function useInfiniteScroll(callback: () => void) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!bottomRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 1 }
    );

    observerRef.current.observe(bottomRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [callback]);

  return bottomRef;
}
