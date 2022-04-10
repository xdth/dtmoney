import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">  $15,000</td>
            <td>Development</td>
            <td>2022/04/09</td>
          </tr>
          <tr>
            <td>Office rent</td>
            <td className="withdraw">- $5,000</td>
            <td>Real Estate</td>
            <td>2022/04/19</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}