import { useState } from "react";

const FAQ_ITEMS = [
  { q: "¿Cómo puedo adoptar un gato?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lorem a felis interdum placerat. Suspendisse potenti." },
  { q: "¿Qué requisitos debo cumplir para adoptar?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula turpis vel quam feugiat gravida." },
  { q: "¿Puedo ser hogar de tránsito en lugar de adoptar?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor orci id libero sodales suscipit." },
  { q: "¿Los gatos tienen controles veterinarios previos?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies felis id semper fringilla. Maecenas et lorem id libero condimentum faucibus."},
  { q: "¿Cómo es el seguimiento después de la adopción?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus augue vel ante faucibus." },
  { q: "¿Qué pasa si el gato no se adapta a mi hogar?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida ligula in arcu condimentum." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null); 
  const toggle = (idx) => setOpenIndex((cur) => (cur === idx ? null : idx));

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <p className="faq-eyebrow"><span className="faq-dot" />Preguntas frecuentes</p>
          <h2 className="faq-title"><span className="highlight">Preguntas</span> frecuentes sobre la adopción</h2>
          <p className="faq-subtitle">Aquí respondemos las dudas más comunes para ayudarte a entender cómo funciona Operación Bigotes.</p>
        </div>
        <div className="faq-grid">
          {FAQ_ITEMS.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={q} className={`faq-item${isOpen ? " open" : ""}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  {q}
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-answer">
                  <p>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
