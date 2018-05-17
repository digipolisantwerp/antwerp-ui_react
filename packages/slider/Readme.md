### Slider
```
<Slider
  id={"slider-id"}
  label={"Percentage"}
  range={false}
  min={0}
  max={100}
  start={20}
  end={80}
  minRange={0}
  step={5}
  unit={'%'}
  tooltips={false}
  onChange={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
  onDragEnd={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
/>
```

### Slider with tooltips
```
<Slider
  range={false}
  min={0}
  max={100}
  start={50}
  minRange={0}
  step={5}
  unit={'year'}
  tooltips={true}
  onChange={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
  onDragEnd={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
/>
```

### Range slider
```
<Slider
  range={true}
  min={0}
  max={26.55}
  start={0}
  end={26.55}
  minRange={1}
  step={1}
  fixed={2}
  unit={'%'}
  tooltips={true}
  onChange={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
  onDragEnd={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
/>
```