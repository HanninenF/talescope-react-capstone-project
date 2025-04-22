//vänta med API-anrop tills användaren slutat skriva

import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout); //cleanup
  }, [value, delay]);
  return debouncedValue;
}
