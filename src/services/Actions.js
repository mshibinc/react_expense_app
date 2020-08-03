import http from'../http-common'
export function addExpense(data){
    return http.post("/addExpense",data);
}