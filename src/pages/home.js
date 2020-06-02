import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';
import Filter from '../components/Filter';

const Home = ({data}) => {
  const [tableData, setTableData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => setTableData(data), [data]);

  const columns = [
    {
      title: 'Регион',
      dataIndex: 'territory',
    },
    {
      title: 'Количество библиотек',
      dataIndex: 'libraries',
      sorter: (a, b) => a.libraries - b.libraries,
    },
  ]
  
  const history = useHistory();

  const search = (list, searchText) => {
    if (searchText.length === 0) {
      return list;
    }
    return list.filter(el => {
      return el.territory.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  const filteredData = search(tableData, searchText);

  const handleFilterChange = (searchText) => {
    setSearchText(searchText);
  }

  return (
    <div className="regionsList">
      <h1>Таблица количества библиотек по регионам</h1>
      <div className="regionsList__filter">
        <Filter className="regionsList__filter" handleFilterChange={handleFilterChange} />
      </div>
        <Table 
          columns={columns}
          dataSource={filteredData}
          pagination={false}
          rowKey="order"
          onRow={(record) => ({ onClick: () => history.push(`/subject/${record.order}`)})}
        />
    </div>
  )
}

export default Home;