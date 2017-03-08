import React, { Component } from 'react';
import { AutoComplete } from 'material-ui';

class SearchBar extends Component {
    render() {
        const dataSourceConfig = {
            text: 'name',
            value: 'value'
        };

        const { hotels } = this.props;

        return (
            <AutoComplete
                dataSource={ hotels }
                dataSourceConfig={ dataSourceConfig }
                onNewRequest={ (chosenRequest, index) => this.props.handleNewRequest(chosenRequest, index) }
                filter={ AutoComplete.fuzzyFilter }
                floatingLabelText='Search Hotels'
                />
        );
    }
}

export default SearchBar;