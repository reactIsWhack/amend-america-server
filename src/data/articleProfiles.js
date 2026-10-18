const summaries = require('./articleSummaries.js');

const articles = [
    {
        number: 1,
        romanNumeral: "I",
        category: 'Individual & Economic Rights',
        title: 'Citizenship',
        summary: summaries[0],
    },
    {
        number: 2,
        romanNumeral: "II",
        category: 'Voting & Elections',
        title: 'Voting & Elections',
        summary: summaries[1],
    },
    {
        number: 3,
        romanNumeral: "III",
        category: 'Voting & Elections',
        title: 'Election Integrity',
        summary: summaries[2],
    },
    {
        number: 4,
        romanNumeral: "IV",
        category: 'Voting & Elections',
        title: 'Executive Popular Vote',
        summary: summaries[3],
    },
    {
        number: 5,
        romanNumeral: "V",
        category: 'Voting & Elections',
        title: 'Independent Redistricting',
        summary: summaries[4],
    },
    {
        number: 6,
        romanNumeral: "VI",
        category: 'Civic Education',
        title: 'Guaranteed Civics Education',
        summary: summaries[5],
    },
    {
        number: 7,
        romanNumeral: "VII",
        category: 'Money, Political Influence, & Corporate Power',
        title: 'Money in Politics',
        summary: summaries[6],
    },
    {
        number: 8,
        romanNumeral: "VIII",
        category: 'Government Ethics',
        title: 'Financial Integrity of Officeholders',
        summary: summaries[7],
    },
    {
        number: 9,
        romanNumeral: "IX",
        category: 'Money, Political Influence, & Corporate Power',
        title: 'Prevention Of Foreign Influence',
        summary: summaries[8],
    },
    {
        number: 10,
        romanNumeral: "X",
        category: 'Civic Education',
        title: 'Political Communication integrity',
        summary: summaries[9],
    },
    {
        number: 11,
        romanNumeral: "XI",
        category: 'Civic Education',
        title: 'Freedom of Information',
        summary: summaries[10],
    },
    {
        number: 12,
        romanNumeral: "XII",
        category: 'Civic Education',
        title: 'Digital Ecosystem and Information Integrity',
        summary: summaries[11],
    },
    {
        number: 13,
        romanNumeral: "XIII",
        category: 'Money, Political Influence, & Corporate Power',
        title: 'Personhood',
        summary: summaries[12],
    },
    {
        number: 14,
        romanNumeral: "XIV",
        category: 'Individual & Economic Rights',
        title: 'Essential Rights of the People and the General Welfare',
        summary: summaries[13],
    },
    {
        number: 15,
        romanNumeral: "XV",
        category: 'Individual & Economic Rights',
        title: 'Personal Sovereignty and Digital Self-Determination',
        summary: summaries[14],
    },
    {
        number: 16,
        romanNumeral: "XVI",
        category: 'Individual & Economic Rights',
        title: 'Historical Justice and Structural Repair',
        summary: summaries[15],
    },
    {
        number: 17,
        romanNumeral: "XVII",
        category: 'Individual & Economic Rights',
        title: 'Economic Justice',
        summary: summaries[16],
    },
    {
        number: 18,
        romanNumeral: "XVIII",
        category: 'Individual & Economic Rights',
        title: 'Economic Liberty and Free Market Competition',
        summary: summaries[17],
    },
    {
        number: 19,
        romanNumeral: "XIX",
        category: 'Government Ethics',
        title: 'Term Limits and Judicial Tenure',
        summary: summaries[18],
    },
    {
        number: 20,
        romanNumeral: "XX",
        category: 'Checks & Balances',
        title: 'Majority Governance and Legislative Deliberation',
        summary: summaries[19],
    },
    {
        number: 21,
        romanNumeral: "XXI",
        category: 'Checks & Balances',
        title: 'Prevention of Government Shutdowns',
        summary: summaries[20],
    },
    {
        number: 22,
        romanNumeral: "XXII",
        category: 'Checks & Balances',
        title: 'War Powers and a Commitment to Peace',
        summary: summaries[21],
    },
    {
        number: 23,
        romanNumeral: "XXIII",
        category: 'Checks & Balances',
        title: 'Limitations on Emergency Powers',
        summary: summaries[22],
    },
    {
        number: 24,
        romanNumeral: "XXIV",
        category: 'Government Ethics',
        title: 'Independent Administration of Justice',
        summary: summaries[23],
    },
    {
        number: 25,
        romanNumeral: "XXV",
        category: 'Checks & Balances',
        title: 'Temporary Suspension of Executive Authority',
        summary: summaries[24],
    },
    {
        number: 26,
        romanNumeral: "XXVI",
        category: 'Constitutional Amendment Process',
        title: 'State-Initiated Amendment Procedure',
        summary: summaries[25],
    },
    {
        number: 27,
        romanNumeral: "XXVII",
        category: 'Individual & Economic Rights',
        title: 'State-Initiated Amendment Procedure',
        summary: summaries[26],
    },
    {
        number: 28,
        romanNumeral: "XXVII",
        category: 'Constitutional Amendment Process',
        title: 'Continuing Availability of Ratification',
        summary: summaries[27],
    },
]

module.exports = articles;

/*
CATEGORIES:

Voting & Elections: II, III, IV, V, XXVII
Civic Education (teaching people about how the gov. works) & Information Integrity: VI, X, XI, XII
Money, Political Influence, & Corporate Power: VII, IX, XIII
Government Ethics (not abusing power for personal/party benefit): VIII, XIX, XXIV
Individual and Economic Rights: I, XIV, XV, XVI, XVII, XVIII
Checks and Balances: XX, XXI, XXII, XXIII, XXV
Constitutional Amendment Process: XXVI, XXVII
*/