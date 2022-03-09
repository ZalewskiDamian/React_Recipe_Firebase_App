import { HashRouter, Routes, Route } from 'react-router-dom';
import { CaloriesProvider } from './context';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import Breakfasts from './views/Breakfasts';
import Home from './views/Home';
import Dinners from './views/Dinners';
import Lunchs from './views/Lunchs';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => (
    <HashRouter>
        <ThemeProvider theme={theme}>
            <CaloriesProvider>
                <GlobalStyle />
                <Sidebar />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/breakfasts' element={ <Breakfasts /> } />
                    <Route path='/lunchs' element={ <Lunchs /> } />
                    <Route path='/dinners' element={ <Dinners /> } />
                </Routes>
            </CaloriesProvider>
        </ThemeProvider>
    </HashRouter>
);

export default App;
