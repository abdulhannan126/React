import { people } from './data'

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  );

  return (
    <>
      <article>
        <h1 className='text-3xl'>Scientists</h1>
        <h2 className='text-2xl'>Chemists</h2>
        <ul>
          {chemists.map(person =>
            <>
              <li key={person.id}>
                <p>
                  <b>{person.name}</b>
                  {' ' + person.profession + ' '}
                </p>
              </li>
            </>
          )}
        </ul>

        <h2>Everyone Else</h2>
        <ul>
          {everyoneElse.map(person =>
            <>
              <li key={person.id}>
                <p>
                  <b>{person.name}</b>
                  {' ' + person.profession + ' '}
                </p>
              </li>
            </>
          )}
        </ul>
      </article>
    </>
  )
}


