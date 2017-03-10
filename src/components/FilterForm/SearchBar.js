import React, { PropTypes } from 'react';
import { AutoComplete } from 'material-ui';

const SearchBar = (props) => {
  const dataSourceConfig = {
    text: 'name',
    value: 'value',
  };

  const { hotels } = props;

  return (
    <AutoComplete
      dataSource={hotels}
      dataSourceConfig={dataSourceConfig}
      onNewRequest={(chosenRequest, index) => props.handleNewRequest(chosenRequest, index)}
      filter={AutoComplete.fuzzyFilter}
      floatingLabelText="Search Hotels"
    />
  );
};

SearchBar.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNewRequest: PropTypes.func.isRequired,
};

export default SearchBar;
