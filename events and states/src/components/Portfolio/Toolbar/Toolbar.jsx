import React from 'react';
import generateRandomStr from '../../../utils/generateRandomString';
import './style.css';

class Toolbar extends React.Component {
  constructor(params) {
     super(params)
    this.filters = params.filters;
    this.state = {
      selected: params.selected
    };
    this.onSelectFilter = params.onSelectFilter;
  }

selectedChange(value) {
  this.onSelectFilter(value);
  this.setState({selected: value})
}
  render() {

    return (
       <ul className="list-btns list-reset">
       {
         this.filters.map((item) => {
           return (
             <li className="list-btns__item" key={generateRandomStr(9)}>
               <button className={`list-btns__btn ${item === this.state.selected ? 'filter-active' : ''}`}
               onClick={() => this.selectedChange(item)}
               >{item}</button>
             </li>
           )
         })
       }
     </ul>
    )
  }
}

export default Toolbar;
