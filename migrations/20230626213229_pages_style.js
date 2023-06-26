/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  return knex("pages")
    .where("page_number", 3)
    .update({
      content:
        "The skills and practices taught in Hearth fall under four categories: |distress |tolerance, |mindfulness, |emotion |regulation, and |interpersonal |effectiveness.;Each category is further broken down into |basic and |advanced sections and individual units to make content straightforward.",
    })
    .then(() => {
      return knex('pages').where("page_number", 4).update({content: "Dialectical Behaviour Therapy is most effective when combined with other programs such as |skills |workshops, |psychotherapy, and |telephone |coaching. However, these services can be unaffordable or inaccessible depending on your location.;Hearth was created in hopes of making this information more attainable."})
    })
    
.then(() => {
  return knex('pages').where("page_number", 5).update({content:"The content of Hearth is broken in individual pages which fall under four primary categories: |text, |summaries, |lists, or |techniques.;Each chapter will also have an associated |Companion that will embark on the journey with you."})
})
.then(() => {
  return knex('pages').where("page_number", 6).update({content:"Summary pages contain an overview of significant information that you are either about to learn or have just learned;|Lists are pages that discuss actionable topics with several recommendations. Interacting with the |Companion on List pages will prompt them to produce for you a different suggestion;|Technique pages, which will come up later in Distress Tolerance and onward, are optional strategies for you to use to tackle specific problem areas. They will contain either a transcript of a guided practice for you to follow or a hyperlink to an external website. Some will also include audio playback for you to listen to as well.;Every other page will fall under the text category."})
})
.then(() => {
  return knex('pages').where("page_number", 7).update({content:"Speaking of saved content, you might have already seen this icon! Clicking this icon allows you to save the page to your Collection."})
})
.then(() => {
  return knex('pages').where("page_number", 10).update({content:"|Tal will join you as you progress through your first journey and learn about |Distress |Tolerance.;This is Tal’s first trip to the Hearth. Although they’re scared, you and Tal will both discover insights into handling stressful situations."})
})
.then(() => {
  return knex('pages').where("page_number", 16).update({content:"When faced with painful emotions, we instinctively resort to learned behaviors, often forgetting healthy coping strategies. This is where |R.E.S.T comes in."})
})
.then(() => {
  return knex('pages').where("page_number", 22).update({content:"After learning what R.E.S.T is, try to identify situations where a trigger may present itself. These could be circumstances you try to avoid or scenarios that may invoke powerful emotions.;The goal is to slowly build a habit of reacting |mindfully to stressful situations. Continue to use R.E.S.T until the feeling of strong emotion disappears."})
})
.then(() => {
  return knex('pages').where("page_number", 29).update({content:"In painful situations, remaining in that space can lead to extended suffering. |Leaving |the |space and gaining some distance gives you valuable time to R.E.S.T, rethink, and approach the problem from a clearer headspace."})
})
.then(() => {
  return knex('pages').where("page_number", 31).update({content:"Engage the logical side of your brain and |count! Find a comfortable spot and count your breaths. Count the sounds you hear, inside or outside. You can even do math! Nothing as trivial as increments of one, but try counting down from 100 in increments of 7! You can do it!"})
})
.then(() => {
  return knex('pages').where("page_number", 32).update({content:"Now try to create a |distraction |plan for yourself using the skills you’ve learned. Remember R.E.S.T. Write it down on paper or your phone, and reference it when in need."})
})
.then(() => {
  return knex('pages').where("page_number", 40).update({content:"Congratulations on reaching this chapter! Here, we will be utilizing advanced distress tolerance skills while keeping in mind that our initial step is to use |R.E.S.T.;Throughout this chapter, we will introduce several |techniques. Read over the summary, choose which ones sound interesting, and save them for use later!;It is recommended you engage in these techniques in a quiet, comfortable place that is free from distractions such as phones and TV. Let those in your space and home know that you’ll be taking time for yourself for the next 10-20 minutes."})
})
.then(() => {
  return knex('pages').where("page_number", 43).update({content:"What is important to you in life? It's easy to forget the things that give our lives meaning and importance. By remembering and rediscovering your values, you can better tolerate overwhelming situations. This |Valued |Living |Questionnaire is a checklist to separate the different components of your life. Completing it the first time, answer each row based on their important to you ideally. For example, if you value self-care greatly, you can rate it higher such as a 10.;Then during your second time completing this questionnaire, answer based on the actual time and effort you put towards each aspect of your life. Compare the two results. If there is a great difference between your ideal value versus your actual committment, this may indicate you need to reprioritize your time and effort."})
})
.then(() => {
  return knex('pages').where("page_number", 45).update({content:"Mental practice to visualize yourself in situations where you'll face |challenges and |barriers when trying to take action towards a meaningful activity.;Identify these situations and who is present, what are they saying and doing?;What intentions do you want to act on in this situation?; Break your action down into specific steps and imagine yourself acting them out.;Notice any barriers that arise such as |anxiety, |discouragement, and thoughts of |failure.;Try to accept whatever discomfort these barriers bring while seeing yourself successfully complete your action.;Imagine the people there respond positively towards what you do and congratulate yourself for choosing your intentions over emotional-driven behaviour.;Repeat the full visualization at least one more time."})
})
.then(() => {
  return knex('pages').where("page_number", 46).update({content:"Believing in a power that exists beyond the individual can be revitalizing. Whether it's the belief in a single God, multiple Gods, or the fundamental goodness of people, it can help you persevere through difficult situations. Finding hope can lead to an enduring human spirit and provide a higher sense of purpose. As you grow in life, your spirituality may change. It's perfectly acceptable to reconsider your faith if it no longer gives you the peace and strength it once did.; Consider how your beliefs in a higher power give you |strength? How does it make you feel? How do they affect your interactions with others and how do you fortify your beliefs further? Write your answers down.;It's important to remember that belief in a higher power goes beyond just one god or many gods. Take a moment to look at the world around you and think about how we are all connected. The things that make up our bodies also make up the animals, plants, and earth that are with us. Look up and think about the huge universe we are in, with billions of stars shining in space. Look down and think about the tiny particles that move faster than we can understand. Understanding our place in the universe can make us feel amazed and |grateful."})
})
.then(() => {
  return knex('pages').where("page_number", 50).update({content:"If you find yourself drifting away from the present moment when talking to someone, |ground |yourself by focusing your attention on something the person is wearing or take note of an attribute it has: such as color and appearance."})
})
.then(() => {
  return knex('pages').where("page_number", 53).update({content:"This concept was touched upon back in basic distress tolerance but is a crucial element of dialectical behavioural therapy. We must find |balance in changing behaviours in our life that are creating suffering in yourself and others while simultaneously finding acceptance in yourself."})
})
.then(() => {
  return knex('pages').where("page_number", 54).update({content:"This is much easier said than done, after all it’s one of the hardest skills to master. Therefore, it will be explored further in later chapters as well.;When faced with the present moment, we may feel compelled to resist it, change it, turn it into something it’s not. Radical acceptance means taking the present moment in stride and acknowledging it |without |judgement. Events that happen in the present don’t spontaneously occur. They are a result of a chain of events that happened in the past and therefore have already taken place."})
})
.then(() => {
  return knex('pages').where("page_number", 60).update({content:"In response to stress or a threat, anger and anxiety are emotions we use to defend ourselves. However, how can we determine if our reaction is appropriate or if we are overreacting?;|FTB-Cope is a way to quantify the feelings we feel versus the threat we are facing on a scale of 0 to 10. You first rate from 0 to 10 the intensity of the feeling you are experiencing. Then rate from 0 to 10 the intensity of the threat you are experiencing. Compare the two numbers, are they close together or far apart? The further the two numbers are from one another, the higher the likelihood you are acting on |emotion than logic. All the more reason to cope rather than act in this situation.;If you find a disparity between the two numbers, then consider using one of the techniques covered in previous units to cope with your feelings.;Emotions are messages from your brain, they don’t prove the legitimacy of real-life problems. You’ll learn more about emotional regulation in a future chapter.;In the meantime, feel free to use this worksheet to assess different emotions in response to a threat."})
})
.then(() => {
  return knex('pages').where("page_number", 62).update({content:"You have been exposed to several types of distress tolerance strategies at this point. You can create your own types of coping strategies by examining what you have experienced in the past. Usually distressing situations are not unique and are somewhat predictable. You can use these worksheets to identify these past situations, what you did to cope, what unhealthy consequences occurred as a result. Then you can identify what new coping strategies you can use instead and what might the healthier consequences be this time.;Note that there are two types of worksheets, one for when you’re |alone and one for when you’re |around |others. For example, using cue-controlled relaxation might be awkward around others so preparing a different coping strategy is ideal."})
})
.then(() => {
  return knex('pages').where("page_number", 70).update({content:"The next three techniques fall under Progressive Muscle Relaxation, going from |active, to |threshold, to |passive. In response to stress, we tend to tighten our muscles. This group of techniques was created to progressively release tension in your muscles which helps sooth mental and emotional distress. Pairing it with a |verbal |cue (like the word ‘peace’) can create a trigger for your muscles to disengage any tension.;Consider the instructions below."})
})
};








