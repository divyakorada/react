import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setData(json)
            setLoading(false)
        })
        .catch((err) => {
            console.log("Fetch error:", err);
            setLoading(false);
        })

    }, [url]);

    return { data, loading }
}

 const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(initialValue)
    }

    return {count, increment, decrement, reset}
}

const useDebounce = (input, delay) => {
  const [debounced, setDebounced] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(input);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [input, delay]);

  return debounced;
};

export  {useFetch, useCounter, useDebounce}