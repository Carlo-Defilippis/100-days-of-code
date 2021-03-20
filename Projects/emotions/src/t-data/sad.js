// phrases known to be sad sounding

const sad = [
    {
        input: "humans are awful",
        output: "sad",
    },
    {
        input: "you are bad",
        output: "sad",
    },
    {
        input: "you are ugly",
        output: "sad",
    },
    {
        input: "i hate highschool",
        output: "sad",
    },
    {
        input: "windows sucks",
        output: "sad",
    },
    {
        input: "my friends hate me",
        output: "sad",
    },
    {
        input: "fuck you",
        output: "sad",
    },
    {
        input: "this is the worst",
        output: "sad",
    },
    {
        input: "you have no life",
        output: "sad",
    },
    {
        input: "don't fuck with me",
        output: "sad",
    },
    {
        input: "i want to end my life",
        output: "sad",
    },
    {
        input: "i hate",
        output: "sad",
    },
    // {
    //     input: "this is abysmal",
    //     output: "sad",
    // },
    // {
    //     input: "i am adverse",
    //     output: "sad",
    // },
    // {
    //     input: "this is alarming",
    //     output: "sad",
    // },
    // {
    //     input: "i am angry",
    //     output: "sad",
    // },
    // {
    //     input: "i am annoyed",
    //     output: "sad",
    // },
    // {
    //     input: "i am feeling anxious",
    //     output: "sad",
    // },
    // {
    //     input: "i don't have apathy",
    //     output: "sad",
    // },
    // {
    //     input: "this is appalling",
    //     output: "sad",
    // },
    // {
    //     input: "this is atrocious",
    //     output: "sad",
    // },
    // {
    //     input: "you are awful",
    //     output: "sad",
    // },
    // {
    //     input: "this is bad",
    //     output: "sad",
    // },
    // {
    //     input: "this is banal",
    //     output: "sad",
    // },
    // {
    //     input: "i am barbed",
    //     output: "sad",
    // },
    // {
    //     input: "you are belligerent",
    //     output: "sad",
    // },
    // {
    //     input: "i am bemoan",
    //     output: "sad",
    // },
    // {
    //     input: "this is beneath me",
    //     output: "sad",
    // },
    // {
    //     input: "you are boring",
    //     output: "sad",
    // },
    // {
    //     input: "i am broken",
    //     output: "sad",
    // },
    // {
    //     input: "this is callous",
    //     output: "sad",
    // },
    // {
    //     input: "i can't do this",
    //     output: "sad",
    // },
    // {
    //     input: "you are clumsy",
    //     output: "sad",
    // },
    // {
    //     input: "you are coarse",
    //     output: "sad",
    // },
    // {
    //     input: "you are cold",
    //     output: "sad",
    // },
    // {
    //     input: "you are cold-hearted",
    //     output: "sad",
    // },
    // {
    //     input: "this will collapse",
    //     output: "sad",
    // },
    // {
    //     input: "i am confused",
    //     output: "sad",
    // },
    // {
    //     input: "this is contradictory",
    //     output: "sad",
    // },
    // {
    //     input: "on the contrary",
    //     output: "sad",
    // },
    // {
    //     input: "this is corrosive",
    //     output: "sad",
    // },
    // {
    //     input: "you are corrupt",
    //     output: "sad",
    // },
    // {
    //     input: "this is crazy",
    //     output: "sad",
    // },
    // {
    //     input: "you are creepy",
    //     output: "sad",
    // },
    // {
    //     input: "this is criminal",
    //     output: "sad",
    // },
    // {
    //     input: "you are cruel",
    //     output: "sad",
    // },
    // {
    //     input: "i want to cry",
    //     output: "sad",
    // },
    // {
    //     input: "this is cutting",
    //     output: "sad",
    // },
    // {
    //     input: "you damage me",
    //     output: "sad",
    // },
    // {
    //     input: "you are damaging",
    //     output: "sad",
    // },
    // {
    //     input: "this is dastardly",
    //     output: "sad",
    // },
    // {
    //     input: "i am dead",
    //     output: "sad",
    // },
    // {
    //     input: "this is decaying",
    //     output: "sad",
    // },
    // {
    //     input: "you are deformed",
    //     output: "sad",
    // },
    // {
    //     input: "i deny things",
    //     output: "sad",
    // },
    // {
    //     input: "you are deplorable",
    //     output: "sad",
    // },
    // {
    //     input: "i am depressed",
    //     output: "sad",
    // },
    // {
    //     input: "you are deprived",
    //     output: "sad",
    // },
    // {
    //     input: "this is despicable",
    //     output: "sad",
    // },
    // {
    //     input: "you are detrimental",
    //     output: "sad",
    // },
    // {
    //     input: "you are dirty",
    //     output: "sad",
    // },
    // {
    //     input: "you are a disease",
    //     output: "sad",
    // },
    // {
    //     input: "this is disgusting",
    //     output: "sad",
    // },
    // {
    //     input: "i am disheveled",
    //     output: "sad",
    // },
    // {
    //     input: "you are dishonest",
    //     output: "sad",
    // },
    // {
    //     input: "i am dishonorable",
    //     output: "sad",
    // },
    // {
    //     input: "this is dismal",
    //     output: "sad",
    // },
    // {
    //     input: "i am in distress",
    //     output: "sad",
    // },
    // {
    //     input: "i don't like this",
    //     output: "sad",
    // },
    // {
    //     input: "this is dreadful",
    //     output: "sad",
    // },
    // {
    //     input: "this is dreary",
    //     output: "sad",
    // },
    // {
    //     input: "i am enraged",
    //     output: "sad",
    // },
    // {
    //     input: "you are eroding",
    //     output: "sad",
    // },
    // {
    //     input: "i am evil",
    //     output: "sad",
    // },
    // {
    //     input: "i fail",
    //     output: "sad",
    // },
    // {
    //     input: "this is faulty",
    //     output: "sad",
    // },
    // {
    //     input: "i am in fear",
    //     output: "sad",
    // },
    // {
    //     input: "you are feeble",
    //     output: "sad",
    // },
    // {
    //     input: "this is a fight",
    //     output: "sad",
    // },
    // {
    //     input: "you are filthy",
    //     output: "sad",
    // },
    // {
    //     input: "you are foul",
    //     output: "sad",
    // },
    // {
    //     input: "i am frightened",
    //     output: "sad",
    // },
    // {
    //     input: "i am frightful",
    //     output: "sad",
    // },
    // {
    //     input: "you are gawky",
    //     output: "sad",
    // },
    // {
    //     input: "this is ghastly",
    //     output: "sad",
    // },
    // {
    //     input: "you are grave",
    //     output: "sad",
    // },
    // {
    //     input: "you are greedy",
    //     output: "sad",
    // },
    // {
    //     input: "this is grim",
    //     output: "sad",
    // },
    // {
    //     input: "you are grimace",
    //     output: "sad",
    // },
    // {
    //     input: "you are gross",
    //     output: "sad",
    // },
    // {
    //     input: "you are grotesque",
    //     output: "sad",
    // },
    // {
    //     input: "this is gruesome",
    //     output: "sad",
    // },
    // {
    //     input: "i am guilty",
    //     output: "sad",
    // },
    // {
    //     input: "i am haggard",
    //     output: "sad",
    // },
    // {
    //     input: "this is hard",
    //     output: "sad",
    // },
    // {
    //     input: "this is hard-hearted",
    //     output: "sad",
    // },
    // {
    //     input: "this is harmful",
    //     output: "sad",
    // },
    // {
    //     input: "i hate",
    //     output: "sad",
    // },
    // {
    //     input: "this is hideous",
    //     output: "sad",
    // },
    // {
    //     input: "this is horrendous",
    //     output: "sad",
    // },
    // {
    //     input: "this is horrible",
    //     output: "sad",
    // },
    // {
    //     input: "you are hostile",
    //     output: "sad",
    // },
    // {
    //     input: "i hurt",
    //     output: "sad",
    // },
    // {
    //     input: "this is hurtful",
    //     output: "sad",
    // },
    // {
    //     input: "this is icky",
    //     output: "sad",
    // },
    // {
    //     input: "you are ignorant",
    //     output: "sad",
    // },
    // {
    //     input: "i will ignore you",
    //     output: "sad",
    // },
    // {
    //     input: "i feel ill",
    //     output: "sad",
    // },
    // {
    //     input: "this is immature",
    //     output: "sad",
    // },
    // {
    //     input: "this is imperfect",
    //     output: "sad",
    // },
    // {
    //     input: "this feels impossible",
    //     output: "sad",
    // },
    // {
    //     input: "you are inane",
    //     output: "sad",
    // },
    // {
    //     input: "i am inelegant",
    //     output: "sad",
    // },
    // {
    //     input: "you are infernal",
    //     output: "sad",
    // },
    // {
    //     input: "i am injured",
    //     output: "sad",
    // },
    // {
    //     input: "i am injurious",
    //     output: "sad",
    // },
    // {
    //     input: "you are insane",
    //     output: "sad",
    // },
    // {
    //     input: "this is insidious",
    //     output: "sad",
    // },
    // {
    //     input: "this is insipid",
    //     output: "sad",
    // },
    // {
    //     input: "i am jealous",
    //     output: "sad",
    // },
    // {
    //     input: "you are a junky",
    //     output: "sad",
    // },
    // {
    //     input: "this is lose situation",
    //     output: "sad",
    // },
    // {
    //     input: "this is lousy",
    //     output: "sad",
    // },
    // {
    //     input: "i am lumpy",
    //     output: "sad",
    // },
    // {
    //     input: "you are malicious",
    //     output: "sad",
    // },
    // {
    //     input: "you are mean",
    //     output: "sad",
    // },
    // {
    //     input: "this is menacing",
    //     output: "sad",
    // },
    // {
    //     input: "you are messy",
    //     output: "sad",
    // },
    // {
    //     input: "you are misshapen",
    //     output: "sad",
    // },
    // {
    //     input: "this is missing",
    //     output: "sad",
    // },
    // {
    //     input: "i am misunderstood",
    //     output: "sad",
    // },
    // {
    //     input: "you moan a lot",
    //     output: "sad",
    // },
    // {
    //     input: "this is moldy",
    //     output: "sad",
    // },
    // {
    //     input: "this is monstrous",
    //     output: "sad",
    // },
    // {
    //     input: "i am naive",
    //     output: "sad",
    // },
    // {
    //     input: "i am nasty",
    //     output: "sad",
    // },
    // {
    //     input: "i am naughty",
    //     output: "sad",
    // },
    // {
    //     input: "i negate things",
    //     output: "sad",
    // },
    // {
    //     input: "i am negative",
    //     output: "sad",
    // },
    // {
    //     input: "i never",
    //     output: "sad",
    // },
    // {
    //     input: "no i don't like it",
    //     output: "sad",
    // },
    // {
    //     input: "i am nobody",
    //     output: "sad",
    // },
    // {
    //     input: "i am nondescript",
    //     output: "sad",
    // },
    // {
    //     input: "this is nonsense",
    //     output: "sad",
    // },
    // {
    //     input: "i am not",
    //     output: "sad",
    // },
    // {
    //     input: "i am noxious",
    //     output: "sad",
    // },
    // {
    //     input: "i am self depricating",
    //     output: "sad",
    // },
    // {
    //     input: "i am objectionable",
    //     output: "sad",
    // },
    // {
    //     input: "i am odious",
    //     output: "sad",
    // },
    // {
    //     input: "you are offensive",
    //     output: "sad",
    // },
    // {
    //     input: "i am old",
    //     output: "sad",
    // },
    // {
    //     input: "you are oppressive",
    //     output: "sad",
    // },
    // {
    //     input: "this is pain to watch",
    //     output: "sad",
    // },
    // {
    //     input: "you perturb me",
    //     output: "sad",
    // },
    // {
    //     input: "i am pessimistic",
    //     output: "sad",
    // },
    // {
    //     input: "i am petty",
    //     output: "sad",
    // },
    // {
    //     input: "you are plain",
    //     output: "sad",
    // },
    // {
    //     input: "i am poisonous",
    //     output: "sad",
    // },
    // {
    //     input: "i am poor",
    //     output: "sad",
    // },
    // {
    //     input: "i have prejudice",
    //     output: "sad",
    // },
    // {
    //     input: "you are questionable",
    //     output: "sad",
    // },
    // {
    //     input: "i am quirky",
    //     output: "sad",
    // },
    // {
    //     input: "i quit",
    //     output: "sad",
    // },
    // {
    //     input: "i reject",
    //     output: "sad",
    // },
    // {
    //     input: "i renege my response",
    //     output: "sad",
    // },
    // {
    //     input: "you are repellant",
    //     output: "sad",
    // },
    // {
    //     input: "i am repotilian",
    //     output: "sad",
    // },
    // {
    //     input: "i am repugnant",
    //     output: "sad",
    // },
    // {
    //     input: "you are repulsive",
    //     output: "sad",
    // },
    // {
    //     input: "i want revenge",
    //     output: "sad",
    // },
    // {
    //     input: "you are revolting",
    //     output: "sad",
    // },
    // {
    //     input: "this is rocky",
    //     output: "sad",
    // },
    // {
    //     input: "this is rotten",
    //     output: "sad",
    // },
    // {
    //     input: "you are rude",
    //     output: "sad",
    // },
    // {
    //     input: "you are ruthless",
    //     output: "sad",
    // },
    // {
    //     input: "i am sad",
    //     output: "sad",
    // },
    // {
    //     input: "this is savage",
    //     output: "sad",
    // },
    // {
    //     input: "i am scared",
    //     output: "sad",
    // },
    // {
    //     input: "this is scary",
    //     output: "sad",
    // },
    // {
    //     input: "i want to scream",
    //     output: "sad",
    // },
    // {
    //     input: "this is severe",
    //     output: "sad",
    // },
    // {
    //     input: "this is shocking",
    //     output: "sad",
    // },
    // {
    //     input: "this is shoddy",
    //     output: "sad",
    // },
    // {
    //     input: "you are sick",
    //     output: "sad",
    // },
    // {
    //     input: "this is sickening",
    //     output: "sad",
    // },
    // {
    //     input: "you are sinister",
    //     output: "sad",
    // },
    // {
    //     input: "this is slimy",
    //     output: "sad",
    // },
    // {
    //     input: "you are smelly",
    //     output: "sad",
    // },
    // {
    //     input: "i am sobbing",
    //     output: "sad",
    // },
    // {
    //     input: "i'm not sorry",
    //     output: "sad",
    // },
    // {
    //     input: "this is spiteful",
    //     output: "sad",
    // },
    // {
    //     input: "this is sticky",
    //     output: "sad",
    // },
    // {
    //     input: "you are stinky",
    //     output: "sad",
    // },
    // {
    //     input: "it is stormy",
    //     output: "sad",
    // },
    // {
    //     input: "i am stressful",
    //     output: "sad",
    // },
    // {
    //     input: "i am stuck",
    //     output: "sad",
    // },
    // {
    //     input: "i am stupid",
    //     output: "sad",
    // },
    // {
    //     input: "i am substandard",
    //     output: "sad",
    // },
    // {
    //     input: "i am suspect",
    //     output: "sad",
    // },
    // {
    //     input: "you are stale",
    //     output: "sad",
    // },
    // {
    //     input: "i am suspicious",
    //     output: "sad",
    // },
    // {
    //     input: "this is tense",
    //     output: "sad",
    // },
    // {
    //     input: "this is terrible",
    //     output: "sad",
    // },
    // {
    //     input: "this is terrifying",
    //     output: "sad",
    // },
    // {
    //     input: "i feel threatening",
    //     output: "sad",
    // },
    // {
    //     input: "i am ugly",
    //     output: "sad",
    // },
    // {
    //     input: "i undermine",
    //     output: "sad",
    // },
    // {
    //     input: "this is unfair",
    //     output: "sad",
    // },
    // {
    //     input: "this is unfavorable",
    //     output: "sad",
    // },
    // {
    //     input: "i am unhappy",
    //     output: "sad",
    // },
    // {
    //     input: "this is unhealthy",
    //     output: "sad",
    // },
    // {
    //     input: "this is unjust",
    //     output: "sad",
    // },
    // {
    //     input: "i feel unlucky",
    //     output: "sad",
    // },
    // {
    //     input: "you are unpleasant",
    //     output: "sad",
    // },
    // {
    //     input: "you are unsatisfactory",
    //     output: "sad",
    // },
    // {
    //     input: "you are unsightly",
    //     output: "sad",
    // },
    // {
    //     input: "this is untoward",
    //     output: "sad",
    // },
    // {
    //     input: "i am unwanted",
    //     output: "sad",
    // },
    // {
    //     input: "i am unwelcome",
    //     output: "sad",
    // },
    // {
    //     input: "i am unwholesome",
    //     output: "sad",
    // },
    // {
    //     input: "this is unwieldy",
    //     output: "sad",
    // },
    // {
    //     input: "this is unwise",
    //     output: "sad",
    // },
    // {
    //     input: "i am upset",
    //     output: "sad",
    // },
    // {
    //     input: "i am vice",
    //     output: "sad",
    // },
    // {
    //     input: "you are vicious",
    //     output: "sad",
    // },
    // {
    //     input: "you are vile",
    //     output: "sad",
    // },
    // {
    //     input: "you are villainous",
    //     output: "sad",
    // },
    // {
    //     input: "you are vindictive",
    //     output: "sad",
    // },
    // {
    //     input: "i feel wary",
    //     output: "sad",
    // },
    // {
    //     input: "i feel weary",
    //     output: "sad",
    // },
    // {
    //     input: "you are wicked",
    //     output: "sad",
    // },
    // {
    //     input: "i am woeful",
    //     output: "sad",
    // },
    // {
    //     input: "i feel worthless",
    //     output: "sad",
    // },
    // {
    //     input: "would possibly",
    //     output: "sad",
    // },
    // {
    //     input: "i hate you",
    //     output: "sad",
    // },
    // {
    //     input: "i want to yell",
    //     output: "sad",
    // },
    // {
    //     input: "this isyucky",
    //     output: "sad",
    // },
    // {
    //     input: "i feel zero",
    //     output: "sad",
    // },
]

module.exports = sad;