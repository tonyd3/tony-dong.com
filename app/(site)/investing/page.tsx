type Investment = {
  name: string;
  backers: string;
  url?: string;
};

const investments: Investment[] = [
  { name: 'Ando', url: 'https://www.ando.so/', backers: 'Accel, Index' },
  { name: 'Arca Wealth', url: 'https://arcawealth.com/', backers: 'GC, Index' },
  { name: 'Blacksmith', url: 'https://blacksmith.sh/', backers: 'Google Ventures, YC' },
  { name: 'Braintrust', url: 'https://www.braintrust.dev/', backers: 'A16Z, Elad Gil, Greylock' },
  { name: 'Console', url: 'https://www.console.com/', backers: 'Thrive' },
  { name: 'Cytronic', url: 'https://cytronic.ai/', backers: 'Slow Ventures' },
  { name: 'EvenUp', url: 'https://www.evenuplaw.com/', backers: 'BCV, Bessemer, LSVP' },
  { name: 'Fifteenth', url: 'https://www.fifteenth.com/', backers: 'GC' },
  { name: 'Groundstack', url: 'https://groundstack.com/', backers: 'KP, Conviction' },
  { name: 'Malta', url: 'https://www.withmalta.com/', backers: 'GC' },
  { name: 'Meridian', url: 'https://www.meridian.ai/', backers: 'A16Z' },
  { name: 'Nango', url: 'https://www.nango.dev/', backers: 'Gradient, YC' },
  { name: 'Pace', url: 'https://withpace.com/', backers: 'Sequoia, Thrive' },
  { name: 'PermitFlow', url: 'https://www.permitflow.com/', backers: 'Accel, Felicis, Initialized, KP' },
  { name: 'Reevo', url: 'https://reevo.ai/', backers: 'Khosla, KP' },
  { name: 'Span', url: 'https://www.span.app/', backers: 'Benchmark, Craft' },
  { name: 'TierZero', url: 'https://www.tierzero.ai/', backers: 'Accel' },
  { name: 'Vybe', url: 'https://www.vybe.build/', backers: 'First Round, YC' },
];

export default function InvestingPage() {
  return (
    <article>
      <h2>Investing</h2>
      <p>
        I invest because I love learning — partnering with great founders is one of the best ways to go deep on
        different industries and ideas.
      </p>
      <p>
        I help the companies I back with intros to investors and customers, and hands-on support on product and
        engineering. If that sounds useful, feel free to reach out.
      </p>
      <ul className="investments">
        {investments.map(({ name, url, backers }) => (
          <li key={name}>
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ) : (
              <span>{name}</span>
            )}
            <span className="backers">{backers}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
