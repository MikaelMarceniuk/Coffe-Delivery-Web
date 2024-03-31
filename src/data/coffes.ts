import ICoffe from '../interface/ICoffe'

import ExpressoTradicionalImg from '../assets/cafe-expresso.svg'
import ExpressoAmericano from '../assets/cafe-americano.svg'
import ExpressoCremoso from '../assets/expresso-cremoso.svg'
import ExpressoGelado from '../assets/cafe-gelado.svg'
import CafeComLeite from '../assets/cafe-com-leite.svg'
import Latte from '../assets/latte.svg'
import Capuccino from '../assets/capuccino.svg'
import Macchiato from '../assets/macchiato.svg'
import Moccacino from '../assets/mochaccino.svg'
import ChocolateQuente from '../assets/chocolate-quente.svg'
import Cubano from '../assets/cubano.svg'
import Havaiano from '../assets/havaiano.svg'
import Arabe from '../assets/arabe.svg'
import Irlandes from '../assets/irlandes.svg'

const CoffesData: ICoffe[] = [
	{
		name: 'Expresso Tradicional',
		categories: ['Tradicional'],
		description: 'O tradicional café feito com água quente e grãos moídos',
		price: '9,90',
		img: ExpressoTradicionalImg
	},
	{
		name: 'Expresso Americano',
		categories: ['Tradicional'],
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: '9,90', 
		img: ExpressoAmericano
	},
	{
		name: 'Expresso Cremoso',
		categories: ['Tradicional'],
		description: 'Café expresso tradicional com espuma cremosa',
		price: '9,90', 
		img: ExpressoCremoso
	},
	{
		name: 'Expresso Gelado',
		categories: ['Tradicional'],
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: '9,90', 
		img: ExpressoGelado
	},
	{
		name: 'Café com Leite',
		categories: ['Tradicional', 'Com leite'],
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		price: '9,90', 
		img: CafeComLeite
	},
	{
		name: 'Latte',
		categories: ['Tradicional', 'Com leite'],
		description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		price: '9,90', 
		img: Latte
	},
	{
		name: 'Capuccino',
		categories: ['Tradicional', 'Com leite'],
		description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
		price: '9,90', 
		img: Capuccino
	},
	{
		name: 'Macchiato',
		categories: ['Tradicional', 'Com leite'],
		description: 'Café expresso misturado com um pouco de leite quente e espuma',
		price: '9,90', 
		img: Macchiato
	},
	{
		name: 'Mocaccino',
		categories: ['Tradicional', 'Com leite'],
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		price: '9,90', 
		img: Moccacino
	},
	{
		name: 'Chocolate Quente',
		categories: ['Tradicional', 'Com leite'],
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		price: '9,90', 
		img: ChocolateQuente
	},
	{
		name: 'Cubano',
		categories: ['Tradicional', 'Com leite', 'Alcoólico'],
		description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
		price: '9,90', 
		img: Cubano
	},
	{
		name: 'Havaiano',
		categories: ['Especial'],
		description: 'Bebida adocicada preparada com café e leite de coco',
		price: '9,90', 
		img: Havaiano
	},
	{
		name: 'Árabe',
		categories: ['Especial'],
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		price: '9,90', 
		img: Arabe
	},
	{
		name: 'Irlandês',
		categories: ['Especial', 'Alcoólico'],
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		price: '9,90', 
		img: Irlandes
	}
]

export default CoffesData