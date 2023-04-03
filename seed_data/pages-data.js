const safePlaceData = require('../transcript__data/safeplace.json')

module.exports = [
    {
        id: 1,
        page_number: 1,
        title: null,
        type: 'text',
        content: "Not everyone handles their emotions the same way. For those without the necessary skills, these emotions can become overwhelming, leaving you feeling alone and out of control, and causing impulsive behavior.",
        transcript: null,
        can_save: true,
        images: null,
        unit_id: 1
    },
    {
        id: 2,
        page_number: 2,
        title: null,
        type: 'text',
        content: "How you deal with strong emotions is affected by your upbringing, environment, and genetics. Regardless of where you are in life, there are opportunities to overcome these problems. Hearth aims to equip you with the skills necessary to begin your journey.",
        transcript: null,
        can_save: true,
        images: null,
        unit_id: 1
    },
    {
        id: 3,
        page_number: 3,
        title: null,
        type: 'text',
        content: "The skills and practices taught in Hearth fall under four categories: distress tolerance, mindfulness, emotion regulation, and interpersonal effectiveness. Each category is further broken down into basic and advanced sections and individual units to make content straightforward",
        transcript: null,
        can_save: true,
        images: null,
        unit_id: 1
    },
    {
        id: 4,
        page_number: 4,
        title: null,
        type: 'text',
        content: "Dialectical Behavior Therapy is most effective when combined with other programs, such as a skills workshop, psychotherapy, and telephone coaching. However, these services can be unaffordable or inaccessible depending on your location. Hearth was created in hopes of making this information more attainable",
        transcript: null,
        can_save: true,
        images: null,
        unit_id: 1
    },
    {
        id: 5,
        page_number: 5,
        title: null,
        type: 'text',
        content: "There is hope. Remember, nothing worth having ever comes easy.",
        transcript: null,
        can_save: true,
        images: null,
        unit_id: 1
    },
    {
        id: 6,
        page_number: 6,
        title: 'Tips for Hearth',
        type: 'text',
        content: "The content of Hearth is broken in individual pages which fall under three primary categories: text, summaries, or techniques. Each chapter will also have an associated Companion that will embark on the journey with you.",
        transcript: null,
        can_save: false,
        images: null,
        unit_id: 2
    },
    {
        id: 7,
        page_number: 7,
        title: 'Specific Categories',
        type: 'summary',
        content: "Summary pages contain an overview of significant information that you are either about to learn or have just learned. Technique pages, which will come up later in Distress Tolerance and onward, are optional strategies for you to use to tackle specific problem areas. They will contain either a transcript of a guided practice for you to follow or a hyperlink to an external website. Some will also include audio playback for you to listen to as well. Every other page will fall under the text category",
        transcript: null,
        can_save: false,
        images: null,
        unit_id: 2
    },
    {
        id: 8,
        page_number: 8,
        title: 'Saving Content',
        type: 'text',
        content: "Speaking of saved content, you might have already seen this icon! Clicking this icon allows you to save the page to your Collection. You can reference the bottom navigation bar below to access the content that you have saved at any time.",
        transcript: null,
        can_save: true,
        images: null,
        unit_id: 2
    },
    {
        id: 9,
        page_number: 9,
        title: 'Meditation',
        type: 'text',
        content: "Meditation is a practice used frequently throughout DBT, with small adjustments depending on the technique. In the bottom navigation bar, you can access the meditation section at anytime.",
        transcript: null,
        can_save: true,
        images: null,
        unit_id: 2
    },
    {
        id: 10,
        page_number: 10,
        title: 'Progress',
        type: 'text',
        content: "Your progress is saved automatically as you proceed through Hearth. If you leave, we'll pick up right where we left off the next time you're back.",
        transcript: null,
        can_save: false,
        images: null,
        unit_id: 2
    },
    {
        id: 11,
        page_number: 11,
        title: 'This is Tal',
        type: 'special',
        content: "Tal will join you as you progress through your first journey and learn about Distress Tolerance. This is Tal’s first trip to the Hearth. Although they’re scared, you and Tal will both discover insights into handling stressful situations.",
        transcript: null,
        can_save: false,
        images: '/images/talPrompt.png',
        unit_id: 3
    },
    {
        id: 12,
        page_number: 12,
        title: 'Safe Place Visualization',
        type: 'technique',
        content: "You can trick your body into relaxing by visualizing a safe place. Consider a location, real or imaginary, that makes you feel safe and relaxed. Focus on this scene and follow the steps below. Or choose to move onto a new technique ahead.",
        transcript: safePlaceData[0],
        can_save: false,
        images: null,
        unit_id: 3
    },
    {
        id: 13,
        page_number: 13,
        title: 'null',
        type: 'list',
        content: "Chores are well, a chore to deal with. However it is easy to fall behind on tasks when preoccupied with stress. Setting aside time to perform tasks and chores creates tiny accomplishments that are relatively simple and accessible to distract yourself. Tal has some ideas for you!",
        transcript: null,
        list: "Wash the dishes, Make phone calls to people you haven’t spoken to recently but not someone you’re angry with, Clean your room or house or go help a friend with their cleaning or gardening project, Clean out your closet and donate your old clothes, Redecorate a room or at least the walls",
        can_save: true,
        images: 'images/talPrompt.png',
        unit_id: 3
    },
    

]

// {
//     id: 3,
//     page_number: 1,
//     title: 'This is Tal',
//     type: null,
//     content: "Tal will join you as you progress through your first journey and learn about Distress Tolerance. This is Tal’s first trip to the Hearth. Although they’re scared, you and Tal will both discover insights into handling stressful situations.",
//     transcript: null,
//     can_save: false,
//     images: '/public/images/talStand.png',
//     unit_id: 3
// }