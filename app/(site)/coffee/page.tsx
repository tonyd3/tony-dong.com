const coffees = [
  {
    roaster: 'Bird and Bear',
    url: 'https://birdandbearcoffee.com',
    name: 'King Arthur Geisha',
    notes: 'Jasmine, peach, honey',
  },
  {
    roaster: 'Hydrangea Coffee Roasters',
    url: 'https://hydrangea.coffee/',
    name: 'Finca Potosi "xo"',
    notes: 'Rum, pineapple, oak',
  },
  {
    roaster: 'Ritual Coffee Roasters',
    url: 'https://ritualcoffee.com/',
    name: 'La Dalia',
    notes: 'Honeydew, green grapes, cacao',
  },
  {
    roaster: 'Hydrangea Coffee Roasters',
    url: 'https://hydrangea.coffee/',
    name: 'Mora Azul Blueberry',
    notes: 'Blueberry, raspberry, milk chocolate',
  },
];

export default function CoffeePage() {
  return (
    <article>
      <h2>Coffees</h2>
      <p>Recently enjoyed</p>
      <div className="bottles">
        {coffees.map((coffee, i) => (
          <div className="bottle" key={i}>
            <div className="bottle-name">
              <a href={coffee.url} target="_blank" rel="noopener noreferrer">
                {coffee.roaster}
              </a>
              {' · '}
              {coffee.name}
            </div>
            <div className="bottle-note">{coffee.notes}</div>
          </div>
        ))}
      </div>
    </article>
  );
}
