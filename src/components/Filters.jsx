import * as React from 'react'

const Filters = ({filterProducts}) => {
  

  return (
    <div className="w-3/12 ">
        <section className="pl-8 ">
            <h3 className="font-bold text-[#07074D] text-2xl flex pl-2">Filters</h3>
            <div className="flex flex-col md:mt-8">
                <input className="w-64 rounded-[30px] focus:outline-none h-10 pl-5" id="title" name="title" placeholder="Search" type="text"
                onChange={(text) => {
                  filterProducts(text.target.value)
                }}
                />
                    <div className="flex flex-col text-left mt-2 md:mt-16 md:mb-24">
                        <label className="font-semibold text-sm text-[#07074D] ml-1 w-64">Filter Prices</label>
                        <div className="flex flex-col">
                            <input className="md:mt-10 w-64 h-10 rounded-[30px] pl-2 block px-3 py-2 border-input" placeholder="Price From" type="number" id="priceFrom" name="priceFrom" required="" value="" />
                            <input className="mt-4 w-64 h-10 rounded-[30px] pl-2 block px-3 py-2 border-input" placeholder="Price To" type="number" id="priceTo" name="priceTo" required="" value="" />
                        </div>
                        
                        </div>
                        <div>
                            <div className="flex md:flex-col items-start my-2 md:my-0 ">
                                <p className="text-[#07074D] font-semibold text-sm">Open Market</p>
                                
                                <div className="mt-2 flex items-center pl-3 md:pl-0">
                                    <input type="radio" className="rounded-[30px]" name="openMarketYes" id="openMarketYes" value="openMarketYes" />
                                    <label className="text-[#07074D] ml-2 text-sm">Yes</label>
                                </div>
                                
                                <div className="mt-2 flex items-center pl-3 md:pl-0">
                                    <input type="radio" className="rounded-[30px]" name="openMarketNo" id="openMarketNo" value="openMarketNo"  checked="" />
                                    <label className="text-[#07074D] ml-2 text-sm">No</label>
                                </div>
                                
                            </div>
                            
                            <select className="md:mt-4 w-64 h-10 rounded-[30px] text-gray-400 bg-white border-input" name="countryofOrigin" id="countryofOrigin" required="">
                                <option value="">Country of Origin</option>
                                <option value="albania">Albania</option>
                                <option value="brazil">Brazil</option>
                                <option value="paraguay">Paraguay</option>
                                <option value="colombia">Colombia</option>
                                <option value="chile">Chile</option>
                                <option value="argentina">Argentina</option>
                            </select>
                            
                            <select className="mt-4 w-64 h-10 rounded-[30px] text-gray-400 bg-white border-input" name="countriesOpenMarket" id="countriesOpenMarket" required="">
                                <option value="">Destination Country</option>
                                <option value="afghanistan">Afghanistan</option>
                                <option value="algeria">Algeria</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="belize">Belize</option>
                                <option value="botswana">Botswana</option>
                                <option value="bulgaria">Bulgaria</option>
                                <option value="algeria">Algeria</option>
                                <option value="albania">Albania</option>
                                <option value="singapore">Singapore</option>
                                <option value="vietnam">Vietnam</option>
                                <option value="thailand">Thailand</option>
                                <option value="china">China</option>
                                <option value="angola">Angola</option>
                                <option value="andorra">Andorra</option>
                                <option value="antiguaandbarbuda">AntiguaandBarbuda</option>
                                <option value="australia">Australia</option>
                                <option value="azerbaijan">Azerbaijan</option>
                                <option value="austria">Austria</option>
                                <option value="bahrain">Bahrain</option>
                                <option value="belarus">Belarus</option>
                                <option value="barbados">Barbados</option>
                                <option value="armenia">Armenia</option>
                                <option value="belgium">Belgium</option>
                                <option value="benin">Benin</option>
                                <option value="argentina">Argentina</option>
                                <option value="bolivia">Bolivia</option>
                                <option value="bosniaandherzegovina">BosniaandHerzegovina</option>
                                <option value="bhutan">Bhutan</option>
                                <option value="centralafricanrepublic">CentralAfricanRepublic</option>
                                <option value="chad">Chad</option><option value="canada">Canada</option>
                                <option value="chile">Chile</option>
                                <option value="colombia">Colombia</option>
                                <option value="congorepublicofthe">Congo,Republicofthe</option>
                                <option value="costarica">CostaRica</option>
                                <option value="comoros">Comoros</option>
                                <option value="andorra">Andorra</option>
                                <option value="argentina">Argentina</option>
                                <option value="armenia">Armenia</option>
                                <option value="australia">Australia</option>
                                <option value="austria">Austria</option>
                                <option value="bahrain">Bahrain</option>
                                <option value="antiguaandbarbuda">AntiguaandBarbuda</option>
                                <option value="angola">Angola</option>
                                <option value="barbados">Barbados</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="azerbaijan">Azerbaijan</option>
                                <option value="belize">Belize</option>
                                <option value="belarus">Belarus</option>
                                <option value="colombia">Colombia</option>
                                <option value="chile">Chile</option>
                                <option value="congo republic">Democratic Republic of the Congo</option>
                                <option value="chad">Chad</option>
                                <option value="comoros">Comoros</option>
                                <option value="croatia">Croatia</option>
                                <option value="cyprus">Cyprus</option>
                                <option value="costarica">Costa Rica</option>
                                <option value="czechrepublic">CzechRepublic</option>
                                <option value="centralafricanrepublic">Central African Republic</option>
                                <option value="brazil">Brazil</option>
                                <option value="brazil">Brazil</option>
                                <option value="slovakia">Slovakia</option>
                                <option value="bulgaria">Bulgaria</option>
                                <option value="canada">Canada</option>
                                <option value="mexico">Mexico</option>
                                <option value="singapore">Singapore</option>
                                <option value="southafrica">South Africa</option>
                                <option value="unitedstate">United State</option>
                                <option value="ecuador">Ecuador</option>
                                <option value="spain">Spain</option>
                                <option value="guinea">Guinea</option>
                            </select>
                            
                            <select className="mt-4 w-64 h-10 rounded-[30px] text-gray-400 bg-white border-input" name="dispatchPort" id="dispatchPort" required="">
                                <option value="">Dispatch Port</option>
                                <option value="durresdurazzoaldrz">Durres (Durazzo)  AL DRZ</option>
                                <option value="santosbrssz">Santos  BR SSZ</option>
                                <option value="pago pagoasppg">Pago Pago  AS PPG</option>
                                <option value="buenaventuracobun">Buenaventura  CO BUN</option>
                                <option value="aricaclari">Arica  CL ARI</option>
                                <option value="cartagenacoctg">Cartagena  CO CTG</option>
                                <option value="sarandealsar">Sarande  AL SAR</option>
                                <option value="buenos airesarbue">Buenos Aires  AR BUE</option>
                            </select>
                            
                        </div>
                        
                        <div className="text-left md:mt-12">
                            <label className="font-semibold text-sm text-[#07074D] ml-1 w-64" >
                                Filter Categories
                            </label>
                            
                            <details open="">
                                <summary className="mt-4 md:mt-7 text-[#07074D] text-sm bg-white min-h-10 rounded-[30px] px-2 pt-3 w-64 ">
                                    Supply to feed mills
                                </summary>
                                
                                <ul className="text-[#07074D] font-light text-sm flex md:flex-col md:items-start w-64 mt-3">
                                    <div className="flex justify-start items-center">
                                        <img className="w-2 h-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgBhZC7DYAwDETPoaRnAHpq2AeQ6BiAKaChgX3o6ekZIB0/OwkSRYCTrJxzT1Zigqg6Ixyo2cVcIdfE/YiBVonJAa0Ln9II0KCnRTFQegCYux25GMWV4l3JDWn8SKDlI53tocyjfdM0NnRiyLT2hwW7zISKpwvgVnABUjEe/q6moA8AAAAASUVORK5CYII=" alt="" />
                                            <button value="animalProteins" name="animalProteins" className="pl-2 text-[#0066FF] text-sm list-disc">
                                                Animal Proteins
                                            </button>
                                    </div>
                                    
                                    <div className="flex justify-start items-center">
                                        <img className="w-2 h-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgBhZC7DYAwDETPoaRnAHpq2AeQ6BiAKaChgX3o6ekZIB0/OwkSRYCTrJxzT1Zigqg6Ixyo2cVcIdfE/YiBVonJAa0Ln9II0KCnRTFQegCYux25GMWV4l3JDWn8SKDlI53tocyjfdM0NnRiyLT2hwW7zISKpwvgVnABUjEe/q6moA8AAAAASUVORK5CYII=" alt="" />
                                            <button value="animalFatsAndOils" name="animalFatsAndOils" className="pl-2 text-[#0066FF] text-sm list-disc">
                                                Animal Fats and Oils
                                            </button>
                                    </div>
                                    
                                    <div className="flex justify-start items-center">
                                        <img className="w-2 h-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgBhZC7DYAwDETPoaRnAHpq2AeQ6BiAKaChgX3o6ekZIB0/OwkSRYCTrJxzT1Zigqg6Ixyo2cVcIdfE/YiBVonJAa0Ln9II0KCnRTFQegCYux25GMWV4l3JDWn8SKDlI53tocyjfdM0NnRiyLT2hwW7zISKpwvgVnABUjEe/q6moA8AAAAASUVORK5CYII=" alt="" />
                                            <button value="enzymaticHydrolysisProducts" name="enzymaticHydrolysisProducts" className="pl-2 text-[#0066FF] text-sm list-disc">
                                                Enzymatic hydrolysis products
                                            </button>
                                            
                                    </div>
                                    
                                    <div className="flex justify-start items-center">
                                        <img className="w-2 h-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgBhZC7DYAwDETPoaRnAHpq2AeQ6BiAKaChgX3o6ekZIB0/OwkSRYCTrJxzT1Zigqg6Ixyo2cVcIdfE/YiBVonJAa0Ln9II0KCnRTFQegCYux25GMWV4l3JDWn8SKDlI53tocyjfdM0NnRiyLT2hwW7zISKpwvgVnABUjEe/q6moA8AAAAASUVORK5CYII=" alt="" />
                                            <button value="chitosan" name="chitosan" className="pl-2 text-[#0066FF] text-sm list-disc">
                                                Chitosan
                                            </button>
                                    </div>
                                    
                                    <div className="flex justify-start items-center">
                                        <img className="w-2 h-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgBhZC7DYAwDETPoaRnAHpq2AeQ6BiAKaChgX3o6ekZIB0/OwkSRYCTrJxzT1Zigqg6Ixyo2cVcIdfE/YiBVonJAa0Ln9II0KCnRTFQegCYux25GMWV4l3JDWn8SKDlI53tocyjfdM0NnRiyLT2hwW7zISKpwvgVnABUjEe/q6moA8AAAAASUVORK5CYII=" alt="" />
                                            <button value="coffee" name="coffee" className="pl-2 text-[#0066FF] text-sm list-disc">
                                                Coffee
                                            </button>
                                    </div>
                                    
                                    <div className="flex justify-start items-center">
                                        <img className="w-2 h-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgBhZC7DYAwDETPoaRnAHpq2AeQ6BiAKaChgX3o6ekZIB0/OwkSRYCTrJxzT1Zigqg6Ixyo2cVcIdfE/YiBVonJAa0Ln9II0KCnRTFQegCYux25GMWV4l3JDWn8SKDlI53tocyjfdM0NnRiyLT2hwW7zISKpwvgVnABUjEe/q6moA8AAAAASUVORK5CYII=" alt="" />
                                            <button value="spices" name="spices" className="pl-2 text-[#0066FF] text-sm list-disc">
                                                Spices
                                            </button>
                                    </div>
                                    </ul>
                                    </details>
                                    </div>
                                    
                                    <div className="flex flex-col text-left mt-2 md:mt-12">
                                        <label className="font-semibold text-sm text-[#07074D] ml-1 w-64">Filter Quantity Available (Mt)</label>
                                        <div className="flex flex-col">
                                            <input className="md:mt-4 w-64 h-10 rounded-[30px] pl-2 block px-3 py-2 border-input" placeholder="Quantity From" type="number" id="quantityFrom" name="quantityFrom" required="" value="" />
                                            <input className="mt-4 w-64 h-10 rounded-[30px] pl-2 block px-3 py-2 border-input" placeholder="Quantity To" type="number" id="quantityTo" name="quantityTo" required="" value="" />
                                    </div>
                                    </div>
                                    
                                    <div className="flex flex-col text-left mt-2 md:mt-4 ">
                                        <label className="font-semibold text-sm text-[#07074D] ml-1 w-64">
                                            Filter Dispatch Estimated
                                        </label>
                                        <p className="font-light text-[#07074D] text-sm text-justify ml-1 mt-1 w-64">
                                            *Select an estimated range of dates for your cargo dispatch
                                        </p>
                                        
                                        <div className="flex flex-col mt-1">
                                            <input className="md:mt-4 w-64 h-10 rounded-[30px] pl-2 block px-3 py-2 border-input text-[#07074D]" placeholder="Date From" type="date" id="dateFrom" name="dateFrom" required="" value="" />
                                            <input className="mt-4 w-64 h-10 rounded-[30px] pl-2 block px-3 py-2 border-input text-[#07074D]" placeholder="Date To" type="date" id="dateTo" name="dateTo" required="" value="" />
                                        </div>
                                        </div>
                                        
                                        <div className="flex md:justify-end w-64 ">
                                            <button className="mr-1 px-3 py-2 bg-[#D6E7FF] border-2 border-[#0066FF] rounded-[30px] w-[140px] text-[#0066FF] text-center text-semibold text-sm mt-4">
                                                Clear Filters
                                            </button>
                                        </div>
                                        </div>
                                        </section>
                                        </div>
  )
}

export default Filters