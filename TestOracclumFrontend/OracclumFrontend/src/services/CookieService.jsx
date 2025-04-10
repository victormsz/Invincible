function GetCookie(name) {
    try {
        const value = document.cookie;
        const parts = value.split(`${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
        else return "";

    }
    catch (e) {
        console.log("error: ", e);
    }
}
function DeleteCookie(name){
    try {
         document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    } catch (e) {
        console.log("error: ", e);
    }
}
// function CreateCookie(name, value) {
//     document.cookie = `${name}=${value}; path=/; max-age=10000`;
// }
export { GetCookie, DeleteCookie};