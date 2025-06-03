import * as S from './styles'

export default function Actions() {
  return (
    <S.ContainerActions>
      <h3>Nova transação</h3>

      <select>
        <option>Selecione o tipo de transação</option>
        <option value="Depósito">Depósito</option>
        <option value="Transferência">Transferência</option>
      </select>
      <label>Valor</label>
      <input type="text" name="value" placeholder="00,00" />
    </S.ContainerActions>
  )
}
