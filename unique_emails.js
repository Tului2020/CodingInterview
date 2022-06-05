const uniqueEmails = (emails) => {
  const returnEmails = [];
  emails.forEach(email => {
    const parsedEmail = parseEmail(email);
    if (!returnEmails.includes(parsedEmail)) returnEmails.push(parsedEmail);
  });
  return returnEmails.length;
}

const parseEmail = (email) => {
  let [localName, domainName] = email.split('@');
  localName = localName
    .replace(/\./g, '')
    .replace(/\+.+/, '');
  return `${localName}@${domainName}`;
}

console.log(uniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]));