/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex("pages").where("page_number", 3).update({
    content:
      "The skills and practices taught in Hearth fall under four categories: distress tolerance, mindfulness, emotion regulation, and interpersonal effectiveness.;Each category is further broken down into basic and advanced sections and individual units to make content straightforward.",
  })
  .then(() => {
    return knex('pages').where("page_number", 4).update({content:"Dialectical Behaviour Therapy is most effective when combined with other programs such as skills workshops, psychotherapy, and telephone coaching. However, these services can be unaffordable or inaccessible depending on your location.;Hearth was created in hopes of making this information more attainable."})
  })

.then(() => {
  return knex('pages').where("page_number", 5).update({content: "The content of Hearth is broken in individual pages which fall under four primary categories: text, summaries, lists, or techniques.;Each chapter will also have an associated Companion that will embark on the journey with you."})
})
.then(() => {
  return knex('pages').where("page_number", 6).update({content:"Summary pages contain an overview of significant information that you are either about to learn or have just learned;Lists are pages that discuss actionable topics with several recommendations. Interacting with the Companion on List pages will prompt them to produce for you a different suggestion;Technique pages, which will come up later in Distress Tolerance and onward, are optional strategies for you to use to tackle specific problem areas. They will contain either a transcript of a guided practice for you to follow or a hyperlink to an external website. Some will also include audio playback for you to listen to as well.;Every other page will fall under the text category."})
})
.then(() => {
  return knex('pages').where("page_number", 7).update({content:"Speaking of saved content, you might have already seen this icon! Clicking this icon allows you to save the page to your Collection.;You can reference the bottom navigation bar below to access the content that you have saved at any time."})
})
.then(() => {
  return knex('pages').where("page_number", 10).update({content:"Tal will join you as you progress through your first journey and learn about Distress Tolerance.;This is Tal’s first trip to the Hearth. Although they’re scared, you and Tal will both discover insights into handling stressful situations."})
})
.then(() => {
  return knex('pages').where("page_number", 16).update({content:"When faced with painful emotions, we instinctively resort to learned behaviors, often forgetting healthy coping strategies. This is where R.E.S.T comes in."})
})
.then(() => {
  return knex('pages').where("page_number", 22).update({content:"After learning what R.E.S.T is, try to identify situations where a trigger may present itself. These could be circumstances you try to avoid or scenarios that may invoke powerful emotions.;The goal is to slowly build a habit of reacting mindfully to stressful situations. Continue to use R.E.S.T until the feeling of strong emotion disappears."})
})
.then(() => {
  return knex('pages').where("page_number", 29).update({content:"In painful situations, remaining in that space can lead to extended suffering. Leaving the space and gaining some distance gives you valuable time to R.E.S.T, rethink, and approach the problem from a clearer headspace."})
})
.then(() => {
  return knex('pages').where("page_number", 31).update({content:"Engage the logical side of your brain and count! Find a comfortable spot and count your breaths. Count the sounds you hear, inside or outside. You can even do math! Nothing as trivial as increments of one, but try counting down from 100 in increments of 7! You can do it!"})
})
.then(() => {
  return knex('pages').where("page_number", 32).update({content:"Now try to create a distraction plan for yourself using the skills you’ve learned. Remember R.E.S.T. Write it down on paper or your phone, and reference it when in need."})
})
.then(() => {
  return knex('pages').where("page_number", 40).update({content:"Congratulations on reaching this chapter! Here, we will be utilizing advanced distress tolerance skills while keeping in mind that our initial step is to use R.E.S.T.;Throughout this chapter, we will introduce several techniques. Read over the summary, choose which ones sound interesting, and save them for use later!;It is recommended you engage in these techniques in a quiet, comfortable place that is free from distractions such as phones and TV. Let those in your space and home know that you’ll be taking time for yourself for the next 10-20 minutes."})
})
.then(() => {
  return knex('pages').where("page_number", 43).update({content:"What is important to you in life? It's easy to forget the things that give our lives meaning and importance. By remembering and rediscovering your values, you can better tolerate overwhelming situations. This Valued Living Questionnaire is a checklist to separate the different components of your life. Completing it the first time, answer each row based on their important to you ideally. For example, if you value self-care greatly, you can rate it higher such as a 10.;Then during your second time completing this questionnaire, answer based on the actual time and effort you put towards each aspect of your life. Compare the two results. If there is a great difference between your ideal value versus your actual committment, this may indicate you need to reprioritize your time and effort."})
})
.then(() => {
  return knex('pages').where("page_number", 45).update({content:"Mental practice to visualize yourself in situations where you'll face challenges and barriers when trying to take action towards a meaningful activity.;Identify these situations and who is present, what are they saying and doing?;What intentions do you want to act on in this situation?; Break your action down into specific steps and imagine yourself acting them out.;Notice any barriers that arise such as anxiety, discouragement, and thoughts of failure.;Try to accept whatever discomfort these barriers bring while seeing yourself successfully complete your action.;Imagine the people there respond positively towards what you do and congratulate yourself for choosing your intentions over emotional-driven behaviour.;Repeat the full visualization at least one more time."})
})
.then(() => {
  return knex('pages').where("page_number", 46).update({content:"Believing in a power that exists beyond the individual can be revitalizing. Whether it's the belief in a single God, multiple Gods, or the fundamental goodness of people, it can help you persevere through difficult situations. Finding hope can lead to an enduring human spirit and provide a higher sense of purpose. As you grow in life, your spirituality may change. It's perfectly acceptable to reconsider your faith if it no longer gives you the peace and strength it once did.; Consider how your beliefs in a higher power give you strength? How does it make you feel? How do they affect your interactions with others and how do you fortify your beliefs further? Write your answers down.;It's important to remember that belief in a higher power goes beyond just one god or many gods. Take a moment to look at the world around you and think about how we are all connected. The things that make up our bodies also make up the animals, plants, and earth that are with us. Look up and think about the huge universe we are in, with billions of stars shining in space. Look down and think about the tiny particles that move faster than we can understand. Understanding our place in the universe can make us feel amazed and grateful."})
})
.then(() => {
  return knex('pages').where("page_number", 50).update({content:"If you find yourself drifting away from the present moment when talking to someone, ground yourself by focusing your attention on something the person is wearing or take note of an attribute it has: such as color and appearance."})
})
.then(() => {
  return knex('pages').where("page_number", 53).update({content:"This concept was touched upon back in basic distress tolerance but is a crucial element of dialectical behavioural therapy. We must find balance in changing behaviours in our life that are creating suffering in yourself and others while simultaneously finding acceptance in yourself."})
})
.then(() => {
  return knex('pages').where("page_number", 54).update({content:"This is much easier said than done, after all it’s one of the hardest skills to master. Therefore, it will be explored further in later chapters as well.;When faced with the present moment, we may feel compelled to resist it, change it, turn it into something it’s not. Radical acceptance means taking the present moment in stride and acknowledging it without judgement. Events that happen in the present don’t spontaneously occur. They are a result of a chain of events that happened in the past and therefore have already taken place."})
})
.then(() => {
  return knex('pages').where("page_number", 60).update({content:"In response to stress or a threat, anger and anxiety are emotions we use to defend ourselves. However, how can we determine if our reaction is appropriate or if we are overreacting?;FTB-Cope is a way to quantify the feelings we feel versus the threat we are facing on a scale of 0 to 10. You first rate from 0 to 10 the intensity of the feeling you are experiencing. Then rate from 0 to 10 the intensity of the threat you are experiencing. Compare the two numbers, are they close together or far apart? The further the two numbers are from one another, the higher the likelihood you are acting on emotion than logic. All the more reason to cope rather than act in this situation.;If you find a disparity between the two numbers, then consider using one of the techniques covered in previous units to cope with your feelings.;Emotions are messages from your brain, they don’t prove the legitimacy of real-life problems. You’ll learn more about emotional regulation in a future chapter.;In the meantime, feel free to use this worksheet to assess different emotions in response to a threat."})
})
.then(() => {
  return knex('pages').where("page_number", 62).update({content:"You have been exposed to several types of distress tolerance strategies at this point. You can create your own types of coping strategies by examining what you have experienced in the past. Usually distressing situations are not unique and are somewhat predictable. You can use these worksheets to identify these past situations, what you did to cope, what unhealthy consequences occurred as a result. Then you can identify what new coping strategies you can use instead and what might the healthier consequences be this time.;Note that there are two types of worksheets, one for when you’re alone and one for when you’re around others. For example, using cue-controlled relaxation might be awkward around others so preparing a different coping strategy is ideal."})
})
.then(() => {
  return knex('pages').where("page_number", 70).update({content:"The next three techniques fall under Progressive Muscle Relaxation, going from active, to threshold, to passive. In response to stress, we tend to tighten our muscles. This group of techniques was created to progressively release tension in your muscles which helps sooth mental and emotional distress. Pairing it with a verbal cue (like the word ‘peace’) can create a trigger for your muscles to disengage any tension.;Consider the instructions below."})
})
};


// .then(() => {
//   return knex('pages').where("page_number", ).update({content:""})
// })