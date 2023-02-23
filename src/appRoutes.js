import HomePage from "generalComponents/HomePage";
import { App as App1 } from "hw-01-components/App";
import { App as App21 } from "hw-02-feedback/App";
import { App as App22 } from "hw-02-phonebook/App";
import App31 from "hw-03-phonebook/App";
import App32 from "hw-03-image-finder/App";
import App4 from "hw-04-images/App";
import App5 from "hw-05-movies/App";

import Notification from "generalComponents/Notification";

export const baseURL='/goit-react-hw'
export const appRoutes = [
  {
    path: '/',
    label: 'Home',
    element: <HomePage/>
  },
  {
    path: '/*',
    label: false,
    element: <Notification label='404 Not Found' message="You probably made a mistake in your pathname. Now send me your card number, cvv and expiery date)"/>
  },
  {
    path: '/hw-01-components',
    label: '1',
    shortDescription:'components',
    description: 'Декілька базових реакт компонентів',
    element: <App1/>
  },
  {
    path: '/hw-02-feedback',
    label: '2.1',
    shortDescription:'feedback form',
    description: 'Віджет відгуків, використовує два функціональних компонента з хуками',
    element: <App21/>
  },
  {
    path: '/hw-02-phonebook',
    label: '2.2',
    shortDescription:'phonebook',
    description: 'Книга контактів, використовує функціональні компоненти та local storage',
    element: <App22/>
  },
  {
    path: '/hw-03-phonebook',
    label: '3.1',
    shortDescription:'phonebook',
    description: 'Книга контактів, використовує класові компоненти та local storage',
    element: <App31/>
  },
  {
    path: '/hw-03-image-finder',
    label: '3.2',
    shortDescription:'gallery',
    description: 'галерея картинок, використовує Pixabay Api та класові компоненти',
    element: <App32/>
  },  
  {
    path: '/hw-04-images',
    label: '4',
    shortDescription:'image gallery',
    description: 'галерея картинок, використовує Pixabay Api та функціональні компоненти',
    element: <App4/>
  },  
  {
    path: '/hw-05-movies/*',
    label: '5',
    shortDescription:'movie gallery',
    description: 'застосунок пошуку та зберігання фільмів',
    element: <App5/>
  },
];

export default appRoutes;
