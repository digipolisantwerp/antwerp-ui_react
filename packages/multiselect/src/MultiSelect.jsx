import * as React from 'react';
import Select from 'react-select'
import AsyncSelect from 'react-select/async';

type Option = { label: string, value: string };
type Options = Array<Option>;
type IProps = {
  options?: Array<Options>;
  asyncOptions?: (inputValue: string, callback: (options: Options) => void) => void | (inputValue: string) => Promise;
}

export class MultiSelect extends React.Component<IProps> {
  render() {
    return (
      <div>
        {this.props.options && <Select isMulti options={this.props.options}/>}
        {this.props.asyncOptions && <AsyncSelect isMulti loadOptions={this.props.asyncOptions}/>}
      </div>
    );
  }
}
