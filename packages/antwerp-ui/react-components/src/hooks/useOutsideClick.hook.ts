import { useEffect, useRef } from 'react';

export const useOutsideClick = (onOutsideClick: (event: Node) => void) => {
  const elRef: any = useRef(null);

  const handleClick = (event: any) => {
    if (!(elRef?.current?.contains(event?.target) ?? false)) {
      onOutsideClick(event?.target);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  });

  return { elRef };
};
