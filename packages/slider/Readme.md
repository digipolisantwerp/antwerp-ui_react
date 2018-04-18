  ```
  <Slider
    range={false}
    min={0}
    max={100}
    start={20}
    end={80}
    minRange={0}
    step={5}
    unit={'year'}
    tooltips={true}
    onChange={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
    onDragEnd={(start, end) => console.log('start is ' + start + ' and end is ' +  end)}
  />
  ```