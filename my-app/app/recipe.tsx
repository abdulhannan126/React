function App({ drinkers }) {
  return (
    <>
      <ol>
        <li>Boil {drinkers} cups of water.</li>
        <li>
          Add {drinkers} supoons of tea and {0.5 * drinkers} spoons of spice.
        </li>
        <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ol>
    </>
  );
}

export default function Reacipe() {
  return (
    <section>
      <h1 className="text-3xl">spiced chai recipe</h1>
      <h2 className="text-2xl">for two</h2>
      <App drinkers={2} />
      <h2>for a gathering</h2>
      <App drinkers={5} />
    </section>
  );
}

let guest = 0;

export function Cup() {
 
  guest = guest + 2;
  return <h2 className="text-4xl text-red-600">Tea cup for guest #{guest}</h2>;
}




