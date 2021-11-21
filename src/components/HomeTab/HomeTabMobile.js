import React, { useEffect, useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const HomeTabMobile = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, rows } = useTable(
    { columns, data },
    useSortBy
  );

  useEffect(() => {}, [data]);
  return (
    <table className="HomeTab-mobile " {...getTableProps()}>
      {rows.map((row, i) => {
        return (
          <div className="HomeTab-mobile_table color">
            <tbody key={row.id} {...getTableBodyProps()}>
              <tr>
                <td className="HomeTab-column-header ">Дата</td>
                <td className="HomeTab-column">{data[i].date}</td>
              </tr>
              <tr>
                <td className="HomeTab-column-header">Тип</td>
                <td className="HomeTab-column">{data[i].type}</td>
              </tr>
              <tr>
                <td className="HomeTab-column-header">Коментарий</td>
                <td className="HomeTab-column">{data[i].comment}</td>
              </tr>
              <tr>
                <td className="HomeTab-column-header">Категория</td>
                <td className="HomeTab-column ">{data[i].category}</td>
              </tr>
              <tr>
                <td className="HomeTab-column-header">Сумма</td>
                <td className="HomeTab-column pink green">{data[i].amount}</td>
              </tr>
              <tr>
                <td className="HomeTab-column-header">Баланс</td>
                <td className="HomeTab-column">{data[i].balance}</td>
              </tr>
            </tbody>
          </div>
        );
      })}
    </table>
  );
};
export { HomeTabMobile };
