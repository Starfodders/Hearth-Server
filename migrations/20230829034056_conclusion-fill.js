
exports.up = function(knex) {
  return knex('pages').insert([
    {
        id: 239,
        page_number: 239,
        title: null,
        type: "text",
        content: "Congratulations! You’ve reached the final chapter of Hearth. You’ve learned about distress tolerance, mindfulness, emotional regulation, and interpersonal relationships. To put it all together, it takes rehearsal.",
        can_save: true,
        unit_id: 30
    },
    {
        id: 240,
        page_number: 240,
        title: "State Dependent Learning",
        type: "text",
        content: "This is a phenomenon that occurs when we are able to more easily recall information depending on the |state in which we learn that information. If we study for a test while in a calm, relaxed, and quiet environment, we are more likely to recall that information in the same environment.;However, we cannot always control our environments which diminishes our information recall. To overcome this barrier, we must learn |exposure-based |cognitive |rehearsal. This will teach you to practice your newfound skills while feeling the very emotions for which you’ll need the coping techniques. This will be done in a safe way.",
        can_save: true,
        unit_id: 30
    },
    {
        id: 241,
        page_number: 241,
        title: "Exposure-Based Cognitive Rehearsal",
        type: "technique",
        content: "This technique is to practice your coping skills. The first step is to identify the specific skill you wish to practice. We’ve learned quite a few!;Some examples of coping skills are: radical acceptance, safe-place visualization, mindful breathing, focus shifting, wise mind, assertive communication, and many more.;After selecting a focus, consider the technique below.",
        transcript: true,
        can_save: true,
        unit_id: 30
    },
    {
        id: 242,
        page_number: 242,
        title: null,
        type: "text",
        content: "The more you practice exposure-based cognitive rehearsal, the more likely you are to remember how and when to use your learned coping skills.",
        can_save: true,
        unit_id: 30
    },
    {
        id: 243,
        page_number: 243,
        title: 'Plan Ahead',
        type: "text",
        content: "Cognitive rehearsal is useful in planning ahead for potential emotionally triggering events. Depending on the type of anticipated stress, you should select one or more emotion coping strategies you think might protect you from being overwhelmed.;Use the same steps as the previous technique in this unit. Instead of visualizing an experience that has already happened, visualize one that might happen in your future.",
        can_save: true,
        unit_id: 30
    },
    {
        id: 244,
        page_number: 244,
        title: null,
        type: "text",
        content: "The skills you have learned in this book will grow stronger each day that you practice them. Conversely, if your skills aren’t used, they’ll slip further from your grasp. They’ll cease to be real choices and real ways to change. Instead, they’ll just become mere ideas, vaguely recalled, with no power to help you.;Equally important is to practice your coping skills using exposure-based cognitive rehearsal so that you gain confidence using them even when you feel emotionally upset, scared, nervous, or angry",
        can_save: true,
        unit_id: 31
    },
    {
        id: 245,
        page_number: 245,
        title: null,
        type: "text",
        content: "Keeping and strengthening your skills will take sustained effort. There’s an old saying that victory belongs to the most persevering, which is exactly what’s needed now: a commitment to practice your skills daily—over time.",
        can_save: true,
        unit_id: 31
    },
    {
        id: 246,
        page_number: 246,
        title: null,
        type: "text",
        content: "You may wonder where you’ll find the motivation to keep doing something so challenging. And all this talk of perseverance may sound very old-fashioned, but there is a way to practice daily what you’ve learned, and it doesn’t take a huge amount of willpower. What it requires is getting in the habit of spending about fifteen minutes a day practicing your skills.",
        can_save: true,
        unit_id: 31
    },
    {
        id: 247,
        page_number: 247,
        title: 'Daily Practices',
        type: "technique",
        content: "This is an exercise regiment that in 5  parts, helps you maintain your emotional and psychological health. It consists of mindfulness, deep relaxation, self-observation, affirmation, and committed action.;These practices overall take 15 minutes and should be done, ideally, the same time each day to build healthy habits.;For mindfulness, choose from mindful breathing (basic mindfulness) or wise-mind meditation (advanced mindfulness).;For deep relaxation, choose from cue-controlled relaxation, safe-place visualization (advanced distress tolerance), or band of light (basic mindfulness).;For observation, choose from thought defusion (basic mindfulness) or non-judgmental awareness of emotions (advanced emotional regulation).;For affirmation, see Advanced Distress Tolerance for a list of self-affirmations.;For committed action, reference the committed action topics in Advanced Distress Tolerance.",
        transcript: false,
        can_save: true,
        unit_id: 31
    },
    {
        id: 248,
        page_number: 248,
        title: null,
        type: "text",
        content: "Each component of your daily practices is designed to strengthen one or more core skills. First and foremost are mindfulness skills, because all of the others depend, to some degree, on mindful awareness. Deep relaxation is a key to distress tolerance, while self-observation and affirmation will help with emotion regulation. Finally, a plan for committed action will strengthen emotion regulation and interpersonal effectiveness skills.",
        can_save: true,
        unit_id: 31
    },
    {
        id: 249,
        page_number: 249,
        title: null,
        type: "text",
        content: "The concept of committed action deserves special note. Your daily practices should include a plan for something you’ll do—that day or the next—to solve a problem, deal effectively with a difficult situation or person, or strengthen awareness of your higher power. You can connect to your higher power through prayer, an act of kindness, or some giving of yourself to others. What you choose is up to you, but committed action—in some form—is necessary to make any real change in your life.;Choose your intended practices and write them down on the external resource link. Make a commitment and do them!",
        links: 'daily-practices',
        can_save: true,
        unit_id: 31
    },
    {
        id: 250,
        page_number: 250,
        title: 'DBT Diary',
        type: "text",
        content: "This final external resource link is to a DBT diary and it contains every single skill taught throughout Hearth. Mark down all the times you employ these techniques and make it a goal to complete one of these diaries every week!",
        links: 'dbt-diary',
        can_save: true,
        unit_id: 31
    },
    {
        id: 251,
        page_number: 251,
        title: null,
        type: "text",
        content: "How do you persevere? The answer is one day at a time—making sure that on this day, at the appointed time, you do your practices. And the next day you do the same thing…and the next. A commitment isn’t something you make once, and you’re set for life. It’s something you keep making, every day.",
        can_save: true,
        unit_id: 31
    },
    {
        id: 252,
        page_number: 252,
        title: null,
        type: "text",
        content: "The daily practices will change your life because they will help you shape new responses to old struggles. Life isn’t about hopes or intentions. It’s about doing. It’s about being effective. Now, as we close the book, we’re asking you to live what you’ve learned. You can do this, maybe not perfectly, but enough to make real changes.",
        can_save: true,
        unit_id: 31
    },
  ])
  .then(() => {
    return knex('transcripts').insert([
        {
            id: 241,
            content: "After choosing a coping skill, identify a recent experience that was emotionally upsetting where the coping skill may have helped. Pick an experience that is easy to visualize and can evoke a moderate emotional reaction.;Next, visualize the emotionally triggering experience. Think about the details of the setting and situation, who’s there and what they’re doing. Try to hear the sounds in the scene including voices and conversation, notice the sensations in your body such as heat or tension. Stay with the scene until you feel a moderate level of emotion.;Rate your emotion for level of intensity on a scale of 0-10, 0 being no emotion and 10 being the most intense experience of that emotion. Shut the scene off when the intensity is somewhere between 4 and 6.;Now begin to use one or more of your coping skills to drop the emotional intensity you are feeling.;Then return to visualizing the scene once more, repeating the steps if your intensity gets too high.;Through exposure, you learn to soothe yourself and employ your coping skill in the midst of overwhelming emotion.",
            audio: null
        }
    ])
  })
  .then(() => {
    return knex('finishData').insert([
        {
            id: 30,
            content: "Embrace the journey of improvement. The future is purchased by the present."
        },
        {
            id: 31,
            content: 'Here, at the conclusion of Hearth, I extend my heartfelt gratitude for your dedicated exploration. As you reflect on this journey, remember to appreciate the time invested in understanding yourself and committing to self-improvement.'
        }
    ])
  })
};


exports.down = function(knex) {
  return knex('pages').whereIn('id', [239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252]).del()
  .then(() => {
    return knex('transcripts').where('id', 241).del()
  })
  .then(() => {
    return knex('finishData').whereIn('id', [30, 31]).del()
  })
};
