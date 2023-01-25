import { PageIndicator } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function PageIndicatorExamples() {
  const [activePage, setActivePage] = useState('page-1');
  const [activePage2, setActivePage2] = useState('page-2-2');
  const [activePage3, setActivePage3] = useState('page-1-3');
  return (
    <>
      <h1>Page indicator</h1>
      <div className="u-margin-top">
        <PageIndicator
          activePage={activePage}
          pages={[{ id: 'page-1' }, { id: 'page-2' }, { id: 'page-3' }, { id: 'page-4' }]}
          onPageChange={setActivePage}
        />
      </div>
      <div className="u-margin-top">
        <PageIndicator
          size="small"
          activePage={'page-1-1'}
          pages={[{ id: 'page-1-1' }, { id: 'page-2-1' }, { id: 'page-3-1' }]}
          onPageChange={() => true}
        />
      </div>
      <div className="u-margin-top">
        <PageIndicator
          size="large"
          activePage={activePage2}
          pages={[{ id: 'page-1-2' }, { id: 'page-2-2' }]}
          onPageChange={setActivePage2}
        />
      </div>
      <div className="u-margin-top">
        <div role="tablist">
          <PageIndicator
            size="large"
            activePage={activePage3}
            pages={[
              { id: 'page-1-3', ariaControls: 'panel-1' },
              { id: 'page-2-3', ariaControls: 'panel-2' },
              { id: 'page-3-3', ariaControls: 'panel-3' }
            ]}
            onPageChange={setActivePage3}
          />
          <div id="panel-1" role="tabpanel" aria-labelledby="page-1-3" hidden={activePage3 !== 'page-1-3'}>
            <p>Content for the first panel</p>
          </div>
          <div id="panel-2" role="tabpanel" aria-labelledby="page-2-3" hidden={activePage3 !== 'page-2-3'}>
            <p>Content for the second panel</p>
          </div>
          <div id="panel-3" role="tabpanel" aria-labelledby="page-3-3" hidden={activePage3 !== 'page-3-3'}>
            <p>Content for the third panel</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageIndicatorExamples;
