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
  useEffect(() => {
    // Simulate an API call that returns a promise that takes 5 seconds to resolve
    const fetchData = async () => {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const res = await fetch('/api/hello');
        const actualData = await res.json();
        setData(actualData);
    };
    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
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