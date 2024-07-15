const pronouns = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns = ['jogger', 'racoon'];
const extensions = ['.com', '.net', '.us', '.io'];

const generateDomains = () => {
  const domains = [];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          domains.push(`${pronoun}${adjective}${noun}${extension}`);
        }
      }
    }
  }

  return domains;
}

const domains = generateDomains();
console.log(domains);
