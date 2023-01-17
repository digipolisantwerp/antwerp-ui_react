import { Copyright, Image } from '@acpaas-ui/react-components';

export function ImageExamples() {
  return (
    <>
      <h1>Image</h1>
      <div className="u-margin-top-xs"></div>
      <Image src="https://placedog.net/400/300?r" alt="A random dog" />
      <Image src="https://placedog.net/400/300?r" alt="A random dog">
        <Copyright sign="©" label="With link" link="https://www.google.be" qa="image copyright" />
      </Image>
      <Image src="https://placedog.net/400/300?r" alt="A random dog">
        <Copyright sign="™" label="Without link" qa="image copyright" />
      </Image>
    </>
  );
}

export default ImageExamples;
