import { Tag, TagList } from '@acpaas-ui/react-components';

export function TagListExamples() {
  return (
    <>
      <h2>Tag Lists</h2>
      <TagList>
        <Tag label="Hello 1" />
        <Tag label="Hello 2" />
        <Tag label="Hello 3" />
        <Tag label="Hello 4" />
      </TagList>
      <TagList>
        <Tag label="I am a lonely tag" iconLeft="mouse" isToggle />
      </TagList>
    </>
  );
}

export default TagListExamples;
