import React from 'react';

export const Row = ({item}) => {
  return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.amount}</td>
      </tr>
  );
};
export default Row;
