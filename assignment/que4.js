let isLoggedIn=true;
let role ="admin";
if (!isLoggedIn){
    console.log("please log in");
}
else if(isLoggedIn && role==="admin"){
    console.log("welcome, admin");

}
else if ( isLoggedIn && !role){
    console.log("welcome , user");
}