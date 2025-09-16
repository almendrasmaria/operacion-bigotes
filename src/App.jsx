import Navbar from "./components/Navbar.jsx";
import CatCard from "./components/CatCard.jsx";
import { cats } from "./data/cats.js";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <h1 className="page-title">Gatos en adopción</h1>
        <div className="cards-grid">
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>

      </main>
    </>
  );
}
