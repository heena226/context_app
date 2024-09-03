import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
  return (
    <nav style={{background: theme.ui, color: theme.syntax}}>
        <h1>Context App</h1>
        <div onClick={toggleAuth} style={{cursor: 'pointer'}}>
            {isAuthenticated ? 'Logged In!' : 'Logged Out!'}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

// class Navbar extends Component {
//   render() { 
//     return ( 
//         <ThemeContext.Consumer>{(themeContext) => {
//             return (
//             <AuthContext.Consumer>{(authContext) => {
//                 const {isLightTheme, light, dark} = themeContext;
//                 const theme = isLightTheme ? light : dark;

//                 const {isAuthenticated, toggleAuth} = authContext;
//                 return (
//                     <nav style={{background: theme.ui, color: theme.syntax}}>
//                         <h1>Context App</h1>
//                         <div onClick={toggleAuth} style={{cursor: 'pointer'}}>
//                             {isAuthenticated ? 'Logged In!' : 'Logged Out!'}
//                         </div>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </nav>
//                 )
//             }}
//             </AuthContext.Consumer>
//         )}}
//         </ThemeContext.Consumer>
//     );
//   }
// }
 
export default Navbar;