import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import BlogPost from "./components/BlogPost";
import LandingPage from "./components/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/page",
    element: <LandingPage />
  },
  {
    path: "/post",
    element: <BlogPost />
  }
]);

function App() {
  const [posts, setPosts] = useState([
    [
      {
        title: "My New Website",
        body: "Lorem ipsum dolor sit amet consectetur",
        author: "mario",
        id: 1
      },
      {
        title: "Welcome to my blogs",
        body: "Lorem ipsum dolor sit amet consectetur",
        author: "luigi",
        id: 2
      },
      {
        title: "Add new blogs",
        body: "Lorem ipsum dolor sit amet consectetur",
        author: "yoshi",
        id: 3
      }
    ]
  ]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  };

  function handleNewBlog() {}

  console.log(posts);
  return (
    <div>
      <header className="header">
        <h1 className="header--name">Hello Blog</h1>
        <button onClick={handleNewBlog} className="header--newButton">
          Add a New Blog
        </button>
      </header>
      <LandingPage />
      <div>
        {posts.map((post) => (
          <BlogPost
            userId={post.userId}
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

<RouterProvider router={router} />;
export default App;
