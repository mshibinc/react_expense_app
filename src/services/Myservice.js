import http from'../http-common'
export function addExpense(data){
    return http.post("/addExpense",data);
}
export function addIncome(data){
    return http.post('/addIncome',data);
}
export function homePageData(){
    return http.get('/index');
}