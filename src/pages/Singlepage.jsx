import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Singlepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [type, setType] = useState(null);
  const goBack = () => {
    navigate(-1);
  };
  // const goBack = () => {
  //   navigate("/type", { state: 123 });
  // };
  const goHome = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/type/${id}`)
      .then((res) => res.json())
      .then((data) => setType(data));
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go home</button>
      {type && (
        <>
          <h1>{type.name}</h1>
          <p>{type.name}</p>
          <Link to={`/type/${id}/edit`}>Edit this type</Link>
        </>
      )}
    </div>
  );
};

export { Singlepage };
