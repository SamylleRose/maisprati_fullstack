const totalVoters = parseInt(prompt("Number of votes? "));
const whiteVote = parseInt(prompt("Number of white votes?"));
const nullVote = parseInt(prompt("Number of null votes"));
const validVotes = parseInt(prompt("Number of valid votes?"));

const percentageWhite = (100 * whiteVote) / totalVoters;
const percentageNull = (100 * nullVote) / totalVoters;
const percentageValid = (100 * validVotes) / totalVoters;

console.log(percentageWhite + "% percentage of white votes");
console.log(percentageNull + "% percentage of null votes");
console.log(percentageValid + "% percentage of valid votes");
