// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  if(title.includes(`!`)){
    return null;
  }
  if(title.includes(`#`)){
     return null;
  }
  if(title.includes(`?`)){
    return null;
  }
  let slug = '';
  for(let i = 0; i<title.length; i++){
    if(title[i]=== ` `){
      slug += `-`;
    }else{
      slug += title[i].toLowerCase();
    }
  }
  return slug;
};
module.exports = {
  createSlug,
};
