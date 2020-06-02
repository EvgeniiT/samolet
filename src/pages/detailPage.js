import React from 'react';
import { Table } from 'antd';
import { useParams } from 'react-router-dom';


const DATA_NAMES = {
  order: 'Номер региона',
  address: 'Адрес',
  computers: 'Кол-во компьютеров',
  employees: 'Кол-во работников',
  fullname: 'Полное название',
  libraries: 'Кол-во библиотек',
  staff_higheeducated: 'Кол-во работников с высшим образованием'
}

const DetailPage = ({data = []}) => {
  
  const { id } = useParams();
  
  const [regionData = {}] = data.filter(el => el.order === parseInt(id, 10));

  const tableData = [];

  const entries = Object.entries(regionData);
  for (const [key, value] of entries) {
    if (DATA_NAMES[key]) {
      tableData.push({name: DATA_NAMES[key], value})
    }
  };

  console.log('&&&', tableData);

  const columns = [
    {
      title: 'Название',
      dataIndex: 'name',
    },
    {
      title: 'Значение',
      dataIndex: 'value',
    },
  ]

  return (
    <div className="regionDetail">
      <Table 
        columns={columns}
        dataSource={tableData}
        pagination={false}
        rowKey="id"
      />
    </div>
  )
}

export default DetailPage;