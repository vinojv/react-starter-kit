import React, {Component} from 'react';
import {render} from 'react-dom';
import style from './index.css';

const Header = ()=> <div className={style.heading}>ToDo Item</div>
const Footer = ()=>
(
      <div className={style.footer}>
            <span className={style.footer__text}>&copy copyright</span>
      </div>)
 
const Navigation=()=>
  (
     <div className={style.content__aside}>

        <ul className={style.content__aside__list}>
            <li className={style.content__aside__list__item}>item__1 
            </li>
            <li className={style.content__aside__list__item}>item__2
            </li>
            <li className={style.content__aside__list__item}>item__3 
            </li>
        </ul>
    </div>
  )

  const Content=({ todoItems })=>
(        
  <div className={style.content__main}>
    <div className={style.content__body}>
      <div className={style.text__content}>
        <input type="text" value={"display"} id="inputid" className={style.input__text}/>
       
        <button type="submit" id="buttonid" className={style.button}>Submit</button>
      </div>
      <div className = {style.content}>
        <ul className = {style.list}>
           {todoItems.map(item=><li key= {item} id="listid" className = {style.list__item}>
           <div className={style.close__icon}>{item}<span className={style.close__icon__tag}>x</span></div>
            </li>)}
        </ul>
    </div>
    </div>
  </div>
)


class App extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      todoItems: ["Get Nikitha to do JS tasks", "Designs from sandeep", "Work on Axis app"]
    }
    //this.state = {
     // display: ["hello"]
    //}

  };
  render(){
    return (
      <div className= {style.page__wrapper}>
          <Header></Header>
          <div className={style.content__wrapper}>
             
            <Content 
               addTo = {function(todoItems){
                // todoItems.push(item)
               }}

              todoItems = {this.state.todoItems}></Content>
          </div>
          <Footer></Footer>
      </div>
  )}
  }


render(
    <App/>,
    document.getElementById('root')