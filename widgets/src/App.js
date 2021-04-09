import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers.',
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components.',
  },
];

const options = [
  { label: 'the color red', value: 'red' },
  { label: 'the color green', value: 'green' },
  { label: 'a shade of blue', value: 'blue' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button> */}
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* {showDropdown ? (
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
          selectionLabel='color'
        />
      ) : null} */}
      <Translate />
    </div>
  );
};

export default App;