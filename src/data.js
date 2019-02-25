const quotes = [
  {
    quote: 'Imagine smiling after a slap in the face. Then think of doing it twenty-four hours a day.',
    author: 'Markus Zusak, The Book Thief'
  },
  {
    quote: 'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: 'Marcus Aurelius, Meditations'
  },
  {
    quote: 'Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.',
    author: 'Marcus Aurelius, Meditations'
  },
  {
    quote: 'Warriors should suffer their pain silently',
    author: 'Erin Hunter, Into the Wild'
  },
  {
    quote: 'It is the power of the mind to be unconquerable.',
    author: 'Seneca, The Stoic Philosophy of Seneca: Essays and Letters'
  },
  {
    quote: "Complaining does not work as a strategy. We all have finite time and energy. Any time we spend whining is unlikely to help us achieve our goals. And it won't make us happier",
    author: 'Randy Pausch, The Last Lecture'
  },
  {
    quote: "Life is such unutterable hell, solely because it is sometimes beautiful. If we could only be miserable all the time, if there could be no such things as love or beauty or faith or hope, if I could be absolutely certain that my love would never be returned: how much more simple life would be. One could plod through the Siberian salt mines of existence without being bothered about happiness. Unfortunately the happiness is there. There is always the chance (about eight hundred and fifty to one) that another heart will come to mine. I can't help hoping, and keeping faith, and loving beauty. Quite frequently I am not so miserable as it would be wise to be.",
    author: 'T.H. White, Ghostly, Grim and Gruesome'
  },
  {
    quote: 'People hide their truest nature. I understood that; I even applauded it. What sort of world would it be if people bled all over the sidewalks, if they wept under trees, smacked whomever they despised, kissed strangers, revealed themselves?',
    author: 'Alice Hoffman, The Ice Queen'
  },
  {
    quote: "Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them.",
    author: 'Lucius Annaeus Seneca, Letters from a Stoic'
  },
  {
    quote: 'How do you defeat terrorism? Don’t be terrorized.',
    author: 'Salman Rushdie, Step Across This Line: Collected Nonfiction 1992-2002'
  },
  {
    quote: 'Feeling too much is a hell of a lot better than feeling nothing.',
    author: 'Nora Roberts, Midnight Bayou'
  },
  {
    quote: 'Always resignation and acceptance. Always prudence and honour and duty. Elinor, where is your heart?',
    author: 'Jane Austen, Sense and Sensibility'
  },
  {
    quote: 'There will never come a time when I will be able to resist my emotions.',
    author: 'Louise Erdrich, Tales of Burning Love'
  },
  {
    quote: 'It is not the man who has too little that is poor, but the one who hankers after more.',
    author: 'Lucius Annaeus Seneca, Letters from a Stoic'
  },
  {
    quote: 'I hear my silence talked of in every lane; The suppression of a cry is itself a cry of pain.',
    author: 'Darshan Singh'
  },
  {
    quote: 'You should … live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself.',
    author: 'Lucius Annaeus Seneca, Letters from a Stoic'
  },
  {
    quote: "From the philosopher Catulus, never to be dismissive of a friend's accusation, even if it seems unreasonable, but to make every effort to restore the relationship to its normal condition.",
    author: 'Marcus Aurelius, Meditations'
  },
  {
    quote: 'What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.',
    author: 'Epictetus'
  },
  {
    quote: "My boyfriends have all been as stoical as queen's guards. They'd been patient, committed, and dispassionate, and I'd had to really debase myself to extract any emotion, either grin or grimace, from them.",
    author: 'Koren Zailckas, Fury: A Memoir'
  },
  {
    quote: 'For death remembered should be like a mirror,Who tells us life’s but breath, to trust it error.',
    author: 'William Shakespeare, Pericles'
  },
  {
    quote: 'If what you have seems insufficient to you, then though you possess the world, you will yet be miserable.',
    author: 'Seneca'
  },
  {
    quote: 'A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.',
    author: 'Taleb Nassim Nicholas'
  },
  {
    quote: 'Misfortune nobly born is good fortune.',
    author: 'Marcus Aurelius, Meditations'
  },
  {
    quote: 'Life is such unutterable hell, solely because it is sometimes beautiful. If we could only be miserable all the time, if there could be no such things as love or beauty or faith or hope, if I could be absolutely certain that my love would never be returned: how much more simple life would be. One could plod through the Siberian salt mines of existence without being bothered about happiness.',
    author: 'T.H. White, Alfred Hitchcock Presents: Stories That Scared Even Me'
  },
  {
    quote: 'othing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company.',
    author: 'Seneca'
  },
  {
    quote: "I've come to the point where I never feel the need to stop and evaluate whether or not I am happy. I'm just 'being', and without question, by default, it works.",
    author: 'Criss Jami, Diotima, Battery, Electric Personality'
  },
  {
    quote: 'Maximum remedium est irae mora.',
    author: 'Lucius Annaeus Seneca'
  },
  {
    quote: 'It is more necessary for the soul to be cured than the body; for it is better to die than to live badly.',
    author: 'Epictetus'
  },
  {
    quote: "Thoroughly convinced of the impossibility of his own suit, a high resolve constrained him not to injure that of another. This is a lover's most stoical virtue, as the lack of it is a lover's most venial sin.",
    author: 'Thomas Hardy, Far From the Madding Crowd'
  },
  {
    quote: "There was a lot of pretense floating around; not just with aunties and all that but with emotions and how people saw you. They had a point. There's a lot to learn from that generation -- the stoic approach. I think it's disgusting how they've been forgotten about in this way. It's the American hippies' fault, they saw an in there, a way of making money out of bad moods. That's all it is most of the time. You can't expect to feel cock-a-hoop every minute of every day. My mam and dad's generation understood this. They were just thankful the bombs had stopped threatening their lives. They just wanted to get on with living.",
    author: 'Mark E. Smith, Renegade'
  },
  {
    quote: 'Here is your great soul—the man who has given himself over to Fate; on the other hand, that man is a weakling and a degenerate who struggles and maligns the order of the universe and would rather reform the gods than reform himself.',
    author: 'Seneca'
  },
  {
    quote: "Philosophy does not promise to secure anything external for man, otherwise it would be admitting something that lies beyond its proper subject-matter. For as the material of the carpenter is wood, and that of statuary bronze, so the subject-matter of the art of living is each person's own life.",
    author: 'Epictetus'
  },
  {
    quote: 'For in this Case, we are not to give Credit to the Many, who say, that none ought to be educated but the Free; but rather to the Philosophers, who say, that the Well-educated alone are free.',
    author: 'Epictetus'
  },
  {
    quote: '...when I asked him if he forgave me, he answered that he was not in the habit of cherishing the remembrance of vexation; that he had nothing to forgive; not having been offended.',
    author: 'Charlotte Brontë, Jane Eyre'
  },
  {
    quote: 'What a singularly deep impression her injustice seems to have made on your heart! No ill-usage so brands its record on my feelings. Would you not be happier if you tried to forget her severity, together with the passionate emotions it excited? Life appears to me too short to be spent in nursing animosity, or registering wrongs.',
    author: 'Charlotte Brontë, Jane Eyre'
  },
  {
    quote: 'Is the child or wife of another dead? There is no one who would not say, “This is an accident of mortality.” But if anyone’s own child happens to die, it is immediately, “Alas! how wretched am I!” It should be always remembered how we are affected on hearing the same thing concerning others.',
    author: 'Epictetus, Enchiridion'
  },
  {
    quote: 'Let whatever appears to be the best be to you an inviolable law. And if any instance of pain or pleasure, glory or disgrace, be set before you, remember that now is the combat, now the Olympiad comes on, nor can it be put off; and that by one failure and defeat honor may be lost or—won.',
    author: 'Epictetus, Enchiridion'
  },
  {
    quote: 'She looks as if she were thinking of something beyond her punishment—beyond her situation: of something not round nor before her.',
    author: 'Charlotte Brontë, Jane Eyre'
  },
  {
    quote: 'A man is as unhappy as he has convinced himself he is.',
    author: 'Seneca, Letters from a Stoic'
  },
  {
    quote: 'When pain comes, it must not derail you from your set virtues. If it does, you have failed to practice your virtues by going with the hype of pain.',
    author: 'Tiisetso Maloma, The Anxious Entrepreneur: Anxiety Defeats Creativity, Creativity Defeats Anxiety'
  },
  {
    quote: "In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts, don't wander. In your soul, don't be passive or aggressive. In your life, don't be all about business.",
    author: 'Marcus Aurelius, Meditations'
  },
  {
    quote: 'After failure, it is possible to keep going– and to fail better.',
    author: 'Slavoj Žižek'
  },
  {
    quote: 'Making noble resolutions is not as important as keeping the resolutions you have made already',
    author: 'Seneca, Letters from a Stoic'
  },
  {
    quote: 'The first principle of practical Stoicism is this: we don’t react to events; we react to our judgments about them, and the judgments are up to us.',
    author: "Ward Farnsworth, The Practicing Stoic: A Philosophical User's Manual"
  },
  {
    quote: "If I did compress what I know and think about the spanish civil war into 6 lines you wouldn't print it. You wouldn't have the guts.",
    author: 'George Orwell, Essays'
  },
  {
    quote: 'In the first place, sensation (aisthesis) is a corporeal process which we have in common with animals, and in which the impression of an exterior object is transmitted to the soul. By means of this process, an image (phantasia) of the object is produced in the soul, or more precisely in the guiding part (hegemonikon) of the soul',
    author: 'Pierre Hadot, The Inner Citadel: The Meditations of Marcus Aurelius'
  },
  {
    quote: 'Sometimes, even to live is an act of courage.',
    author: 'Seneca'
  },
  {
    quote: 'The willing are led by fate, the reluctant are dragged.',
    author: 'Cleanthes of Assos, Hymn to Zeus'
  },
  {
    quote: "At dawn, when you have trouble getting out of bed, tell yourself,\"I have to go to work - as a human being. What do I have to complain of, if I'm going to do what I was born for - the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm?",
    author: 'Marcus Aurelius, Meditations'
  },
  {
    quote: 'Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions — not outside.',
    author: 'Marcus Aurelius, Meditations'
  },
  {
    quote: 'If you have assumed any character beyond your strength, you have both demeaned yourself ill in that and quitted one which you might have supported.',
    author: 'Epictetus, Enchiridion'
  },
  {
    quote: 'Soon, you will have forgotten everything. Soon, everybody will have forgotten you.',
    author: 'Marcus Aurelius, Meditations'
  },
  {
    quote: 'That which Fortune has not given, she cannot take away.',
    author: 'Seneca the Younger'
  },
  {
    quote: "The man who looks for the morrow without worrying over it knows a peaceful independence and a happiness beyond all others. Whoever has said, \"I have lived' receives a windfall every day he gets up in the morning.",
    author: 'Seneca, Letters from a Stoic'
  },
  {
    quote: "Show me a man who though sick is happy, who though in danger is happy, who though in prison is happy, and I'll show you a Stoic.",
    author: 'Epictetus'
  },
  {
    quote: 'You should, I need hardly say, live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself.',
    author: 'Seneca, Letters from a Stoic'
  },
]

export default quotes