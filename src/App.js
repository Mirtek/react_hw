import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
      // Активный таб
      activeTabIndex: 1,
      tabs: [
        {id: 1, name: 'one', component: (<Tab>1</Tab>)},
        // Просто передаем строку
        {id: 2, name: 'two', component: 'Привет я строка которая будет переданна как дочерний элемент'},
        // Передаем stateless компонтент который не принимает никаких дочерних элементов
        {id: 3, name: 'three', component: (<Comp1/>)},
        // Передаем выражение
        {id: 4, name: 'four', component: 120+500-300},
      ]
  }

  showTabContent = (id) => {
    this.setState({activeTabIndex : id });
    //console.log(id);
  }

  render() {
    let {showTabContent} = this;
    let {activeTabIndex} = this.state;
    let {component} = this.state.tabs[activeTabIndex];
    return (
      <div className="App">
          <ul>
          {
            this.state.tabs.map( (tab, key) => {
              return <span className={
                        activeTabIndex === key ? "bold" : ""}>
                     <Tab name={tab.name} key={key} id={key} action={showTabContent} />
                     </span>; 
            })
          }
          </ul>  
            <TabContent component={component}/>
      </div>
    );
  }
}

const Comp1 = (props) => {
  return ( <div>HMMMMM</div>);
}

const Tab = (props) => {
  console.log(props);

  const handleClick = () => {
    props.action(props.id);
  }

  return( <li className="tab-style" onClick={handleClick}>{props.name}
          </li>
  )
}

const TabContent = (props) => {
  return(
    <div>Tab content {props.component}</div>      
  )
}

export default App;
