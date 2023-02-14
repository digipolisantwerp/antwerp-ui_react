import { Button, Flyout } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function FlyoutExamples() {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  return (
    <div className="u-margin-bottom">
      <h2>Flyouts</h2>
      <p>First is OPEN: {`${isFirstOpen}`}</p>
      <Flyout open={isFirstOpen} onStateChange={setIsFirstOpen} trigger={<Button>Hello controlled</Button>}>
        World!
      </Flyout>
      <Flyout trigger={<h1>Hello</h1>}>World!</Flyout>

      <Flyout open trigger={<h1>I am open and uncontrolled</h1>}>
        By default...
      </Flyout>
      <Flyout scrollable size="small" orientation="upper-left" trigger={<Button>Upper left SMALL & SCROLL</Button>}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
        expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
        quod maxime placeat facere possimus.
      </Flyout>
      <Flyout trigger={<Button>Rich Text</Button>}>
        <h1>Hello</h1> I am <b>rich</b> text!
      </Flyout>
    </div>
  );
}

export default FlyoutExamples;
