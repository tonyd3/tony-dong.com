const bottles = [
  {
    name: "Brovia Brea Vigna Ca'Mia Barolo",
    url: 'https://brovia.net/',
    vintage: 2017,
    region: 'Barolo',
    grape: 'Nebbiolo',
    note: 'Mineral, iron, rose petal, dark cherry',
  },
  {
    name: 'Gaja Sito Moresco',
    url: 'https://gaja.com/',
    vintage: 2020,
    region: 'Langhe',
    grape: 'Nebbiolo, Barbera, Merlot',
    note: 'Violet, mulberry, red plum, round',
  },
  {
    name: 'Margaux du Chateau Margaux',
    url: 'https://www.chateau-margaux.com/en/vins/margaux-du-chateau-margaux/2015',
    vintage: 2015,
    region: 'Margaux',
    grape: 'Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot',
    note: 'Cassis, violet, cedar, graphite',
  },
  {
    name: "Salon Cuvée 'S' Le Mesnil Blanc de Blancs Brut",
    url: 'https://www.champagne-salon.fr/en',
    vintage: 2013,
    region: 'Champagne',
    grape: 'Chardonnay',
    note: 'Chalk, lemon confit, white flowers, saline',
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
            <div className="bottle-name">
              {bottle.url ? (
                <a href={bottle.url} target="_blank" rel="noopener noreferrer">
                  {bottle.name}
                </a>
              ) : (
                bottle.name
              )}
            </div>
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
