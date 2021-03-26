<div class="m-alert d-alert m-alert--wcag u-margin-bottom">
    <p>If you provide an `icon` on a `<TagListItem></TagListItem>`, you have to provide the `AriaLabelIcon` property to be WCAG 2.1 AA compliant.<br />
    If you set `closable` to true, you can provide an `AriaLabelClose`, it will default to 'Close' if none is provided.</p>
</div>

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
        icon="ai-check-1"
    />
     <TagListItem
        value="with buttonclass"
        key="withButtonClass"
        closable={false}
        icon="ai-check-1"
        buttonClass="success"
    />
</TagList>
```
