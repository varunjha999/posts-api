import React, { useEffect, useState } from "react";
import "./App.css";

const Posts = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/posts").then((res) => {
      res.json().then((data) => {
        console.log(data);
        setData(data);
      });
    });
  }, []);
  return (
    <div>
      <h1>Posts API Data</h1>
      {data &&
        data.posts.map((item, index) => {
          return (
            <table key={index}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
    </div>
  );
};

export default Posts;
