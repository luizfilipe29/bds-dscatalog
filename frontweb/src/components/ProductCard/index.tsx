import './styles.css';
import ProductImg from 'assets/images/product.png';
import Productprice from 'components/ProductPrice';

const ProductCard = () => {
    return(
        <div className='base-card product-card'>
            <div className='card-top-container'> 
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className='card-bottom-container'>
                <h6>Nome do produto</h6>
                <Productprice/>
            </div>
        </div>
    )
}

export default ProductCard;