import { HugeiconsIcon } from "@hugeicons/react";
import {
  CalendarIcon,     
  LocationIcon,     
  MaleSymbolIcon,
  FemaleSymbolIcon,
  InstagramIcon,   
} from "@hugeicons/core-free-icons";

export default function CatCard({ cat }) {
  const { name, sex, ageYears, description, shelterHandle, location, photo } = cat;
  const SexIcon = sex === "female" ? FemaleSymbolIcon : MaleSymbolIcon;
  const sexLabel = sex === "female" ? "Hembra" : "Macho";

  return (
    <article className="cat-card" aria-label={`Gato en adopción: ${name}`}>
      <div className="cat-card-media">
        <img src={photo} alt={`Foto de ${name}`} loading="lazy" />
      </div>

      <div className="cat-card-body">
        <h3 className="cat-card-title">{name}</h3>

        <ul className="cat-card-meta">
          <li className="meta-item">
            <HugeiconsIcon icon={SexIcon} size={16} color="currentColor" strokeWidth={1.5} />
            <span>{sexLabel}</span>
          </li>
          <li className="meta-item">
            <HugeiconsIcon icon={CalendarIcon} size={16} color="currentColor" strokeWidth={1.5} />
            <span>{ageYears} {ageYears === 1 ? "año" : "años"}</span>
          </li>
        </ul>

        <p className="cat-card-desc">{description}</p>
        <hr className="cat-card-divider" />

        <div className="cat-card-footer">
          <div className="shelter">
            <div className="shelter-row">
              <HugeiconsIcon icon={InstagramIcon} size={16} color="currentColor" strokeWidth={1.5} />
              <span className="shelter-handle">@{shelterHandle}</span>
            </div>
            <div className="shelter-row shelter-loc">
              <HugeiconsIcon icon={LocationIcon} size={16} color="currentColor" strokeWidth={1.5} />
              <span>{location}</span>
            </div>
          </div>

          <button type="button" className="btn-adopt">Adoptar</button>
        </div>
      </div>
    </article>
  );
}
