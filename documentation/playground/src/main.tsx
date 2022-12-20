import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import Application from './Application';

const root = ReactDOM.createRoot(
  document.getElementById('aui-react-playground') as HTMLElement
);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);
