import React from 'react';
import SearchBar from './SearchBar';

export default function
    Nav() {
    return (
        <div>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
    )
}