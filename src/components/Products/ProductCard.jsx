/* eslint-disable react/prop-types */


const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-contain"
                />
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
        </div>
    )
}

export default ProductCard;