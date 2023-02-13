import { Header } from '@acpaas-ui/react-components';

export function HeaderExamples() {
  return (
    <div style={{ marginBottom: '100px' }}>
      <h2>Header</h2>
      <Header buttons={[{ id: 'hello', label: 'Hello', outline: true }]} />
    </div>
  );
}

export default HeaderExamples;
