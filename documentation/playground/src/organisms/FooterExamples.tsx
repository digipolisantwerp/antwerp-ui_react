import { Footer } from '@acpaas-ui/react-components';

export function FooterExamples() {
  const items = [
    { label: '© stad Antwerpen' },
    { label: 'Privacy', href: '#' },
    { label: 'Toegankelijkheid', href: '#' },
    { label: 'Cookie instellingen', href: '#' }
  ];
  return (
    <>
      <h2>Footer</h2>
      <Footer items={items} />
      <Footer backToTop backToTopAriaLabel="Naar omhoog" items={items} />
    </>
  );
}

export default FooterExamples;
