"use client";

import { useOnChainData } from "../../hooks/useOnChainData";

function LoadingRow({ colSpan }: { colSpan: number }) {
  return (
    <tr>
      <td colSpan={colSpan}>Loading...</td>
    </tr>
  );
}

export function PerpMarginTable() {
  const { data } = useOnChainData();
  const headings = [
    "Index",
    "Perpetuals",
    "Initial Margin (Ratio / Leverage)",
    "Maintenance Margin (Ratio / Leverage)",
    "IMF Factor",
  ];

  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!data ? (
          <LoadingRow colSpan={headings.length} />
        ) : (
          data.perpMargin.map((row) => (
            <tr key={row.index}>
              <td>{row.index}</td>
              <td>{row.name}</td>
              <td>{row.initial}</td>
              <td>{row.maintenance}</td>
              <td>{row.imfFactor}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
