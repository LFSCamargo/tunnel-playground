import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { TunnelProvider } from '@tunneljs/tunnel';
import { storesToPersist } from './tunnel';

ReactDOM.render(
  <TunnelProvider persist={false} storesToPersist={storesToPersist} storage={localStorage}>
    <App />
  </TunnelProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
