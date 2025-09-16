import { Calendar, MapPin, BadgeCheck, Mars, Venus } from "lucide-react";

export default function CatCard({ cat }) {
  const { name, sex, ageYears, description, shelterHandle, location, photo } = cat;
  const SexIcon = sex === "female" ? Venus : Mars;
  const sexLabel = sex === "female" ? "Hembra" : "Macho";

  return (
    <article className="cat-card" aria-label={`Gato en adopción: ${name}`}>
      <div className="cat-card-media">
        <img src={photo} alt={`Foto de ${name}`} loading="lazy" />
      </div>

      <div className="cat-card-body">
        <h3 className="cat-card-title">{name}</h3>

        <ul className="cat-card-meta">
          <li className="meta-item"><SexIcon size={16} /> <span>{sexLabel}</span></li>
          <li className="meta-item"><Calendar size={16} /> <span>{ageYears} {ageYears === 1 ? "año" : "años"}</span></li>
        </ul>

        <p className="cat-card-desc">{description}</p>
        <hr className="cat-card-divider" />

        <div className="cat-card-footer">
          <div className="shelter">
            <div className="shelter-row"><BadgeCheck size={16} /><span className="shelter-handle">@{shelterHandle}</span></div>
            <div className="shelter-row shelter-loc"><MapPin size={16} /><span>{location}</span></div>
          </div>

          <button type="button" className="btn-adopt">Adoptar</button>
        </div>
      </div>
    </article>
  );
}
