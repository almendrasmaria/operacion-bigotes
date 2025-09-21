const CHIPS = [
  { label: "Adopción responsable", color: "green" },
  { label: "Tránsitos",             color: "blue"  },
  { label: "Refugios",              color: "red"   },
  { label: "Contrato",              color: "pink"  },
  { label: "Seguimiento",           color: "green" },
  { label: "Perfiles verificados",  color: "yellow"}
];

function TagWrapRow({ items }) {
  return (
    <ul className="tagwrap-row">
      {items.map(({ label, color }) => (
        <li key={label} className="tagwrap-chip">
          <span className={`tagwrap-dot tagwrap-dot-${color}`} />
          {label}
        </li>
      ))}
    </ul>
  );
}

export default function TagWrap() {
  const ROWS = 3; 
  return (
    <section className="tagwrap">
      <div className="tagwrap-viewport">
        <div className="tagwrap-track">
          {Array.from({ length: ROWS }).map((_, i) => (
            <TagWrapRow key={i} items={CHIPS} />
          ))}
        </div>
      </div>
    </section>
  );
}
