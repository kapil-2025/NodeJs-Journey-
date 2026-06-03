import { userList } from "../10-model/userModel.js"

   export function handleUsers(req,resp)
   {const userData=userList();
  resp.render('user',{user:userData}); // yaha hum file likghte hai kuki ye apne aap folder catch krleta hai
}