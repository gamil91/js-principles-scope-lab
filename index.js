var customerName =  "bob";

function upperCaseCustomerName(){
   customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    return bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    return bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "Still not Bob"

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = "This should not be able to change"
}
