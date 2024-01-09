import "./BusinessCard.css";

export default function BusinessCard({ name, description, interests }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <h4>Interests:</h4>
      {interests.map((interest) => (
        <li>{interest}</li>
      ))}
      <button>LinkedIn</button>
      <button>Twitter</button>
    </div>
  );
}
