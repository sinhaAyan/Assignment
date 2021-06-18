import Header from './Components/Header/Header';
import './App.css';
import Body from './Components/Body/Body'
//import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     ImageData: state.image
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }

export default App;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
