import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entries</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>$100,000</strong>
      </div>
      <div>
        <header>
          <p>Exits</p>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>- $5000</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Balance</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>$95,000</strong>
      </div>
    </Container>
  );
}