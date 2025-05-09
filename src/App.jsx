import "./App.css";
import FiveStars from "./assets/images/illustration-five-stars.webp";

function App() {
  return (
    <div className="bento-grid">
      <article id="five-stars">
        <h1>Social Media 10x Faster with AI</h1>
        <img src={FiveStars} alt="" />
        <p>Over 4,000 5-star reviews</p>
      </article>
      <article id="multiple-platforms"></article>
      <article id="consistent-schedule"></article>
      <article id="schedule-posts-card"></article>
      <article id="grow-followers"></article>
      <article id="audience-growth"></article>
      <article id="create-post"></article>
      <article id="ai-content"></article>
    </div>
  );
}

export default App;
