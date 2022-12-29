import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import Playground from './Playground';

const root = ReactDOM.createRoot(document.getElementById('aui-react-playground') as HTMLElement);

root.render(
  <StrictMode>
    <Playground />
  </StrictMode>
);
