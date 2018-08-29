```
const TagListItem = require('.').TagListItem;
<TagList>
    <TagListItem
        value="standard"
        key="standard"
        closable={false}
    />
    <TagListItem
        value="standard closable"
        key="standardClosable"
        closable={true}
        onClick={() => console.log('removing tag')}
    />
    <TagListItem
        value="with icon"
        key="withIcon"
        closable={false}
        icon="check"
    />
     <TagListItem
        value="with buttonclass"
        key="withButtonClass"
        closable={false}
        icon="check"
        buttonClass="success"
    />
</TagList>
```