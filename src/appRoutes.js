import Notification from "generalComponents/Notification";
import { App as App1 } from "hw-01-components/App";
import { App as App21 } from "hw-02-feedback/App";
import { App as App22 } from "hw-02-phonebook/App";
import App31 from "hw-03-phonebook/App";
import App32 from "hw-03-image-finder/App";

export const baseURL='/goit-react-hw'
export const appRoutes = [
  {
    path: '/',
    label: 'Home',
    element: <Notification label='This is a homework page' message="Select a task you want to see in the navigation menu"/>
  },
  {
    path: '/*',
    label: false,
    element: <Notification label='404 Not Found' message="You probably made a mistake in your pathname. Now send me your card number, cvv and expiery date)"/>
  },
  {
    path: '/hw-01-components',
    label: '1',
    description: 'hw-01-components',
    element: <App1/>
  },
  {
    path: '/hw-02-feedback',
    label: '2.1',
    description: '',
    element: <App21/>
  },
  {
    path: '/hw-02-phonebook',
    label: '2.2',
    description: '',
    element: <App22/>
  },
  {
    path: '/hw-03-phonebook',
    label: '3.1',
    description: '',
    element: <App31/>
  },
  {
    path: '/hw-03-image-finder',
    label: '3.2',
    description: '',
    element: <App32/>
  },
];

export default appRoutes;
