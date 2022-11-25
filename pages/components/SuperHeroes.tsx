import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const SuperHeroes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        console.log(res);
        setData(res?.data);
        setTimeout(() => {
          setLoading(false);
        }, );
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setLoading(false);
        }, );
      })
  }, []);
  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <nav>
        {" "}
        <ul>
          <li>
            <Link href="/components/Home">Home</Link>
          </li>
          <li>
            <Link href="/components/RQSuperHeroes">RQSuperHeroes</Link>
          </li>
          <li>
            <Link href="/components/SuperHeroes">SuperHero</Link>
          </li>
        </ul>
      </nav>
      <h1>SuperHeroes</h1>
      {data.map((user: any) => {
        return <div key={user?.id}>{user?.name}</div>;
      })}
    </>
  );
};

export default SuperHeroes;
