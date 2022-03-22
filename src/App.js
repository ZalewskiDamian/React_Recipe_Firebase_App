import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import Breakfasts from './views/Breakfasts';
import Home from './views/Home';
import Dinners from './views/Dinners';
import Lunches from './views/Lunches';
import Sidebar from './components/Sidebar/Sidebar';
import Dietplan from './views/Dietplan';

const App = () => (
    <HashRouter>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Sidebar />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/dietplan' element={ <Dietplan /> } />
                <Route path='/breakfasts' element={ <Breakfasts /> } />
                <Route path='/lunches' element={ <Lunches /> } />
                <Route path='/dinners' element={ <Dinners /> } />
            </Routes>
        </ThemeProvider>
    </HashRouter>
);

export default App;
