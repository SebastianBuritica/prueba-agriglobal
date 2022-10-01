import * as React from 'react'
import Filters from '../components/Filters'
import Catalog from '../components/Catalog'

const Home = (props) => {
  
    const [products, setProducts] = React.useState([])
    const [filters, setFilters] = React.useState([])

    // Getting the data from the API and rendering when the app opens
    React.useEffect(() => {
    const getData = async () => {
        try {
            const response = await fetch('https://testing-agriglobal-market.ue.r.appspot.com/api/getproducts/admisiones')
            const data = await response.json()
            console.log(data.products)
            setProducts(data.products)
            setFilters(data.products)
        } catch (error) {
            console.log(error)
        }
        // setFilters(data.products)
    } 
      getData()
    },[])

    // Function to filter the products
    const filterProducts = (text) => {
        // First we check that the text is not empty    
        if (text) {
            // If it is not empty we filter the products (the data source)
                const filteredProducts = products.filter((item) => {

                    // We check if the title of the product contains the text, if so we convert it to uppercase
                    // we will convert  the text to uppercase too to avoid errors
                    const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();

                    const textData = text.toUpperCase();

                    // The indexOf method will return the index of the  first element that finds with the
                // specified value that we are passing as a parameter. If it doesn't find anything
                // it will return -1 so well check if the index is greater than -1
                    return itemData.indexOf(textData) > -1;
                })
                setFilters(filteredProducts)
            } else {
                // If the text is empty we will return the original data
                setFilters(products)
            }
    }
  
    return (
    
    <section className='flex flex-col md:flex-row p-10 -mt-1'>
    <Filters filterProducts={filterProducts} />
    <Catalog filters={filters} />
    </section>





  )
}

export default Home