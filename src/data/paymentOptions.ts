import IPaymentOption from "../interface/IPaymentOption"

const PaymentOptions: IPaymentOption[] = [
	{
		id: 1,
		text: 'Cartão de crédito',
		value: 'CARTAO_CREDITO',
	},
	{
		id: 2,
		text: 'Cartão de débito',
		value: 'CARTAO_DEBITO',
	},
	{
		id: 3,
		text: 'Dinheiro',
		value: 'DINHEIRO',
	},
]

export default PaymentOptions