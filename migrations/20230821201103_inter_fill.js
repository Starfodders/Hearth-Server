
exports.up = function(knex) {
  return knex('pages').insert([
    {
        id: 181,
        page_num: 181,
        title: null,
        type: 'special',
        content: 'Welcome to Interpersonal Effectiveness! Joining you for this chapter will be |Igo and |Ewa, two twins who are hurriedly heading to the Hearth but need to learn some skills to work with one another. After all, relationships are precious things!',
        can_save: false,
        images: 'igoPrompt',
        unit_id: 24
    },
    {
        id: 182,
        page_num: 182,
        title: null,
        type: 'text',
        content: 'Relationships are highly valuable to the quality of our lives, but are vulnerable. They bring |love, |companionship, and |support yet in a matter of moments can become broken beyond repair. That is why in this chapter we will learn important |interpersonal (meaning the relationships or communications between people) skills to keep these relationships alive and healthy.',
        can_save: true,
        unit_id: 24
    },
    {
        id: 183,
        page_num: 183,
        title: null,
        type: 'summary',
        content: 'The most important skill in Interpersonal Effectiveness is |assertiveness which is |asking for what you want, saying |no, and negotiating conflicts |without |damaging the relationship. But before we learn this, we must learn a few other key points.',
        can_save: true,
        unit_id: 24
    },
    {
        id: 184,
        page_num: 184,
        title: 'Mindful Attention',
        type: 'text',
        content: "Relationships require attention, whether its romantic or platonic. A good relationship depends on |noticing the other person’s feelings and reactions and then watching the communication process between you.;You can use the skills learnt from Mindfulness to remain in the moment which allows you to actively use your senses to respond to situations. This attention also helps prevent conflict as you gain more time to understand and clarify any misconceptions. This attention also involves watching your own reactions and emotions to prevent any distress.",
        can_save: true,
        unit_id: 24
    },
    {
        id: 185,
        page_num: 185,
        title: 'Mindful Attention Steps',
        type: 'technique',
        content: "Cultivating your mindful attention is important to recognize the state of your relationships and read any signals between you and others. During the next conversation you have, practice being an |observer and attend to the other person’s physical and verbal behaviour. Is there anything they say or do that is hard to read? Ask a question to clarify!;How are you feeling? Are you doing okay?;How are we doing? Are we okay?;How are things between us?;I notice (insert observation), is that accurate?;Is everything okay with you? With us?;Also notice your own needs and feelings in the interaction and if you need to communicate them to be understood.",
        can_save: true,
        transcript: false,
        unit_id: 24
    },
    {
        id: 186,
        page_num: 186,
        title: 'Compassion for Others',
        type: 'text',
        content: 'As you learned in previous chapters, to show compassion is to recognize a person’s |pain and offer |them help without judgment. In many ways, pain and suffering unite all human beings because it is an inevitable experience.;To develop a compassionate attitude is to recognize we are all trying our best in this life, despite the pain and suffering, and using whatever coping skills are available. Yet we often judge others for behaving differently than how we think they |should be performing. Or we judge them in behaving in a disagreeable manner.',
        can_save: true,
        unit_id: 24
    },
    {
        id: 187,
        page_num: 187,
        title: 'Other-Compassion Meditation',
        type: 'text',
        content: "How often do you stop and think of what that individual may be struggling with? By extending your compassion towards all people-including ones you don’t like-you learn to let go of judgments and their related negative emotions. You learn to open your heart and mind to other possibilities and potentially develop stronger connections with people.;Consider the technique below to build this compassion. Start with |mindful |breathing to help you relax and focus.;Incorporate this meditation into your |still |mind practice and try to incorporate the same intentions into your daily interactions with other people.",
        can_save: true,
        unit_id: 24
    },
    {
        id: 188,
        page_num: 188,
        title: null,
        type: 'text',
        content: "Our behaviour can be passive or aggressive at times and skewing too much in one direction can lead to ineffective patterns that can jeopardize your relationships.",
        can_save: true,
        unit_id: 25
    },
    {
        id: 189,
        page_num: 189,
        title: 'Passive Behaviour',
        type: 'text',
        content: "Being passive can seem safe because you go along with what others want. In the long term, remaining passive leads to |giving |in to other people’s desires and |abandoning your own needs, creating frustration and resentment that builds up inside of you. Eventually, this pain can cause you to leave the relationship.;The irony is that in the short term, being passive can seem to protect the relationship. This will lead to a dynamic that is unsustainable.",
        can_save: true,
        unit_id: 25
    },
    {
        id: 190,
        page_num: 190,
        title: 'Aggressive Behaviour',
        type: 'text',
        content: "Being aggressive can push others away. It is founded on two false beliefs.;The first is a strong sense of how things |should be according to your |own opinion. Your sense of right and wrong dictates how you think others should behave and when they do not act appropriately in a situation, you feel like you need to punish them.;The second source is a need for |control. Things have to go a certain way and you expect certain outcomes to happen or not happen. When these expectations are violated, you grow angry and try to apply more pressure to regain control.",
        can_save: true,
        unit_id: 25
    },
    {
        id: 191,
        page_num: 191,
        title: 'Which Type Are You?',
        type: 'list',
        content: "Both passivity and aggression can destroy relationships and lead to a painful life. Igo and Ewa fluctuate on which type of behaviour they can display. They wonder which type are you?;See if any of the below apply to you.",
        can_save: true,
        images: 'igoPrompt',
        list: "I go along with something, even if I don’t like it.; I push people to do what’s right, even if there’s an upsetting situation.; I try to be pleasant and easygoing, no matter what people do or say.; I give people a piece of my mind when they deserve it.; I always try to be sensitive to what other people need and feel, even if my own needs get lost in the process.; I know what I want and insist on it, even if it means having to get angry.; When there’s a conflict, I tend to give in and let things go the other person’s way.; When people don’t do what’s appropriate and reasonable, I don’t let them get away with it.; I’ll pull away from a relationship rather than say anything that could be upsetting.; You can’t let people continue being selfish or stupid; you have to shake them till they see what they’re doing.; I leave people alone, and let them be whatever they are.; If people ignore my needs or insist on things that don’t work for me, I get more and more upset until they pay attention.",
        unit_id: 25
    },
    {
        id: 192,
        page_num: 192,
        title: 'I Want-They Want Ratio',
        type: 'text',
        content: "Relationships consist of two people trying to get what they need. Sometimes it can be the same thing, whether it is companionship, recreation, calm, and quiet, sharing a common interest makes the relationship easy.;When one person wants something the other doesn’t want to give, that’s where conflict arises. To succeed, you will need to be able to:;Know and say what you desire.;Notice or find out what the other person desires.;Negotiate and compromise so you can get at least some of what you want.;Give what you can of what the other person wants.;Think about your relationship with one individual. Think about what you want and how well it is achieved. Now think about what they want and how much of that is achieved.",
        can_save: true,
        unit_id: 25
    },
    {
        id: 193,
        page_num: 193,
        title: 'I Want-They Want Ratio',
        type: 'list',
        content: "I Want-I Should Ratio. This is the balance of seeking what you |want to do and doing what you |should do in a relationship. If your focus is directed only towards getting what you want, then you will earn |resentment from the other. Conversely, if you only focus on doing what you should be doing, the relationship will feel like a |joyless |burden.;Prioritizing what you should be doing may lead to you ignoring important personal needs. This can lead to pain or desperation.;Igo and Ewa have a list for you to consider. The more on the list that applies to you or that you agree with, the more likely you are to |deny your own needs in a relationship.",
        images:"igoPrompt",
        list: "You should try to give everything that’s asked of you in a relationship, even when it means putting your own needs aside.; When someone is in pain, you should do anything required to help them.; You should be caring and considerate at all times.; You shouldn’t ask for something if you know the other person doesn’t want to give it.; There is a right way to act with people, and it should be followed even if it means keeping quiet about your feelings and needs.; You shouldn’t say no to people, it’s impolite.; You shouldn’t express feelings that might upset someone, it’s wrong.; You should respond to the needs of others because their needs are a high priority.; You should never hurt or offend anyone.; You should try not to disappoint others.",
        can_save: true,
        unit_id: 25
    },
    {
        id: 194,
        page_num: 194,
        title: 'Skill Building',
        type: 'text',
        content: "The previous unit was identifying potential problems in your interpersonal behaviours. Developing the skills to improve them will be hard, but valuable work. We will go over some key interpersonal skills next that will change how you feel about your relationships and help you solve significant problems.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 195,
        page_num: 195,
        title: 'Six Skills (pt. 1)',
        type: 'text',
        content: "The first skill is |knowing |what |you |want. Pay attention to your desires, you discomforts and look for a way, in your mind, to describe them.;|Asking |for |what |you |want |in |a |way |that |protects |the |relationship is the second skill. Put your needs into words that are clear and without attacking the individual, ask for specific behavioural change(s).;The third skill is |negotiating |conflicting |wants. This draws on the ability to compromise so that each person gets to meet their needs. It assumes each person’s needs are valid and understandable.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 196,
        page_num: 196,
        title: 'Six Skills (pt. 2)',
        type: 'text',
        content: "The fourth skill is |getting |information. This is a crucial skill that deserves its own slide. This involves gathering knowledge on what the person |needs, |fears, |hopes |for, and other relevant information.;This skill can be impeded by several barriers. We can |falsely |assume what the other person wants. We can |project our own fears, needs and feelings onto the other person. We |fear coming off as nosy and are prying into their personal lives. We |fear hearing something we do not want to hear. We |don’t |know how to ask what it is we are looking for.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 197,
        page_num: 197,
        title: 'Six Skills (pt. 3)',
        type: 'text',
        content: "The fifth step is learning how to |say |no |in |a |way |that |protects |the |relationship. You can say no in a passive way that can be overridden. You can say no in an aggressive way that alienates people. Or you can say no in an |assertive way that validates their needs while setting firm boundaries about what you will or won’t do.;The sixth skill is |acting |according |to |your |values. Ask yourself what kind of relationships do you want? By acting in accordance with your values, you manifest the relationships you want through your interactions with others. You also lose meaningless relationships that are unhealthy and unaligned with your values.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 198,
        page_num: 198,
        title: null,
        type: 'summary',
        content: "The six skills of building healthy interpersonal relationships are: 1. |knowing |what |you |want. 2. |asking |for |what |you |want |in |a |way |that |protects |the |relationship. 3. |negotiating |conflicting |wants. 4. |getting |information. 5. saying |no |in |a |way |that |protects |the |relationship. 6. |acting |according |to |your |values.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 199,
        page_num: 199,
        title: null,
        type: 'text',
        content: "The next few pages will go over the potential blocks to properly using these new interpersonal skills.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 200,
        page_num: 200,
        title: 'Old Habits of the Aggressive Kind',
        type: 'list',
        content: "We model our behaviours after the environments and role models we had early in our development. If members of your family dealt with conflict using |anger, |blame, or |withdrawal, these are the skills you may have picked up as well.;Igo and Ewa will go over some of these |aversive |strategies, skills you may be using currently to resolve interpersonal problems.;If you find any of these applicable to yourself, ask yourself how these behaviours impact your relationships and whether you want to change them?",
        images:'igoPrompt',
        list: "Discounting. Telling others that their needs or feelings are invalid, illegitimate, and unimportant.; Withdrawing/abandoning. Using the fear of abandonment as leverage to make the other person give up their own needs to avoid being left behind.; Threatening. Sending others the message that you will inflict some sort of harm onto them if they do not do what you want.; Blaming. The belief that others are at fault and are therefore responsible for fixing the problem.; Belittling/denigrating. This is making someone feel wrong for having a particular need, opinion, or feeling.; Guilt-tripping. This is making someone feel that their needs are morally wrong and need to be given up.; Derailing. This involves switching attention away from their needs or feelings and focus it on yourself.; Taking away. You draw away your support, pleasure, or reinforcement from somebody as a punishment for something they said, did, or wanted.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 201,
        page_num: 201,
        title: 'Old Habits of the Passive Kind',
        type: 'text',
        content: "As covered previously, being passive in what you want may appear to have short term benefits in the relationship, but can lead to burnout through the denial of your own needs.;To stop passive behaviour, observe it closely. Ask yourself when was the last time you gave up something you wanted to do to appease somebody else? How did this impact the relationship? How did this make you feel?;Use the external resource link to access the |conflict |log where you can reflect on both passive and aggressive behaviour. ",
        links: 'old-passive-habit',
        can_save: true,
        unit_id: 26
    },
    {
        id: 202,
        page_num: 202,
        title: 'Overwhelming Emotion',
        type: 'list',
        content: "When we experience overwhelming emotion, this can impede our best intentions or plans and lead to actions you would not take normally. A potential |dissociative |fugue state, a state of anger where you act and upon later reflection, these actions seem to have been done by somebody else. Your interpersonal skills being overwritten by emotional distress, leading to potential emotional or physical harm to others.;It is important to identify |red |flags in yourself that correspond to feelings or behaviours that can signal a loss of control. If you notice these red flags, implement mindful breathing exercises or other distress tolerance skills to deescalate your emotions. Igo and Ewa have some examples of signals.",
        images:'igoPrompt',
        list: "Feeling hot or flushed.; Heart pounding.; Short of breath.; Tension in your hands, arms, forehead, or shoulders.; Talking more rapidly or more loudly than usual.; Feeling a strong need to win, to crush someone, to make them feel bad.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 203,
        page_num: 203,
        title: 'Fear',
        type: 'technique',
        content: "When you’re afraid, your interpersonal skills take a back seat as you begin to have catastrophic thoughts. What if I’m rejected? What if I lose my job? These thoughts can lead to adverse reactions, aggression, or avoidance of a situation.;Wise mind meditation can help face your fears as well as |fear |management. Using the external resource link, you can access the risk assessment and risk planning of fear management.;The first page is to consider your fears, providing evidence towards why it might occur and why it might not.;The second page is to create plans around a fear actually occurring. If it does, what coping plan will you have in place to manage your distress? What resources, family, friends, or services do you have around you?",
        links:'fear-management',
        can_save: true,
        unit_id: 26
    },
    {
        id: 204,
        page_num: 204,
        title: 'Toxic Relationships',
        type: 'text',
        content: "If you are in a relationship or relationships that are toxic, where others use aversive techniques on you and make interpersonal skills difficult to use, leave the relationship. Distance yourself from these individuals as their behaviour will continuously bring you down and make you feel vulnerable.;In situations where you can’t leave-such as a toxic boss-you should try two things. The first is to |calm |yourself before talking to them, using mindful breathing to centre yourself. The second is to |anticipate |their |behaviours based on previous experience. Predict how this individual will act and prepare a coping strategy to keep yourself from falling into old, ineffective patterns.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 205,
        page_num: 205,
        title: 'Myths (pt. 1)',
        type: 'text',
        content: "These next few slides will close out Basic Interpersonal Effectiveness and discuss four myths that will paralyze you in a relationship.;The first myth is |there |is |something |wrong |with |me |if |I |have |needs. It is not shameful or wrong to have needs, it is a basic human necessity. We spend our lives trying to get things from others: love, support, help, kindness.;A healthier outlook is |I |have |a |right |to |want |things.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 206,
        page_num: 206,
        title: 'Myths (pt. 2)',
        type: 'text',
        content: "The second myth is |I |won’t |be |able |to |stand |it |if |the |other |person |says |no. Hearing a refusal is hurtful and contemplating asking for something that can be refused is scary. But is it true that you can’t stand it? Think of the rejections you’ve suffered in your life, you have survived them. Refusals hurt, but living with pain by not being able to ask for what you need is worse.;A healthier outlook is |I |have |a |right |to |want |things |even |if |the |other |person |won’t |give |them.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 207,
        page_num: 207,
        title: 'Myths (pt. 3)',
        type: 'text',
        content: "The third myth is |it |is |selfish |to |say |no |to |things. Perhaps you grew up with the mentality that your own needs weren’t as important as others. This is false! Your needs are valid too and it is not selfish to set limits. It is healthy and necessary.;A healthy outlook to this myth is |it |is |normal |and |healthy |to |ask |for |things.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 208,
        page_num: 208,
        title: 'Myths (pt. 4)',
        type: 'text',
        content: "The fourth and final myth the belief that |I |have |no |control |over |things. Control is relative. You can’t control others and there are things in your environment you cannot control either. But you can control your own behaviour. In the past you may have been using ineffective coping strategies which can lead to a feeling of helplessness. Assertive behaviour gets better results, you are heard more often and your boundaries are better respected, resulting in positive interactions.;A healthier outlook is |I |can |choose |to |behave |in |more |effective |ways. ",
        can_save: true,
        unit_id: 26
    },
    {
        id: 209,
        page_num: 209,
        title: 'Myths and their Better Outlooks',
        type: 'summary',
        content: "The myths you may face are:;1. |there |is |something |wrong |with |me |if |I |have |needs;2. |I |won’t |be |able |to |stand |it |if |the |other |person |says |no;3. |it |is |selfish |to |say |no |to |things.;4.|I |have |no |control |over |things.;The healthier outlooks are:;1. |I |have |a |right |to |want |things.;2. |I |have |a |right |to |want |things |even |if |the |other |person |won’t |give |them.;3. |It |is |normal |and |healthy |to |ask |for |things.;4. |I |can |choose |to |behave |in |more |effective |ways.",
        can_save: true,
        unit_id: 26
    },
    {
        id: 210,
        page_num: 210,
        title: null,
        type: 'text',
        content: "This section of interpersonal effectiveness will go over specific skills that will help you build and maintain healthy relationships.",
        can_save: true,
        unit_id: 27
    },
    {
        id: 211,
        page_num: 211,
        title: 'Knowing What You Want',
        type: 'technique',
        content: "Having self-awareness of what you want is the first step to developing successful interpersonal skills. Emotional regulation skills in the previous chapter will teach you how to classify your emotions. Using those skills, think of if the emotion and if it was |good or |bad. Then try to be more specific. If it was good, was the emotion of satisfaction, excitement, love? If it was bad, was the emotion anger, fear, guilt?;Once you can put these emotions into words, you can decide what you want to change about it. Do you want someone to change their behaviour? Do you want something to stop?;Consider the technique below.",
        transcript: true,
        can_save: true,
        unit_id: 27
    },
    {
        id: 212,
        page_num: 212,
        title: "Legitimate Rights",
        type: 'text',
        content: "You may experience anxiety bringing up your desires and needs. You are an individual that deserves to be heard, to trouble others with your needs, to disappoint, to annoy, to push others to make an effort for you. This is because you are a human being that feels, yearns, who hurts, and struggles.;Growing up in an unsupportive environment, you may learn to invalidate your own feelings. To remind yourself of your value and importance, consider the external resource link where there is a list of your |legitimate |rights. Read it over and put the rights that empower you the most in an accessible place for you to reference.",
        links: 'legitimate-rights',
        can_save: true,
        unit_id: 27
    },
    {
        id: 213,
        page_num: 213,
        title: "Modulating Intensity",
        type: 'text',
        content: "It is important to adjust how you ask for your needs based on the contextual cues. Ask yourself (on a scale from 1 to 10) how |urgent are |your needs? Also ask yourself (on a scale from 1 to 10) how |vulnerable is the other person or the relationship. If your needs are urgent and the relationship is secure, be more forceful in asking for what you need. If your needs are urgent but the relationship is very vulnerable, modulate your intensity to preserve the relationship.",
        can_save: true,
        unit_id: 27
    },
    {
        id: 214,
        page_num: 214,
        title: "Making a Simple Request",
        type: 'technique',
        content: "The basis for requesting change is a simple request. There is an art to formulating a request that is soft, direct, and can get you the results you desire.;The first step is optional, |justifying |your |request. Offer a simple, short justification for your request, such as ‘it’s too hot in here’ or ‘it’s a long walk’.;The second step is the |softening |statement. This disarms the request, reduce resistance, and paints you as a reasonable person who is polite. These statements are like ‘Would you mind if…’ or ‘I’d appreciate it if you would…’.;The third step is to ask a |direct, |specific |question. Say what you want exactly and clearly, leaving any emotion or blame out of the question.;The fourth step is a |statement |of |appreciation. This increases the likelihood of them saying yes to you, making them feel that what they’re doing for you is valuable. Examples include ‘This will really help me out’, or ‘Thanks for your effort with this’.",
        transcript: false,
        can_save: true,
        unit_id: 27
    },
    {
        id: 215,
        page_num: 215,
        title: "The Structure of a Simple Request",
        type: 'summary',
        content: "Offer a short and simple justification. Add a softening statement. State your question in a clear and specific manner. Add a statement of appreciation.",
        can_save: true,
        unit_id: 27
    },
    {
        id: 216,
        page_num: 216,
        title: null,
        type: 'text',
        content: "This entire unit will cover |assertiveness, a critical skill to maintaining healthy relationships. It is broken into four parts, two basic parts and two optional parts. To learn assertiveness, we will use a |script. A benefit of a script is that you can rehearse it beforehand, either by yourself or with another person. When it is needed, you can deliver it with greater confidence.",
        can_save: true,
        unit_id: 28
    },
    {
        id: 217,
        page_num: 217,
        title: 'Assertive Statement 1 - I Think',
        type: 'list',
        content: "This first component focuses on the |facts and your |understanding of what’s going on. It should not include judgments or assumptions about the other person’s motives. It should not in any way attack. “I think” is a clear description of events and experiences that you need to talk about-and perhaps change.;Igo and Ewa have some examples.",
        list: "I think we haven’t spent much time together lately-two nights last week, one the week before.; You’ve billed me for a change I didn’t authorize.; Looking back at the recent past, you’ve been late for the majority of our meetings.; I’m getting back from the airport late-around 11:00pm-and…; The last few weeks I have been cooking for us consistently and…; I have noticed on the timesheet that I have been working later than other people and…; I had set up an appointment at 3:00pm and…",
        images: 'igoPrompt',
        can_save: true,
        unit_id: 28
    },
    {
        id: 218,
        page_num: 218,
        title: 'Assertive Statement 2 - I Feel (optional)',
        type: 'list',
        content: "This component is optional because you’re likely to use this statement with people you’re close with, not with an acquaintance or someone you’ve just met. The purpose is to give a |brief, |nonjudgmental |description of any |emotion triggered by the situation. This is about you and your particular feelings and any sentence about your emotions should start with “I”.;Igo and Ewa have some examples of these statements.",
        list: "I feel scared.; I feel lonely.; Lately, I feel sad about us.; I feel hurt, with a twinge of giving up.; I feel kind of lost and invisible and more disconnected.; I feel rejected.; I feel hopeful but nervous.",
        images: 'igoPrompt',
        can_save: true,
        unit_id: 28
    },
    {
        id: 219,
        page_num: 219,
        title: null,
        type: 'text',
        content: "A warning when using |I |Feel assertive statements is to not start the sentence with the word |”you”. This leads to blame and accusation which leads to the other person feeling defensive.;Some examples are:; You’re hurting me.;You don’t care about us.;You’re always late.",
        can_save: true,
        unit_id: 28
    },
    {
        id: 220,
        page_num: 220,
        title: null,
        type: 'text',
        content: "Another warning is that you can dress up |”you” statements to look like |”I” statements. This can lead to sentence structures that appear as ”I feel that you…”.;Some examples are:;I feel that you’re selfish.;I feel that you manipulate me.",
        can_save: true,
        unit_id: 28
    },
    {
        id: 221,
        page_num: 221,
        title: null,
        type: 'summary',
        content: "Using the word “you” when expressing your own feelings may feel safer to you as it makes you less vulnerable. However, it forms a judgmental statement that only carries blame and makes the listener less likely to hear what you want.",
        can_save: true,
        unit_id: 28
    },
    {
        id: 222,
        page_num: 222,
        title: 'Assertive Statement 3 - I Want',
        type: 'text',
        content: "This component is the second of the basic parts as it delivers a hopeful resolution to your need. Here are some guidelines to follow.;|Ask |for |behavioural, |not |attitudinal |change. You can’t expect someone to change their thoughts and beliefs based on your own preferences, but you can ask them to change their behaviour and how they act.;|Ask |for |one |change |at |a |time. Don’t give the listener a lot of requested changes at once, it can lead to them feeling overwhelmed or pressured.;|Ask |for |something |that |can |be |changed |now. Choosing a target of your assertiveness in the near future will make it much more tangible than something weeks or months later.;|Be |specific |and |concrete. Be less vague with your needs and paint a clear picture to the listener of what you want and when you want it.",
        can_save: true,
        unit_id: 28
    },
    {
        id: 223,
        page_num: 223,
        title: 'Assertive Statement 4 - Self-Care (optional)',
        type: 'list',
        content: "This last component is also optional and only involves telling the other person what you will do if they do not comply with your request. It is |not |threatening or |punishing in any way. It is to |provide |information and show that you are not helpless, that you have a plan to solve the problem. It is to protect your own rights and self-interests.;Igo and Ewa have some examples of self-care statements.",
        list: "If you can’t leave the party of time, I’ll take my own car.; If you can’t help with the cleaning, I’ll hire a maid and we’ll divide the expense.; If you can’t find a way to keep the party noise down, I’ll ask the police to help you.; If you want to drive without insurance, I’ll transfer the title to your name and you can take over the payments as well.; If we can’t work this out, I’m going to have to look for something else so I can better support my family.; If that doesn’t work for you, I can order food for myself.",
        images: 'igoPrompt',
        can_save: true,
        unit_id: 28
    },
    {
        id: 224,
        page_num: 224,
        title: null,
        type: 'summary',
        content: "Think to yourself some problems that exist in your life and what you want changed for each specifically. Now turn them into scripts! Using the four assertive statements you just learned, break each problem and need into what you think, how you feel, what you want, and how you’ll take care of yourself.",
        can_save: true,
        unit_id: 28
    },
    {
        id: 225,
        page_num: 225,
        title: 'Assertive Listening',
        type: 'text',
        content: "Listening is an active process that requires commitment to fully understand what the other person thinks and feels about the problem. If you ever feel |uncertain about what the other person feels or wishes, ask them a |direct question to get them to elaborate further.;”I’m not really sure how you feel about that, could you tell me more?”;Ask these key questions to find better solutions or compromises.;What is the central problem as you understand it?;How do you make sense of what is happening?;When you’re struggling with (problem), how does it make you feel?;When you’re dealing with (problem), what does it make you want to do?;What do you think needs to change?;What would you like me to do to help with this?",
        can_save: true,
        unit_id: 29
    },
    {
        id: 226,
        page_num: 226,
        title: null,
        type: 'text',
        content: "Assertive listening is extremely valuable, but remember your own needs. Just because you found out what someone else needs does not mean you have to give it to them. Consider what is important to you as well!",
        can_save: true,
        unit_id: 29
    },
    {
        id: 227,
        page_num: 227,
        title: 'Blocks to Listening',
        type: 'list',
        content: "These are a few barriers that people may experience that can |sabotage their listening abilities. Ewa and Igo can’t wait to share!",
        list: "Mind reading. Assuming you know what the other person feels and thinks without asking.; Rehearsing. Planning what you want to say next and missing what is being said now.; Filtering. Listening only to things that are important or relevant to you and ignoring the rest.; Judging. Evaluating the other person and what they say rather than really trying to understand their point of view.; Daydreaming. Getting caught in memories or fantasies while someone is talking to you.; Advising. Looking for suggestions and solutions instead of listening and understanding.; Sparring. Invalidating the other person by arguing or debating.; Being right. Resisting or ignoring any communication that suggests you are wrong or should change.; Derailment. Flat out changing the subject as soon as you hear anything that bothers or threatens you.; Placating. Agreeing too quickly without really listening to the other person’s feelings or concerns.",
        images: 'igoPrompt',
        can_save: true,
        unit_id: 29
    },
    {
        id: 228,
        page_num: 228,
        title: 'Saying No',
        type: 'technique',
        content: "Being able to say no is crucial to healthy communication and gives you more control what happens to you. It is both simple to say but hard to do because it takes courage to say them.;Start by validating the other person’s needs. If they wish to do something and what your input, start by seeing where they are coming from and acknowledging it.;Then state a clear preference to not do it. Use keywords |”I’d |prefer” or |”I’m |not |comfortable” to decline their request.;The external resource link gives access to the |Assertive |Situation |Hierarchy. List 10 situations in your life where you want to make a change or set limits on. List them in order from 1-10, with 1 being the least challenging and 10 being the most. Then starting with the bottom four (1-4), use the assertive script from last unit to create a script to address your needs and also to learn how to say no. Rehearse the script, identify a time and place you want to use it, and make a commitment to using your script on that date. ",
        transcript: false,
        links: 'saying-no',
        can_save: true,
        unit_id: 29
    },
    {
        id: 229,
        page_num: 229,
        title: 'Coping with Resistance and Conflict',
        type: 'text',
        content: "The next few slides involve five different conflict management skills you can implement if someone is not listening to |you.",
        can_save: true,
        unit_id: 29
    },
    {
        id: 230,
        page_num: 230,
        title: 'Mutual Validation',
        type: 'text',
        content: "When people feel invalidated, they tend to not listen to you. In an effort to feel heard, they double down on their own arguments and assertions. Using mutual validation, you show the other person that you see their point of view using “I understand” statements. Then you use “On my end” to assert your own point of view. This way you can acknowledge and validate both of your experiences.",
        can_save: true,
        unit_id: 29
    },
    {
        id: 231,
        page_num: 231,
        title: 'Broken Record',
        type: 'text',
        content: "When someone is not getting your message, you can formulate a short, specific, easy to understand statement that encompasses what you want. Offer no explanations, speak in a firm voice, and repeat the statement as many times as necessary with minimal variation. Don’t argue, don’t get angry, don’t try to debate, don’t answer why questions. Just be polite and clear, like a broken record.",
        can_save: true,
        unit_id: 29
    },
    {
        id: 232,
        page_num: 232,
        title: 'Probing',
        type: 'text',
        content: "The key phrase is “What is it about (the situation) that bothers you?”. Continue to ask this phrase, inserting the relevant situation, until you get down to the core issue or something that is useful to resolve.;An example is repeatedly asking a peer that has accused you of being lazy what it is about your work ethic that bothers them? Continue to ask, digging deeper until they acknowledge the root concern which is someone else having to pick up your responsibilities.",
        can_save: true,
        unit_id: 29
    },
    {
        id: 233,
        page_num: 233,
        title: 'Clouding',
        type: 'text',
        content: "This is to partially agree with someone without accepting the entirety of their statement. This acceptance of responsibility helps calm people down and stops the game of who has more wins or losses.;Find some part of what the person is saying that you can accept, acknowledge that the person is correct about that, and ignore the rest of their argument.;An example is someone being accusatory of you for being mad over everything, and you clouding the statement, accepting that there are times that you can become irritated.",
        can_save: true,
        unit_id: 29
    },
    {
        id: 234,
        page_num: 234,
        title: 'Assertive Delay',
        type: 'text',
        content: "This is the method of allowing time between decisions to make more reasonable, healthy choices. You may find yourself being pressured into making a choice or agree with something. You can take minutes, or even hours to excuse yourself and consider carefully what is being said before making a sound decision.",
        can_save: true,
        unit_id: 29
    },
    {
        id: 235,
        page_num: 235,
        title: 'How to Negotiate',
        type: 'text',
        content: "First begin by understanding both positions have |valid needs. Using the |RAVEN guideline, you will be on the right track when negotiating.;R stands for |Relax. Accept conflict calmly. Take a deep breath before speaking and release tension as you exhale.;A stands for |Avoid |the |aversive. Keep in mind the aversive strategies you might be tempted to use and monitor what you say to avoid them.;V stands for |Validate |their |needs. Focus on a fair, mutually agreeable outcome where both people can get some of their needs met.;E stands for |Examine |your values. How do you want to be treated in a relationship and how do you want to treat others?;N stands for |Neutral |voice. Keep anger and contempt out of your voice.;With these guidelines in mind, begin negotiating by taking turns and offering solutions.",
        can_save: true,
        unit_id: 29
    },
    {
        id: 236,
        page_num: 236,
        title: 'RAVEN guidelines',
        type: 'summary',
        content: "Relax, Avoid the Aversive, Validate their Needs, Examine your Values, Neutral Voice.",
        can_save: true,
        unit_id: 29
    },
    {
        id: 237,
        page_num: 237,
        title: 'Compromises',
        type: 'list',
        content: "After negotiating, if neither of you are able to come up with an agreeable solution, here are a few ideas for |compromises.",
        list: "I’ll cut the pie, you choose the first piece. One person decides how to divide the target of desire, the other person gets to choose which ‘piece’ to take first.; Take turns. Alternate between both solutions that respectively address the person’s needs.; Do both, have it all. Take care of both people’s needs simultaneously.; Trial period. Agree to a solution for a specific period of time. When this time ends, reevaluate the solution and if you need to renegotiate.; My method, my schedule. Both individuals have different ideas for a successful solution. Their method is implemented when it is on their time and changed for the other method when the other person clocks in.; This for that. Exchanging rewards, favours, chores, etc if the other person does a certain task.; Part of what I want, part of what you want. Implementing pieces of both solutions in the overall solution.; Split the difference. Good for numerical disputes (like costs) or how much time to allocate for an activity.",
        images: 'igoPrompt',
        can_save: true,
        unit_id: 29
    },
    {
        id: 238,
        page_num: 238,
        title: 'Analyze Problem Interactions',
        type: 'technique',
        content: "When communications inevitably go wrong, you will need to analyze what had occurred. The key is to learn from your mistakes and polish your skills.;Using the external resource link, refer to the |communications |effectiveness |checklist. This is a great starting point to identify problem areas you wish to work on. Create a specific plan to address your behaviour the next time. Start small as small changes lead to big improvements!",
        transcript: false,
        links: 'analyze-problems',
        can_save: true,
        unit_id: 29
    },
    
  ])
  .then(() => {
    return knex('finishData').insert([
        {
            id: 24,
            content: "Igo and Ewa went everywhere together so they think every fight they have is because of the other! They realize they need to have more compassion towards the other." 
        },
        {
            id: 25,
            content: "Take time to consider what you want and value out of a relationship. By seeking and expressing these needs in a healthy manner, you will enrich your own life."
        },
        {
            id: 26,
            content: "Igo and Ewa identified all the barriers to working better together and are choosing which to tackle first!"
        },
        {
            id: 27,
            content: "We've discussed the importance of recognizing your own needs and now it's time to assert yourself, taking an active role in improving your life."
        },
        {
            id: 28,
            content: "Igo asserting to Ewa that sometimes he wants them to be referred to as Ewa and Igo!"
        },
        {
            id: 29,
            content: "That concludes Interpersonal Effectiveness. The twins Igo and Ewa have made it to the Hearth, together!"
        }
    ])
  })
  .then(() => {
    return knex('transcripts').insert([
        {
            id: 187, 
            content: 'First, find a comfortable place to sit in a room where you won’t be disturbed. Turn off any distracting sounds. If you feel comfortable closing your eyes, do so to help you relax.;To begin, take a few slow, long breaths, and relax. Place one hand on your stomach. Now slowly breathe in through your nose and then slowly exhale through your mouth. Feel your stomach rise and fall as you breathe. Imagine your belly filling up with air like a balloon as you breathe in, and then feel it deflate as you breathe out. Feel the breath moving in across your nostrils, and then feel your breath blowing out across your lips. As you breathe, notice the sensations in your body. Feel your lungs fill up with air. Notice the weight of your body resting on whatever you’re sitting. With each breath, notice how your body feels more and more relaxed.;Now, as you continue to breathe, begin counting your breaths each time you exhale. You can count either silently to yourself or aloud. Count each exhalation until you reach 4 and then begin counting at 1 again. To begin, breathe in slowly through your nose, and then exhale slowly through your mouth. Count 1. Again, breathe in slowly through your nose and slowly out through your mouth. Count 2. Repeat, breathing in slowly through your nose, and then slowly exhale. Count 3. Last time—breathe in through your nose and out through your mouth. Count 4. Now begin counting at 1 again.;Now bring your awareness inside your own body, noting the world of sensation there at this very moment. You live in this body—allow yourself to be aware of your breath, your life force. As you hold that awareness, bring to mind a person who makes you smile, who naturally brings happiness to your heart. [Pause here for a few seconds.] Let yourself feel what it’s like to be in that person’s presence. [Pause here for a few seconds.] Now recognize that this person wants to be happy and free of suffering. As you hold that awareness, mentally repeat the following phrases, letting them be a deep wish for that person:;“May you be peaceful.”;“May you be safe.”;“May you be healthy.”;“May you be happy and free of suffering.”;Repeat the phrases two or three more times, allowing their meaning to deepen each time. Allow yourself to feel and accept your own sense of compassion toward this person that you like.;Now bring to mind the image of a person you find difficult or dislike. Remind yourself that this difficult person is also struggling to find their way through life, and in doing so, they are causing you pain. Mentally repeat:;“Just as I want to be peaceful and free from suffering…;May you, too, find peace.;May you be safe.;May you be healthy.;May you be happy and free of suffering.”;Again, repeat the phrases two or three more times, allowing their meaning to deepen each time. Allow yourself to feel and accept your own sense of compassion toward this person that you find difficult.;Finally, when you are done, take a few additional slow breaths, rest quietly, and savor your own sense of goodwill and compassion.;For the next week, make this other-compassion meditation part of your still mind practice. Then, see if you can incorporate the same intentions into your daily interactions with other people. Each time you meet someone, or are affected by someone else, say to yourself:;“Just like me, they want to be happy and free of suffering,” or;“Just like me, these people walking past me are caught in the drama and flow of life.”;Finally, you may eventually want to abbreviate these mantras into the simple phrase: “Just like me.” For example, upon meeting someone you might simply think to yourself, “Just like me,” meaning, “Just like me they want to be happy and free of suffering.”',
            audio: null
        },
        {
            id: 211,
            content: "Think about a recent negative experience with someone else and try to put it into words. We are trying to get from a simple feeling to a clear statement of desire.;Ask yourself these questions: What do you want the person to:; Do more of?;Do less of?;Stop doing entirely?;Start doing?;When do you want this person to change?;Where do you want this person to change?;How often do you want this person to change (this behaviour)?;Now put all your answers together into a clear concise statement.",
            audio: null
        }
    ])
  })
};

exports.down = function(knex) {
  return knex('pages').whereIn('id', [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238]).del()
  .then(() => {
    return knex('finishData').whereIn('id', [24, 25, 26, 27, 28, 29]).del()
  })
  .then(() => {
    return knex('transcripts').whereIn('id', [187, 211]).del()
  })
};
