import { Button, SocialButton } from '@acpaas-ui/react-components';

export function ButtonExamples() {
  return (
    <div className="u-margin-bottom">
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

      <h2>Social buttons</h2>
      <SocialButton type="facebook" href="#" ariaLabel="Facebook" />
      <SocialButton type="twitter" href="#" ariaLabel="Twitter" />
      <SocialButton type="linkedin" href="#" ariaLabel="Linkedin" />
      <SocialButton type="instagram" href="#" ariaLabel="Instagram" />
      <SocialButton type="snapchat" href="#" ariaLabel="Snapchat" />
      <ul className="m-button-list">
        <li>
          <SocialButton type="facebook" href="#" ariaLabel="Facebook" />
        </li>
        <li>
          <SocialButton type="twitter" href="#" ariaLabel="Twitter" />
        </li>
        <li>
          <SocialButton type="linkedin" href="#" ariaLabel="Linkedin" />
        </li>
        <li>
          <SocialButton type="instagram" href="#" ariaLabel="Instagram" />
        </li>
        <li>
          <SocialButton type="snapchat" href="#" ariaLabel="Snapchat" />
        </li>
      </ul>
      <div className="u-flex u-padding">
        <SocialButton type="facebook" href="#" uniform ariaLabel="Facebook" />
        <SocialButton type="twitter" href="#" uniform ariaLabel="Twitter" />
        <SocialButton type="linkedin" href="#" uniform ariaLabel="Linkedin" />
        <SocialButton type="instagram" href="#" uniform ariaLabel="Instagram" />
        <SocialButton type="snapchat" href="#" uniform ariaLabel="Snapchat" />
      </div>
      <div className="u-bg-black u-flex u-padding">
        <SocialButton type="facebook" href="#" negative uniform ariaLabel="Facebook" />
        <SocialButton type="twitter" href="#" negative uniform ariaLabel="Twitter" />
        <SocialButton type="linkedin" href="#" negative uniform ariaLabel="Linkedin" />
        <SocialButton type="instagram" href="#" negative uniform ariaLabel="Instagram" />
        <SocialButton type="snapchat" href="#" negative uniform ariaLabel="Snapchat" />
      </div>
    </div>
  );
}

export default ButtonExamples;
