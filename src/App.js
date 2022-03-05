import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import Breakfasts from './views/Breakfasts';
import Details from './views/Details';

const App = () => (
    <Router>
        <MainTemplate>
            <Routes>
                <Route exact path='/' element={ <Details /> } />
                <Route path='/breakfasts' element={ <Breakfasts /> } />
            </Routes>
        </MainTemplate>
    </Router>
);

export default App;
