import { createContext } from "react";
// createContext helps us in creating a message board for all components in my code
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null); //here setting up the global variable and sets it to null 


// Provider function: responsible for determining how the values(context) is shared among all the members in my app
const StoreContextProvider = (props) =>{

// loop through the food_list and provide it to the contextValue
    const contextValue = {
        // foodName: menu_list.menu_name,
        // price: menu_list.
        food_list
    }
    // console.log("Stored Context:",StoreContext);
    
    return(
        // acts like a global state for all its children. it passes the props from the Provider to the children
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider