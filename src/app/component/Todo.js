import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';
import { fetchTodos } from '../actionCreator/actionCreator';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    //this.handleGetTodo = this.handleGetTodo.bind(this);
  }
  componentDidMount() {
    console.log('Props', this.props);
    console.log('Component Mounted', this.props);
  }
  //handleGetTodo() {}
  render() {
    return (
      <>
        <h2>My Todos</h2>
        <button onClick={this.props.fetchTodos}>GetTodo</button>
        {this.props.todos?.todos?.map((todo, index) => {
          return <p key={index}>{todo.title}</p>;
        })}

        <br />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTodos }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
