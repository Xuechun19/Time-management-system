import React from 'react';
import './App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class App extends React.Component 
{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Tabs defaultActiveKey="search" style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white'}}>

                <Tab eventKey="Home" title="Home" style={{paddingTop: '5vh'}}></Tab>
                <Tab eventKey="My Work" title="My Work" style={{paddingTop: '5vh'}}></Tab>



            </Tabs>
    
        )
    }


}
export default App;