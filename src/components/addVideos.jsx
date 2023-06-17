import "../styles/addVideos.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddVideo = () => {
  let navigate = useNavigate();

  let image =
    "https://cdn.dribbble.com/users/1040798/screenshots/15685874/media/aa9588469e19517c2b94b1addd15d11d.gif";
    // http://1.bp.blogspot.com/-zLFi5ivqCsc/UQf-RLCTJkI/AAAAAAAAAWM/cT-mgRzO_9s/s1600/Old+dude.jpg
  let thumbnail = useRef(null);
  let title = useRef(null);
  let channelName = useRef(null);
  let views = useRef(null);
  let link = useRef(null);

  let upload = async (e) => {
    e.preventDefault();
    let data = {
      thumbnail: thumbnail.current.value,
      title: title.current.value,
      channelName: channelName.current.value,
      views: views.current.value,
      link: link.current.value,
    };
    const response = await fetch("http://localhost:4000/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Video Uploaded Successfully");
      navigate("/");
    } else {
      alert("Video not uploaded");
    }
  };
  return (
    <section>
      {/* <div className="image">
        <img src={image} alt="" />
      </div> */}
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={upload}>
            <h2>Upload Videos</h2>
            <div className="inputbox">
              <input ref={thumbnail} type="url" required />
              <label>Thumbnail</label>
            </div>
            <div className="inputbox">
              <input ref={title} type="text" required />
              <label>Title</label>
            </div>
            <div className="inputbox">
              <input ref={link} type="url" required />
              <label>Link</label>
            </div>
            <div className="inputbox">
              <input ref={channelName} type="text" required />
              <label>Channel Name</label>
            </div>
            <div className="inputbox">
              <input ref={views} type="text" required />
              <label>Views</label>
            </div>
            <input className="button" type="submit" value="Upload Video" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddVideo;
