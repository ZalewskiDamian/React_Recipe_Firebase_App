import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CaloriesProvider } from './context';
import MainTemplate from './templates/MainTemplate';
import Breakfasts from './views/Breakfasts';
import Home from './views/Home';
import Dinners from './views/Dinners';
import Lunchs from './views/Lunchs';

const App = () => (
    
    <CaloriesProvider>
        <Router>
            <MainTemplate>
                    <Routes>
                        <Route exact path='/' element={ <Home /> } />
                        <Route path='/breakfasts' element={ <Breakfasts /> } />
                        <Route path='/lunchs' element={ <Lunchs /> } />
                        <Route path='/dinners' element={ <Dinners /> } />
                    </Routes>
            </MainTemplate>
        </Router>
    </CaloriesProvider>
);

export default App;
