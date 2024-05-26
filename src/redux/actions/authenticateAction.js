function login (id,password){
    return (dispatch,getState)=>{
        console.log("login action")
        dispatch({type:"LOGIN_SUCCESS",payload:{id,password}})
    }
}

function logout(){
    return(dispatch)=>{
        console.log("logout action");
        dispatch({type:"LOGOUT_SUCCESS"})
    }
}

export const authenticateAction = {login,logout};