'use strict';

/**
 * Function accepts object props, which must have keys: name (str), age (int), hobbies (arr of str)
 * Returns HTML for render with React displaying info about the person and if they should vote!
 * @param {*} obj{name, age, hobbies(array of strings)}
 * @returns render for JSX
 */

function Person({ name, age, hobbies }) {
  return (
    <div>
      <h2>{
        name.length > 8
          ? name.slice(0, 6) + "..."
          : name
      }</h2>
      <h3>Age: {age}</h3>
      <p>
        Learn some information about this Person
      </p>
      <h3>
        {
          age >= 18
            ? "please go vote!"
            : "you must be 18"
        }
      </h3>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map(h => <li>{h}</li>)}
      </ul>
    </div>
  );
}
