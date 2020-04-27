import * as React from 'react';
import Select from 'react-select'
import AsyncSelect from 'react-select/async';

type Option = { label: string, value: string };
type Options = Array<Option>;
type IProps = {
  /**
   * Synchronous options array. Items should have label and value properties.
   * Values will automatically get filtered when the user types in an input value.
   */
  options?: Array<Options>;
  /**
   * Asynchronous options array. Values are either retrieved by calling a callback or by
   * providing a promise. Filtering is not built in and should be performed manually.
   */
  asyncOptions?: (inputValue: string, callback: (options: Options) => void) => void | (inputValue: string) => Promise;
}

export class MultiSelect extends React.Component<IProps> {
  render() {
    return (
      <React.Fragment>
        {this.props.options && <Select theme={(t) => this.setTheme(t)} isMulti options={this.props.options}/>}
        {this.props.asyncOptions &&
        <AsyncSelect theme={(t) => this.setTheme(t)} isMulti loadOptions={this.props.asyncOptions}/>}
      </React.Fragment>
    );
  }

  setTheme(theme) {
    return {
      ...theme,
      borderRadius: 0,
      spacing: {
        ...theme.spacing,
        controlHeight: 48
      }
    };
  }
}
