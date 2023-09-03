import { createContext, useState } from "react";
import { dataUsers } from "../components/DataUsers/dataUsers";
export const StockCartContext= createContext()

export const StockCartProvider = ({children,fullName})=>{
    const [count, setCount]= useState (0)
    const [accionDetailOpen, setAccionDetailOpen]= useState (false)
    const openAccionDetail=()=> setAccionDetailOpen(true)
    const closeAccionDetail=()=> setAccionDetailOpen(false)

    const [sellAccionDetailOpen, setSellAccionDetailOpen]= useState (false)
    const openSellAccionDetail=()=> setSellAccionDetailOpen(true)
    const closeSellAccionDetail=()=> setSellAccionDetailOpen(false)

    const [cartAccions, setCartAccions] = useState([])
    const [buyAccions, setBuyAccions] = useState([])

    const foundUserInitial = dataUsers.find((user) => user.fullName === fullName);
    const [foundUser, setFoundUser] = useState(foundUserInitial);
    const [userBalance, setUserBalance] = useState(foundUser.fund);
    console.log(openSellAccionDetail)
    return(
        <StockCartContext.Provider value={{
            count,
            setCount,
            openAccionDetail,
            closeAccionDetail,
            openSellAccionDetail,
            closeSellAccionDetail,
            accionDetailOpen,
            sellAccionDetailOpen,
            cartAccions,
            setCartAccions,
            buyAccions,
            setBuyAccions,
            foundUser, 
            setFoundUser,
            userBalance, 
            setUserBalance
        }}> 
            {children}
        </StockCartContext.Provider>
    )
}
