let pronoun = ["the", "our"];
let adjective = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".es"];
for (let pro of pronoun) {
  for (let adj of adjective) {
    for (let no of noun) {
      for (let dom of domain) {
        console.log(pro + adj + no + dom);
      }
    }
  }
}
