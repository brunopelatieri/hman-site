export interface PriceRow {
  service: string;
  included: string;
  price: string;
}

interface PriceTableProps {
  rows: PriceRow[];
  caption?: string;
}

/**
 * Tabela de preços responsiva — em telas < 720px vira cards empilhados
 * (requisito P0 do checklist mobile: nunca scroll horizontal forçado).
 */
export function PriceTable({ rows, caption }: PriceTableProps) {
  return (
    <table className="price-table">
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          <th scope="col">Serviço</th>
          <th scope="col">O que está incluso</th>
          <th scope="col">Valor (mão de obra)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.service}>
            <td className="service-name">{row.service}</td>
            <td data-label="O que está incluso">{row.included}</td>
            <td data-label="Valor (mão de obra)">
              <span className="price">{row.price}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
