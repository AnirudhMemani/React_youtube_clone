import { useEffect, useState } from "react";
import "../styles/videos.css";

const Videos = () => {
  let [videos, setVideos] = useState([]);

  let remove = (id, name) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete the video "${name}"?`
    );

    if (confirmation) {
      fetch(`http://localhost:4000/videos/${id}`, {
        method: "DELETE",
      });
      alert(`${name} video was successfully deleted`);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/videos");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchData();
  }); // Empty dependency array to run the effect only once

  return (
    <div className="videos">
      <h1>
        Featured<span>Videos</span>
      </h1>
      <div className="container">
        {videos.map((data) => {
          return (
            <div className="video" key={data.id}>
              <a className="link" rel="noreferrer" target="_blank" href={data.link}>
              <img src={data.thumbnail} alt={data.title} />
              <h3>{data.title}</h3>
              <p>{data.channelName}</p>
              <p>{data.views}</p>
              </a>
              <button onClick={() => remove(data.id, data.channelName)}>
                Remove Video
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
