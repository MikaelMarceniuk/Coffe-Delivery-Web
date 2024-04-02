interface IPaymentOption {
	id: number
	text: string
	value: 'CARTAO_CREDITO' | 'CARTAO_DEBITO' | 'DINHEIRO'
}

export default IPaymentOption