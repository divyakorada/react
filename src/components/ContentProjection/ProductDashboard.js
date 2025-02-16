import React from 'react'

const ProductWidget = ({products, title, linkText, linkUrl}) => {
  return (
    <div>
      <h3 className='header'>{title}</h3>
      <ul className='list-group'>
        {products?.map((prod) => {
           return  <li key={prod.id} className='list-group-item d-flex justify-content-between align-items-center'>
                {prod.name}
                <span className="badge bg-primary rounded-pill">${prod.price}</span>
            </li>
        })}
      </ul>
      <a href={linkUrl} className='link'>{linkText}</a>
    </div>
  )
};


const ProductDashboard = () => {
    const salesProducts = [
        { id: 1, name: "Acs", price: "100" },
        { id: 2, name: "Phones", price: "2000" },
        { id: 3, name: "Fashion", price: "5000" },
        { id: 4, name: "Electronics", price: "3000" },
      ];
    
      const topProducts = [
        { id: 1, name: "Phone", price: "2000" },
        { id: 2, name: "Laptop", price: "6000" },
        { id: 3, name: "Decor", price: "12000" },
        { id: 4, name: "Electronics", price: "33000" },
      ];

      return(
        <div className='row'>
            <div className="col-md-6">
                 <ProductWidget products={salesProducts} title="Clearance Store" linkText="Visit Store..." linkUrl="#"/>
            </div>

            <div className="col-md-6">
                 <ProductWidget products={topProducts} title="Top Picks of the Day..." linkText="See More..." linkUrl="#"/>
            </div>
        </div>
    )
}

export default ProductDashboard


// https://chatgpt.com/share/67b1d0de-f308-8001-accb-11dc56c5f00f

