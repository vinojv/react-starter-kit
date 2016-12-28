import React, {Component} from 'react';
import {render} from 'react-dom';
import style from './index.css';

class App extends Component {
  constructor(props, context){
    super(props, context);

  }

  render(){
    let todoItems = ["Get Nikitha to do JS tasks", "Designs from sandeep", "Work on Axis app"]
    return (
      <div className= {style.page__wrapper}>
      <div className={style.text__content}>
        <input type="text" className={style.input__text}/>
        <button type="submit" className={style.button}>Submit</button></div>
        <div className = {style.content}>
        <ul className = {style.list}>

          {todoItems.map(item=><li key= {item} className = {style.list__item}>
          
            <div className={style.close__icon}>{item}<span>x</span></div>

          </li>)}
        </ul>
      </div>
      </div>
      )
  }

};

render(
    <App/>,
  document.getElementById('root')
)