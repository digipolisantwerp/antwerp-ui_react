### Regular slider
```
<Slider
  id={"slider-1"}
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
  id={"slider-2"}
  range={false}
  min={0}
  max={100}
  start={50}
  minRange={0}
  step={5}
  unit={' year'}
  tooltips={true}
  onChange={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
  onDragEnd={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
/>
```

### Range slider
```
<Slider
  id={"slider-3"}
  range={true}
  min={0}
  max={50}
  start={12.24}
  end={26.52}
  minRange={1}
  step={1}
  fixed={2}
  unit={'%'}
  tooltips={true}
  onChange={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
  onDragEnd={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
/>
```
