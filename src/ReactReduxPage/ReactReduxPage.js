import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
//connect获取store

export default connect(
    //mapStateToProps
    (state, ownProps)=>{
        console.log(ownProps)

        return {count: state}
    },
    // mapDispatchToProps Object
    // {
    //     add: () => {return {type: 'ADD'}},
    //     // minus : () => {return {type: 'MINUS'}}
    // },
    //funtion
    dispatch => {
        // const res = {
        //     add: () => dispatch({type: "ADD"}),
        //     minus: () => dispatch({type: "MINUS"})
        // };

        let res = {
            add: () => ({type: "ADD"}),
            minus: () => ({type: "MINUS"})
        };
        res = bindActionCreators(res, dispatch);
        return {
            dispatch,
            ...res
        }
    },
    //mergeProps
    (stateProps, dispatchProps, ownProps) => {
        return 
    }
) (
    class ReactReduxPage extends Component {
        constructor(props) {
            super(props)
            this.state = {
                     
            }
    
        }
    
        render() {
            console.log(this.props);
            const {count, dispatch, add, minus} = this.props;
            return (
                <div>
                    <h3>ReactReduxPage</h3>
                    <p>{count}</p>
                    {/* <button onClick={() => dispatch({type: "ADD"}) }> use dispatch</button> */}
                    <button onClick={add}>use matDispatchToProps add</button>
                    <button onClick={minus}>use matDispatchToProps minus</button>
                </div>
            )
        }
    }
)


