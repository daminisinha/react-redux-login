export function validateEmail(email) {
    var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
   if(re.test(email)){
       return true;
   }
   else{
       return "Please enter a valid email address."
   }
}