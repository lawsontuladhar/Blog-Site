import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="not-found">
      <h2>Sorry!</h2>
      <p>That page cannot be found...</p>
      <Link to="/" className="not-found-link">
        Click to get back to the Homepage.
      </Link>
    </div>
  );
};

export default NotFound404;
