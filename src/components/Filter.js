import React, {useState} from 'react';
import {Input} from 'antd';

const Filter = ({handleFilterChange}) => {
  const [searchText, setSearchText] = useState('');
  const handleChange = e => {
    setSearchText(e.target.value);
    handleFilterChange(e.target.value);
  };
  return (
    <Input type="text" placeholder="Поиск" value={searchText} onChange={handleChange} />
  )
}

export default Filter;