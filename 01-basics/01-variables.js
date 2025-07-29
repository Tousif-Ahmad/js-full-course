const accountId = 728584;
let accountEmail = "tousif@gmail.com";
var accountPassword = "112233";
accountCity = "Peshawar";

// accountId = 23; /* Not allowed */
accountEmail = "t@gmail.com";
accountPassword = "2233";
accountCity = "Lahore";
let accountState;

/* 
    prefer not to use var because of issue in block and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


