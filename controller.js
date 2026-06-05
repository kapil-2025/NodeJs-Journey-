export const usernameController=(req,resp)=>{
  const username=req.params.username;
  resp.send(`welcome ${username}`);
}
export const searchController=(req,resp)=>{
  const keyword=req.query.keyword;
  resp.send(`searching for ${keyword}`);
}