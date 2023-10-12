import React from "react";
import ItemTabs from "../../Components/ItemTabs/ItemTabs";
import ItemHeader from "../../Components/ItemHeader/ItemHeader";
import Header from "../../Components/Templates/Header/Header";

function Home() { 
    return (

        <>
            <Header />
            <ItemHeader />
            <ItemTabs></ItemTabs>
        </>
        
    )
}
export default Home;