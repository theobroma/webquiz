import { connect } from 'react-redux';
import React from 'react';
import Main from './pages/main';

// export default class MainApp extends React.Component {
//   render () {
//     return (
//       <div className="container">
//         <div className="header" />
//         <main className="main-content">
//           <TableSection />
//         </main>
//         <aside className="right-sidebar">
//           <FormSection />
//           <div>33123</div>
//         </aside>
//       </div>
//     );
//   }
// }
const MainApp = () => (
  <div className="container">
    <h1>Hello</h1>
    <Main />
  </div>
);

export default MainApp;
