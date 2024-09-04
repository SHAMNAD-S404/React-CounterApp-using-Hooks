import React,{useState,useEffect} from "react";
import './counter.css';

const Counter = ()=> {

    const [count,setCount] = useState(1)
    const [userData,setUserData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError]     = useState(null)

    useEffect(()=> {

        const fetchData = async ()=> {

            setLoading(true);
            setError(null)

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);
                if (!response.ok) {
                    throw new Error('failed to fetch data')
                }

                const data = await response.json()
                setUserData(data)


            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    },[count])

    const increment = () => {
        setCount(prevCount => (prevCount < 10 ? prevCount + 1 : prevCount)); // Limiting the count to 10
      };
    
      const decrement = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount)); // Limiting the count to 1
      };
    
      return (
        <div className="counter-container">
          <h1 className="counter-title">Counter: {count}</h1>
          <div className="button-container">
            <button onClick={increment} className="counter-button increment-button">
              Increment
            </button>
            <button onClick={decrement} className="counter-button decrement-button">
              Decrement
            </button>
          </div>
    
          <div className="user-info">
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {userData && (
              <div>
                <h2>User Information</h2>
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Website:</strong> {userData.website}</p>
              </div>
            )}
          </div>
        </div>
      );
}

export default Counter