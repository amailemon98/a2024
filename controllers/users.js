const connection = require('../model/db.js')
// db 사용하지 않아서 테스트 불가
const getUsers  = (req, res)=>{
    try{
        let conn = connection();
        if( conn ){ console.log('초기화')}
        else{ console.log('잠시기다리세요')}
    }catch(err){
        console.log('err')
    }
    res.send('getUsers')
}  
const loginHandle = (req, res)=>{
    res.send('loginHandle')
} 
const deleteUser = (req, res)=>{
    res.send('deleteUser')
} 


const updateUser = (req, res)=>{
    res.send('updateUser')
} 
const getParamUserid = (req, res)=>{
    res.send('getParamUserid')
}

module.exports = { 
    getUsers, 
    loginHandle,
    deleteUser,
    updateUser,
    getParamUserid
}