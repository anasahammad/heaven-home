import toast from "react-hot-toast";

export const getEstate = ()=>{
    let estates = [];
    const storeEstate = localStorage.getItem("estates")
    if(storeEstate){
        estates = JSON.parse(storeEstate)
    }
    return estates;
}

export const saveEstate = estate =>{
    let estates = getEstate();
    const isExist = estates.find(item=> item.id === estate.id)
    if(isExist){
        return toast.error("Already Added to the wishlist")
    }
    estates.push(estate)
    localStorage.setItem("estates", JSON.stringify(estates))
    return toast.success("Successfully added to the wishlist")
}

export const deletEstate = id=>{
    let estates = getEstate();
    const remaining = estates.filter(item=> item.id !== id)
    localStorage.setItem("estates", JSON.stringify(remaining))
     toast.success("Successfully deleted the estate from wishlist")
    return remaining;
}