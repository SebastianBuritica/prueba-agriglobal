import * as React from 'react'

const Catalog = ({filters}) => {
//   const [products, setProducts] = React.useState([])

//     React.useEffect(() => {
//     const getData = async () => {
//         const response = await fetch('https://testing-agriglobal-market.ue.r.appspot.com/api/getproducts/admisiones')
//         const data = await response.json()
//         console.log(data.products)
//         setProducts(data.products)
//     } 
//       getData()
//     },[])
    

  
    return (
    <div className="md:w-9/12 text-left">
        <div className="pl-8 md:pl-14">
            <h3 className="font-bold text-2xl text-[#07074D] mt-10 md:mt-0">
                Results
            </h3>
            <p className="text-sm font-normal text-[#10121CB2]/70 mt-1">
                Your search results... 24 Products</p>
            </div>
            
            <div className="flex px-7 md:ml-10 mt-5 items-center ">
                <button className="font-semibold text-[#0066FF] bg-[#D6E7FF] py-3 px-2 md:px-5 rounded-[30px] text-sm">
                    <svg className="MuiSvgIcon-rvoot MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIcon">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
                        </path>
                    </svg>    
                </button>
                <p className="font-semibold text-[#07074D] px-3 md:px-10">1 to 9</p>
                <button className="font-semibold text-[#0066FF] mx-2 md:mx-0 bg-[#D6E7FF] py-3 px-2 md:px-5 rounded-[30px] text-sm">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon">
                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                    </path>
                    </svg>
                </button>
                
                <div>
                    <button className="md:px-3 py-2 bg-[#D6E7FF] border-2 border-[#0066FF] rounded-[30px] w-28 md:w-[140px] text-[#0066FF] text-center text-semibold text-sm md:ml-10">
                        Clear Filters
                    </button>
                </div>
                </div>
                
                {/* // Cards container */}
                <div className="flex flex-wrap mt-10 justify-center">
                    
                    {/* // Card */}

                { filters.map((product) => {
                    return (
                    <div key={product._id} className="w-[280px] h-[400px] bg-white flex flex-col rounded-3xl mx-3 mb-6  justify-center hover:-mt-2  hover:shadow-lg  hover:shadow-[#0066FF]/40">
                        <div className="flex justify-end mx-7 pb-3 mt-2">
                            <div className="text-[#0066FF] text-right">
                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderOutlinedIcon">
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z">
                                </path>
                                </svg>
                            </div>
                            </div>
                            
                            <button className="self-center mt-2">
                                <img src={product.imgP} alt="" className="w-[140px] h-[95px] rounded-[15px]"/>
                            </button>
                            <button className="mt-2 ml-7 mr-5 text-left"><p className="text-[#0066FF] text-sm font-semibold pt-2">
                                {product.category}
                            </p>
                            <p className="mt-2 font-bold text-[#07074D] text-lg leading-6 h-10 uppercase">
                                {product.title}
                            </p>
                            <p className="mt-2 leading-5 text-[#07074D] text-xs h-9 capitalize overflow-hidden">
                                {product.description}
                            </p>
                            <div className="flex items-center my-3 ">
                                <p className="font-semibold text-[#33CC00] text-lg">
                                    $ {product.productPrice}  USD  
                                <span className="text-black"> x Mt</span> 
                                <span className="text-xs text-black">(EXW)</span>
                                </p>
                            </div>
                            </button>
                            
                            <div className="flex items-center -mt-1 ml-7">
                               
                            <button className="w-19 p-5 bg-[#0066FF] py-2 text-[10px] rounded-[25px] text-white disabled:bg-[#3a89ff] hover:bg-[#4d94ff] font-semibold" onClick={() => alert('Product Successfully added to cart!')}>
                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartOutlinedIcon">
                                    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z">
                                    </path>
                                </svg> Add cart
                            </button>
                            
                            <div className="w-3/12 ml-3">
                                <button className="ml-4 px-1 py-1 rounded-[30px] disabled:bg-[#3a89ff] border-solid border-2 border-[#0066FF] hover:bg-[#b0d0ff]" name="noAdded">
                                    <img title="Compare" className="w-6 h-6 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgB7ZbPTcMwFId/DhmAEboBjNBNCAdcOCEmiDsB4UTFhbIBnYBVGKEMgF793KpJEzv+k0jtIZ9kOYodvy924mdgYuLMCIzFI81AKB2tWx3pDSvx227I4WJBP3rAOa5Q4F18wQfh0/R3c63LfftmBveAc1P/Y40nuoNfYIMEsp62l+NViMSHqHQRpgAKgwV4QGAZJcFIKscR2EuoKIl28Ky75nECMRK24CuxxmCBEInE4EyOUFhCEl+VDQmuZ57gLH6j94Glbdj4jUiSOkq0iXjzdAGXRELw/WNp0BjBmZQlSP7gbMTNQF9wSa+60KFPzYKeTV7hZDVIwP/mxaFWJxKEyuQVR6YMEwib9uZvpjoz4cC/D4SuOecOSZxyy4YEfGSjBK8luO/pTCQLpH7tXYle7EvwQEV08Mg0XA9tQzSOVqFvLnDr6fFnu5k7tJT+bUjXG30e/EYIwpygtj3tFSYmLpEdlbOb8EGWO6kAAAAASUVORK5CYII=" alt="" name="noAdded"/>
                                </button>
                            </div>
                            </div>
                            </div>
                    )
                    })}


                                                                                    </div>
                                                                                    <div className="h-24">
                                                                                    </div>
                                                                                    </div>
  )
}

export default Catalog