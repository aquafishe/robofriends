import React, { Component, Fragment } from 'react';
import CounterButton from './CounterButton';

class Header extends Component{
    // shouldComponentUpdate(nextProps, nextState){
    //     return false;
    // }
    render(){
        console.log('Header render');
        return (
            <Fragment>
                <h1 className='f1'>Robofriends</h1>
                <CounterButton color={'red'}/>
            </Fragment>
       
        )
    }
}

export default Header;