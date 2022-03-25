import home from '../../assets/images/home.png';
import breakfasts from '../../assets/images/breakfast.png';
import lunch from '../../assets/images/lunch.png';
import dinner from '../../assets/images/dinner.png';
import calendar from '../../assets/images/calendar.png';

export const sidebarData = [
    {
        title: 'Strona główna',
        icon: home,
        link: '/'
    },
    {
        title: 'Plan diety',
        icon: calendar,
        link: '/dietplan'
    },
    {
        title: 'Śniadania',
        icon: breakfasts,
        link: '/breakfasts'
    },
    {
        title: 'Obiady',
        icon: lunch,
        link: '/lunches'
    },
    {
        title: 'Kolacje',
        icon: dinner,
        link: '/dinners'
    },
];