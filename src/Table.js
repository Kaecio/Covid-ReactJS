import React from "react";
import { formatNumbers } from './utils';

function Table({ countries }) {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map(({ country, cases }) => (
            <tr key={country}>
              <td>{country}</td>
              <td>
                <strong>{formatNumbers(cases)}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
