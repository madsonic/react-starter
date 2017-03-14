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
      filter={AutoComplete.fuzzyFilter}
      floatingLabelText="Search Hotels"
    />
  );
};

SearchBar.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchBar;
