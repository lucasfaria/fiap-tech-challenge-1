import * as S from './styles'

export default function CashFlow() {
  return (
    <S.CashFlowContainer>
      <h3>Extrato</h3>

      <div>
        <div>
          <span>Novembro</span>
          <p>Depósito</p>
          <p>R$ 150</p>
        </div>
        <div>18/11/2022</div>
      </div>
      <div>
        <div>
          <span>Novembro</span>
          <p>Transferência</p>
          <p>- R$ 150</p>
        </div>
        <div>18/11/2022</div>
      </div>
    </S.CashFlowContainer>
  )
}
