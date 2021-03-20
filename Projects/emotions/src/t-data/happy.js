const happy = [
    {
        input: 'i love my work',
        output: "happy",
    },
    {
        input: 'i love the way i am',
        output: "happy",
    },
    {
        input: 'i love being corrected',
        output: "happy",
    },
    {
        input: 'i love talking ideas',
        output: "happy",
    },
    {
        input: 'i love passing knowledge',
        output: "happy",
    },
    {
        input: 'have a good day',
        output: "happy",
    },
    {
        input: 'thanks for helping',
        output: "happy",
    },
    {
        input: 'you are a lovely soul',
        output: "happy",
    },
    {
        input: 'you look good today',
        output: "happy",
    },
    {
        input: "i absolutely think that",
        output: "happy",
    },
    {
        input: "i accept that",
        output: "happy",
    },
    // {
    //     input: "i am acclaimed",
    //     output: "happy",
    // },
    // {
    //     input: "I want to accomplish something",
    //     output: "happy",
    // },
    // {
    //     input: "that is a great accomplishment",
    //     output: "happy",
    // },
    // {
    //     input: "that is a great achievement",
    //     output: "happy",
    // },
    // {
    //     input: "put into action",
    //     output: "happy",
    // },
    // {
    //     input: "i am very active today",
    //     output: "happy",
    // },
    // {
    //     input: "i am admire you",
    //     output: "happy",
    // },
    // {
    //     input: "you are adorable",
    //     output: "happy",
    // },
    // {
    //     input: "what an adventure",
    //     output: "happy",
    // },
    // {
    //     input: "that is affirmative",
    //     output: "happy",
    // },
    // {
    //     input: "i am very affluent",
    //     output: "happy",
    // },
    // {
    //     input: "i agree with you",
    //     output: "happy",
    // },
    // {
    //     input: "you are very agreeable today",
    //     output: "happy",
    // },
    // {
    //     input: "you are amazing",
    //     output: "happy",
    // },
    // {
    //     input: "i took an aptitude test",
    //     output: "happy",
    // },
    // {
    //     input: "i am very attractive",
    //     output: "happy",
    // },
    // {
    //     input: "you are beaming today",
    //     output: "happy",
    // },
    // {
    //     input: "you are so beautiful",
    //     output: "happy",
    // },
    // {
    //     input: "i believe in you",
    //     output: "happy",
    // },
    // {
    //     input: "that is very beneficial",
    //     output: "happy",
    // },
    // {
    //     input: "i feel bliss today",
    //     output: "happy",
    // },
    // {
    //     input: "your love is boutiful",
    //     output: "happy",
    // },
    // {
    //     input: "what a bounty of money",
    //     output: "happy",
    // },
    // {
    //     input: "i feel brave",
    //     output: "happy",
    // },
    // {
    //     input: "bravo sir",
    //     output: "happy",
    // },
    // {
    //     input: "you are brilliant",
    //     output: "happy",
    // },
    // {
    //     input: "i feel very bubbly",
    //     output: "happy",
    // },
    // {
    //     input: "this is very calm",
    //     output: "happy",
    // },
    // {
    //     input: "i celebrated my birthday today",
    //     output: "happy",
    // },
    // {
    //     input: "i feel certain that is correct",
    //     output: "happy",
    // },
    // {
    //     input: "i am a champ",
    //     output: "happy",
    // },
    // {
    //     input: "i won because i am a champion",
    //     output: "happy",
    // },
    // {
    //     input: "you are so charming",
    //     output: "happy",
    // },
    // {
    //     input: "i feel very cheery today",
    //     output: "happy",
    // },
    // {
    //     input: "you made a great choice",
    //     output: "happy",
    // },
    // {
    //     input: "you look very classic today",
    //     output: "happy",
    // },
    // {
    //     input: "classical music is beautiful",
    //     output: "happy",
    // },
    // {
    //     input: "your kitchen is very clean",
    //     output: "happy",
    // },
    // {
    //     input: "i commend you on your work",
    //     output: "happy",
    // },
    // {
    //     input: "you composed a great essay",
    //     output: "happy",
    // },
    // {
    //     input: "congratulations on your promotion",
    //     output: "happy",
    // },
    // {
    //     input: "you are a constant in my life",
    //     output: "happy",
    // },
    // {
    //     input: "you are so cool",
    //     output: "happy",
    // },
    // {
    //     input: "you are very courageous",
    //     output: "happy",
    // },
    // {
    //     input: "i feel very creative doing this art",
    //     output: "happy",
    // },
    // {
    //     input: "the dog is so cute",
    //     output: "happy",
    // },
    // {
    //     input: "you look dazzling in that dress",
    //     output: "happy",
    // },
    // {
    //     input: "you are a delight",
    //     output: "happy",
    // },
    // {
    //     input: "you are delightful",
    //     output: "happy",
    // },
    // {
    //     input: "i feel very distinguished",
    //     output: "happy",
    // },
    // {
    //     input: "you look devine",
    //     output: "happy",
    // },
    // {
    //     input: "you are a very earnest person",
    //     output: "happy",
    // },
    // {
    //     input: "that was easy",
    //     output: "happy",
    // },
    // {
    //     input: "that makes me ecstatic",
    //     output: "happy",
    // },
    // {
    //     input: "that way is more effective",
    //     output: "happy",
    // },
    // {
    //     input: "you are very effervescent",
    //     output: "happy",
    // },
    // {
    //     input: "you are very efficient today",
    //     output: "happy",
    // },
    // {
    //     input: "that was effortless",
    //     output: "happy",
    // },
    // {
    //     input: "you look electrifying",
    //     output: "happy",
    // },
    // {
    //     input: "you look elegant in that dress",
    //     output: "happy",
    // },
    // {
    //     input: "you are enchanting",
    //     output: "happy",
    // },
    // {
    //     input: "that was encouraging",
    //     output: "happy",
    // },
    // {
    //     input: "you endorsed that deal",
    //     output: "happy",
    // },
    // {
    //     input: "i feel very energetic",
    //     output: "happy",
    // },
    // {
    //     input: "the coffee made me energized",
    //     output: "happy",
    // },
    // {
    //     input: "you are very engaging at work",
    //     output: "happy",
    // },
    // {
    //     input: "you are so enthusiastic",
    //     output: "happy",
    // },
    // {
    //     input: "you are essential to the company",
    //     output: "happy",
    // },
    // {
    //     input: "you are very esteemed",
    //     output: "happy",
    // },
    // {
    //     input: "that was a very ethical desicion",
    //     output: "happy",
    // },
    // {
    //     input: "excellent work",
    //     output: "happy",
    // },
    // {
    //     input: "this is very exciting",
    //     output: "happy",
    // },
    // {
    //     input: "you have exquisite taste",
    //     output: "happy",
    // },
    // {
    //     input: "you are fabulous",
    //     output: "happy",
    // },
    // {
    //     input: "you have a fair complexion",
    //     output: "happy",
    // },
    // {
    //     input: "you look familiar",
    //     output: "happy",
    // },
    // {
    //     input: "i wish i was a famous person",
    //     output: "happy",
    // },
    // {
    //     input: "that is fantastic",
    //     output: "happy",
    // },
    // {
    //     input: "that decision is favorable",
    //     output: "happy",
    // },
    // {
    //     input: "you look fetching in that shirt",
    //     output: "happy",
    // },
    // {
    //     input: "i'm fine",
    //     output: "happy",
    // },
    // {
    //     input: "that is very fitting",
    //     output: "happy",
    // },
    // {
    //     input: "your money is flourishing",
    //     output: "happy",
    // },
    // {
    //     input: "i am very fortunate to have you",
    //     output: "happy",
    // },
    // {
    //     input: "i am free",
    //     output: "happy",
    // },
    // {
    //     input: "i feel fresh and clean",
    //     output: "happy",
    // },
    // {
    //     input: "that person is very friendly",
    //     output: "happy",
    // },
    // {
    //     input: "this ride was very fun",
    //     output: "happy",
    // },
    // {
    //     input: "that joke was funny",
    //     output: "happy",
    // },
    // {
    //     input: "you are very generous with your money",
    //     output: "happy",
    // },
    // {
    //     input: "i am so smart i'm a genius",
    //     output: "happy",
    // },
    // {
    //     input: "your attitude is very genuine",
    //     output: "happy",
    // },
    // {
    //     input: "you are so giving",
    //     output: "happy",
    // },
    // {
    //     input: "that model is very glamorous",
    //     output: "happy",
    // },
    // {
    //     input: "that pregnant lady is glowing",
    //     output: "happy",
    // },
    // {
    //     input: "you are a good person",
    //     output: "happy",
    // },
    // {
    //     input: "you are gorgeous today",
    //     output: "happy",
    // },
    // {
    //     input: "your moves are graceful",
    //     output: "happy",
    // },
    // {
    //     input: "great job",
    //     output: "happy",
    // },
    // {
    //     input: "the grass is green",
    //     output: "happy",
    // },
    // {
    //     input: "i like the grin on your face",
    //     output: "happy",
    // },
    // {
    //     input: "your joy is growing",
    //     output: "happy",
    // },
    // {
    //     input: "you are so handsome",
    //     output: "happy",
    // },
    // {
    //     input: "you make me very happy",
    //     output: "happy",
    // },
    // {
    //     input: "your attitude is very harmonious",
    //     output: "happy",
    // },
    // {
    //     input: "the doctor was healing",
    //     output: "happy",
    // },
    // {
    //     input: "i am very healthy",
    //     output: "happy",
    // },
    // {
    //     input: "the meal was very hearty",
    //     output: "happy",
    // },
    // {
    //     input: "that food was heavenly",
    //     output: "happy",
    // },
    // {
    //     input: "i like that you are honest",
    //     output: "happy",
    // },
    // {
    //     input: "that was an honorable decision",
    //     output: "happy",
    // },
    // {
    //     input: "i am honored to work here",
    //     output: "happy",
    // },
    // {
    //     input: "give me a hug",
    //     output: "happy",
    // },
    // {
    //     input: "thats a great idea",
    //     output: "happy",
    // },
    // {
    //     input: "that is ideal",
    //     output: "happy",
    // },
    // {
    //     input: "you are so imaginative",
    //     output: "happy",
    // },
    // {
    //     input: "i can only imagine",
    //     output: "happy",
    // },
    // {
    //     input: "wow thats impressive",
    //     output: "happy",
    // },
    // {
    //     input: "you are so independent",
    //     output: "happy",
    // },
    // {
    //     input: "your work is very innovateive",
    //     output: "happy",
    // },
    // {
    //     input: "instant gratification",
    //     output: "happy",
    // },
    // {
    //     input: "that was instantaneous",
    //     output: "happy",
    // },
    // {
    //     input: "that idea was very instinctive",
    //     output: "happy",
    // },
    // {
    //     input: "you are so intellectual",
    //     output: "happy",
    // },
    // {
    //     input: "i feel very intelligent",
    //     output: "happy",
    // },
    // {
    //     input: "your thoughts are so intuitive",
    //     output: "happy",
    // },
    // {
    //     input: "that was very inventive",
    //     output: "happy",
    // },
    // {
    //     input: "you are so jovial today",
    //     output: "happy",
    // },
    // {
    //     input: "i feel great",
    //     output: "happy",
    // },
    // {
    //     input: "i like you",
    //     output: "happy",
    // },
    // {
    //     input: "i feel so much joy",
    //     output: "happy",
    // },
    // {
    //     input: "i feel jubilant today",
    //     output: "happy",
    // },
    // {
    //     input: "you are so keen to my feelings",
    //     output: "happy",
    // },
    // {
    //     input: "that was very kind",
    //     output: "happy",
    // },
    // {
    //     input: "you are so knowledgeable",
    //     output: "happy",
    // },
    // {
    //     input: "you make me laugh",
    //     output: "happy",
    // },
    // {
    //     input: "i learned a lot today",
    //     output: "happy",
    // },
    // {
    //     input: "that was legendary",
    //     output: "happy",
    // },
    // {
    //     input: "i see the light",
    //     output: "happy",
    // },
    // {
    //     input: "i love javascript",
    //     output: "happy",
    // },
    // {
    //     input: "i love life",
    //     output: "happy",
    // },
    // {
    //     input: "i feel so lively today",
    //     output: "happy",
    // },
    // {
    //     input: "you are beautiful",
    //     output: "happy",
    // },
    // {
    //     input: "you are so lovely",
    //     output: "happy",
    // },
    // {
    //     input: "i love you",
    //     output: "happy",
    // },
    // {
    //     input: "i like the weather today",
    //     output: "happy",
    // },
    // {
    //     input: "i love myself",
    //     output: "happy",
    // },
    // {
    //     input: "i'm so lucid",
    //     output: "happy",
    // },
    // {
    //     input: "i'm very lucky to have you",
    //     output: "happy",
    // },
    // {
    //     input: "that was marvelous",
    //     output: "happy",
    // },
    // {
    //     input: "your work is masterful",
    //     output: "happy",
    // },
    // {
    //     input: "youur thoughts are so meaningful",
    //     output: "happy",
    // },
    // {
    //     input: "that deserves merit",
    //     output: "happy",
    // },
    // {
    //     input: "that was miraculous",
    //     output: "happy",
    // },
    // {
    //     input: "your work is so motivating",
    //     output: "happy",
    // },
    // {
    //     input: "that movie was very moving",
    //     output: "happy",
    // },
    // {
    //     input: "your face looks natural",
    //     output: "happy",
    // },
    // {
    //     input: "you are so nice",
    //     output: "happy",
    // },
    // {
    //     input: "you are so nuturing to my feelings",
    //     output: "happy",
    // },
    // {
    //     input: "that dinner was very nutrious",
    //     output: "happy",
    // },
    // {
    //     input: "i am okay today",
    //     output: "happy",
    // },
    // {
    //     input: "you are the one",
    //     output: "happy",
    // },
    // {
    //     input: "my arms are open",
    //     output: "happy",
    // },
    // {
    //     input: "i feel optimistic today",
    //     output: "happy",
    // },
    // {
    //     input: "tghis vacation is paradise",
    //     output: "happy",
    // },
    // {
    //     input: "you look perfect",
    //     output: "happy",
    // },
    // {
    //     input: "your personality is so pleasant",
    //     output: "happy",
    // },
    // {
    //     input: "the happiness was pleasurable",
    //     output: "happy",
    // },
    // {
    //     input: "the food was plentiful",
    //     output: "happy",
    // },
    // {
    //     input: "your look is so polished",
    //     output: "happy",
    // },
    // {
    //     input: "he was very popular in school",
    //     output: "happy",
    // },
    // {
    //     input: "you are a very positive person",
    //     output: "happy",
    // },
    // {
    //     input: "the king was powerful",
    //     output: "happy",
    // },
    // {
    //     input: "you were very prepared today",
    //     output: "happy",
    // },
    // {
    //     input: "you are so pretty",
    //     output: "happy",
    // },
    // {
    //     input: "i was very productive at work",
    //     output: "happy",
    // },
    // {
    //     input: "you made great progress",
    //     output: "happy",
    // },
    // {
    //     input: "i am a proud parent",
    //     output: "happy",
    // },
    // {
    //     input: "you make me feel protectived",
    //     output: "happy",
    // },
    // {
    //     input: "that food was great quality",
    //     output: "happy",
    // },
    // {
    //     input: "you worked very quick today",
    //     output: "happy",
    // },
    // {
    //     input: "you seem quiet",
    //     output: "happy",
    // },
    // {
    //     input: "i am ready for the day",
    //     output: "happy",
    // },
    // {
    //     input: "that was very reassuring",
    //     output: "happy",
    // },
    // {
    //     input: "i am a refined person",
    //     output: "happy",
    // },
    // {
    //     input: "that was very refreshing",
    //     output: "happy",
    // },
    // {
    //     input: "you are very reliable",
    //     output: "happy",
    // },
    // {
    //     input: "you are remarkable",
    //     output: "happy",
    // },
    // {
    //     input: "that was resounding",
    //     output: "happy",
    // },
    // {
    //     input: "i feel respected by you",
    //     output: "happy",
    // },
    // {
    //     input: "i feel restored after sleep",
    //     output: "happy",
    // },
    // {
    //     input: "i will reward you for your work",
    //     output: "happy",
    // },
    // {
    //     input: "my job is rewarding",
    //     output: "happy",
    // },
    // {
    //     input: "you were right",
    //     output: "happy",
    // },
    // {
    //     input: "that was a robust idea",
    //     output: "happy",
    // },
    // {
    //     input: "you make me feel safe",
    //     output: "happy",
    // },
    // {
    //     input: "you did satisfactory today",
    //     output: "happy",
    // },
    // {
    //     input: "you make me feel secure",
    //     output: "happy",
    // },
    // {
    //     input: "he was a very simple person",
    //     output: "happy",
    // },
    // {
    //     input: "he was very skilled at his job",
    //     output: "happy",
    // },
    // {
    //     input: "he is very skillful",
    //     output: "happy",
    // },
    // {
    //     input: "you make me smile",
    //     output: "happy",
    // },
    // {
    //     input: "she was very soleful",
    //     output: "happy",
    // },
    // {
    //     input: "her eyes were sparkling",
    //     output: "happy",
    // },
    // {
    //     input: "you make me feel special",
    //     output: "happy",
    // },
    // {
    //     input: "he is a very spirted person",
    //     output: "happy",
    // },
    // {
    //     input: "i feel very spirtual at church",
    //     output: "happy",
    // },
    // {
    //     input: "you look stunning in that dress",
    //     output: "happy",
    // },
    // {
    //     input: "that was stupendous",
    //     output: "happy",
    // },
    // {
    //     input: "what a great success",
    //     output: "happy",
    // },
    // {
    //     input: "you are so successful in life",
    //     output: "happy",
    // },
    // {
    //     input: "it is very sunny today",
    //     output: "happy",
    // },
    // {
    //     input: "you did a super job",
    //     output: "happy",
    // },
    // {
    //     input: "that was superb",
    //     output: "happy",
    // },
    // {
    //     input: "you are terrific",
    //     output: "happy",
    // },
    // {
    //     input: "you were so thorough",
    //     output: "happy",
    // },
    // {
    //     input: "that ride was thrilling",
    //     output: "happy",
    // },
    // {
    //     input: "i am thriving in life",
    //     output: "happy",
    // },
    // {
    //     input: "i feel tranquil",
    //     output: "happy",
    // },
    // {
    //     input: "your idea was tranformative",
    //     output: "happy",
    // },
    // {
    //     input: "that was transforming",
    //     output: "happy",
    // },
    // {
    //     input: "you are so trusting",
    //     output: "happy",
    // },
    // {
    //     input: "you are so truthful",
    //     output: "happy",
    // },
    // {
    //     input: "that was unreal",
    //     output: "happy",
    // },
    // {
    //     input: "you are unwavering",
    //     output: "happy",
    // },
    // {
    //     input: "i am up and about",
    //     output: "happy",
    // },
    // {
    //     input: "you are so upbeat",
    //     output: "happy",
    // },
    // {
    //     input: "i am upright today",
    //     output: "happy",
    // },
    // {
    //     input: "you are an upstanding person",
    //     output: "happy",
    // },
    // {
    //     input: "you are valued at work",
    //     output: "happy",
    // },
    // {
    //     input: "you are so vibrant",
    //     output: "happy",
    // },
    // {
    //     input: "i am victorious",
    //     output: "happy",
    // },
    // {
    //     input: "that was a great victory",
    //     output: "happy",
    // },
    // {
    //     input: "i feel vigorous today",
    //     output: "happy",
    // },
    // {
    //     input: "i feel virtuous today",
    //     output: "happy",
    // },
    // {
    //     input: "you are vital at the company",
    //     output: "happy",
    // },
    // {
    //     input: "you are vivacious",
    //     output: "happy",
    // },
    // {
    //     input: "he is very wealthy",
    //     output: "happy",
    // },
    // {
    //     input: "you are welcome at my home",
    //     output: "happy",
    // },
    // {
    //     input: "you are doing so well at this",
    //     output: "happy",
    // },
    // {
    //     input: "i feel whole",
    //     output: "happy",
    // },
    // {
    //     input: "he is a wholesome person",
    //     output: "happy",
    // },
    // {
    //     input: "i am willing to help",
    //     output: "happy",
    // },
    // {
    //     input: "you are so wonderful",
    //     output: "happy",
    // },
    // {
    //     input: "i feel wondrous today",
    //     output: "happy",
    // },
    // {
    //     input: "i am worthy of your love",
    //     output: "happy",
    // },
    // {
    //     input: "wow you look great",
    //     output: "happy",
    // },
    // {
    //     input: "yes i would like that",
    //     output: "happy",
    // },
    // {
    //     input: "that food was yummy",
    //     output: "happy",
    // },
    // {
    //     input: "you are very zealous",
    //     output: "happy",
    // },
    // {
    //     input: "you are full of zeal today",
    //     output: "happy",
    // }
];
 
module.exports = happy;