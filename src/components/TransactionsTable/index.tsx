import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
            <td className="deposit">$15,000</td>
            <td>Development</td>
            <td>2022/04/09</td>
          </tr>
          <tr>
            <td>Office rent</td>
            <td className="withdraw">- $5,000</td>
            <td>Real Estate</td>
            <td>2022/04/19</td>
          </tr>
          {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
              {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
              }).format(transaction.amount)}
            </td>
            <td>{transaction.category}</td>
            <td>
              {new Intl.DateTimeFormat('en-US').format(
              new Date(transaction.createdAt)
              )}
            </td>
          </tr>
          ))}          
        </tbody>
      </table>
    </Container>
  );
}