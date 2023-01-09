import { Button } from '@acpaas-ui/react-components';

export function ButtonExamples() {
  return (
    <>
      <h2>Buttons</h2>
      <Button size="large">Click me!</Button>
      <Button avatar={{ image: 'https://placedog.net/100/100?r' }}>Avatar button</Button>
      <Button size="small" spinner>
        Spinner button
      </Button>
      <Button iconLeft="ai-archive">Icon left</Button>
      <Button iconRight="archive">Icon right</Button>
      <Button outline>Outline</Button>
      <Button transparent>Transparent</Button>
      <Button theme="danger">Danger</Button>
      <Button theme="neutral" outline>
        Neutral outline
      </Button>
      <Button theme="warning" outline>
        Warning outline
      </Button>
      <Button icon="ai-archive"></Button>
    </>
  );
}

export default ButtonExamples;
