import React, { Component } from 'react'; 
import styles from './main.css';
class Main extends Component{ 
  render(){ 
    return (
       <div className="main">
         <div className="human"><img className="main_image" src="https://github.com/sjb041521/dev/blob/main/%EC%82%AC%EB%9E%8C.png?raw=true" useMap="#link" alt="test"></img>
          <map name="link">
            {/* 팔 */}
            <area shape="rect" coords="11,101,55,290" href="/arm/" target="_blank"/>
            <area shape="rect" coords="211,102,171,293" href="/arm/" target="_blank"/>
            {/* 가슴 */}
            <area shape="rect" coords="73,104,158,197" href="/chest/" target="_blank"/>
            {/*  하체*/}
            <area shape="rect" coords="55,291,176,496" href="/leg/" target="_blank"/>
            {/* 등 */}
            {/* <area shape="rect" coords="55,291,176,496" href="/lat/" target="_blank"/> */}
          </map>

        </div>

       </div> 
     
       ) 
      } 
    } export default Main;
