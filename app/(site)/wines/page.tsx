const bottles = [
  {
    name: "Brovia Brea Vigna Ca'Mia Barolo",
    vintage: 2017,
    region: 'Barolo',
    grape: 'Nebbiolo',
    note: 'Mineral, iron, rose petal, dark cherry',
  },
  {
    name: 'Gaja Sito Moresco',
    vintage: 2020,
    region: 'Langhe',
    grape: 'Nebbiolo, Barbera, Merlot',
    note: 'Violet, mulberry, red plum, round',
  },
];

export default function WinesPage() {
  return (
    <article>
      <h2>Wines</h2>
      <p>Recently enjoyed</p>
      <div className="bottles">
        {bottles.map((bottle) => (
          <div className="bottle" key={bottle.name}>
            <div className="bottle-name">{bottle.name}</div>
            <div className="bottle-meta">
              {bottle.vintage} · {bottle.region} · {bottle.grape}
            </div>
            <div className="bottle-note">{bottle.note}</div>
          </div>
        ))}
      </div>
    </article>
  );
}
