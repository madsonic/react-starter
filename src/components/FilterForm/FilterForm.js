import React, { Component, PropTypes } from 'react';
import { DropDownMenu, MenuItem } from 'material-ui';
import SearchBar from './SearchBar';

class FilterForm extends Component {
  static propTypes = {
    handleNewRequest: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      hotels: [
      { name: 'A', value: 'A' },
      { name: 'B', value: 'B' },
      { name: 'C', value: 'C' },
      { name: 'D', value: 'D' },
      ],
    };
  }


  render() {
    return (
      <div>
        <SearchBar
          hotels={this.state.hotels}
          handleNewRequest={(chosenRequest, index) => {
            this.props.handleNewRequest(chosenRequest, index);
          }}
        />
        <DropDownMenu value={this.state.value} onChange={this.handleSearch}>
          <MenuItem value={1} primaryText="Hotel A" />
          <MenuItem value={2} primaryText="Hotel B" />
          <MenuItem value={3} primaryText="Hotel C" />
          <MenuItem value={4} primaryText="Hotel D" />
          <MenuItem value={5} primaryText="Hotel E" />
        </DropDownMenu>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={4} primaryText="4" />
          <MenuItem value={5} primaryText="5" />
        </DropDownMenu>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={4} primaryText="4" />
          <MenuItem value={5} primaryText="5" />
        </DropDownMenu>
      </div>
    );
  }
}

export default FilterForm;
