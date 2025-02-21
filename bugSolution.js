```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple example.</p>      
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent(){
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        try {
          await new Promise(resolve => setTimeout(resolve, 5000));
          const res = await fetch('/api/hello');
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const actualData = await res.json();
          setData(actualData);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>My component</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the server!' });
}
```