import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();


  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
      //setOpen(!open);
    });
  }, []);

  const renderedOptions = options.map((option) => {
    if (option != selected) {
      return (
        <div
          key={option.name}
          className="item"
          onClick={() => onSelectedChange(option) }>
          {option["name"]}
        </div>
      )
    };
  });

  return (
    <div>
      <br/>
      <div ref={ref} className="ui form my-left" >
        <div className="field">
          <label className="label my-left"> Select a Model</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
            >
            <i className="dropdown icon"></i>
            <div className="text"> {selected.name} </div>
            <div className= {`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Dropdown;
