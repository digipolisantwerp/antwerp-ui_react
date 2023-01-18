import { Breadcrumb } from '@acpaas-ui/react-components';
import React from 'react';

const BreadcrumbExamples = () => (
  <>
    <h1>Breadcrumbs</h1>
    <Breadcrumb
      items={[
        { label: 'Hello', href: 'https://www.google.be' },
        { label: 'World', href: 'https://www.wikipedia.be' },
        { label: '!!!' }
      ]}
    />
    <Breadcrumb
      items={[
        { label: 'Hello', href: 'https://www.google.be' },
        { label: 'World', href: 'https://www.wikipedia.be' }
      ]}
    />
    <Breadcrumb
      items={[
        { label: 'Hello', href: 'https://www.google.be' },
        { label: 'World', href: 'https://www.wikipedia.be' }
      ]}
      title={{ label: 'I am a default title' }}
    />
    <Breadcrumb
      items={[
        { label: 'Hello', href: 'https://www.google.be' },
        { label: 'World', href: 'https://www.wikipedia.be' }
      ]}
      title={{ label: 'I am an h2 title', tag: 'h2', className: 'h4' }}
    />

    <Breadcrumb
      items={[
        { label: 'Hello', href: 'https://www.google.be' },
        { label: 'World', href: 'https://www.wikipedia.be' }
      ]}
      renderLinkFunction={(link) => <a href="https://www.google.be">LINK: {link.href} is now GOOGLE</a>}
    />
  </>
);

export default BreadcrumbExamples;
