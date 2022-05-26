import { createRoot } from 'react-dom/client';
import TagManager from 'react-gtm-module';
import { HelmetProvider } from 'react-helmet-async';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './styles/css/index.css';

TagManager.initialize({
  gtmId: process.env.REACT_APP_GTM_ID!,
  auth: process.env.REACT_APP_GTM_AUTH,
  preview: process.env.REACT_APP_GTM_PREVIEW,
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

serviceWorker.register();
