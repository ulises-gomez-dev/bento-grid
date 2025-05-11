import "./App.css";
import stars from "./assets/images/illustration-five-stars.webp";
import platforms from "./assets/images/illustration-multiple-platforms.webp";
import schedule from "./assets/images/illustration-consistent-schedule.webp";
import posts from "./assets/images/illustration-schedule-posts.webp";
import followers from "./assets/images/illustration-grow-followers.webp";
import audience from "./assets/images/illustration-audience-growth.webp";
import create from "./assets/images/illustration-create-post.webp";
import ai from "./assets/images/illustration-ai-content.webp";

function App() {
  return (
    <div className="bento-grid">
      <article>
        <h1>
          Social Media <span>10x</span> <em>Faster</em> with AI
        </h1>
        <img src={stars} alt="" />
        <p>Over 4,000 5-star reviews</p>
      </article>
      <article>
        <h2>Manage multiple accounts and platforms.</h2>
        <img src={platforms} alt="" />
      </article>
      <article>
        <h2>Maintain a consistent posting schedule.</h2>
        <img src={schedule} alt="" />
      </article>
      <article>
        <h2>Schedule to social media.</h2>
        <img src={posts} alt="" />
        <p>
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </article>
      <article>
        <h2>Grow followers with non-stop content.</h2>
        <img src={followers} alt="" />
      </article>
      <article>
        <h2>
          {">56% "}
          <span>faster audience growth</span>
        </h2>
        <img src={audience} alt="" />
      </article>
      <article>
        <h2>
          Create and schedule content{" "}
          <span>
            <em>quicker.</em>
          </span>
        </h2>
        <img src={create} alt="" />
      </article>
      <article>
        <h2>Write your content using AI.</h2>
        <img src={ai} alt="" />
      </article>
    </div>
  );
}

export default App;
