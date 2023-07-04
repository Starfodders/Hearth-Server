exports.up = function (knex) {
  return knex("pages")
    .insert([
      {
        id: 75,
        page_number: 75,
        title: "This is Mana",
        type: "special",
        content:
          "Welcome to chapter 3, mindfulness! Now that Tal is comfortable in the Hearth, we can meet our next Companion, |Mana.;Mana is quite busy all the time, and sometimes this can overwhelm her with thoughts of self-doubt. She hopes to become more mindful by using the concepts taught in this chapter.",
        transcript: null,
        can_save: false,
        images: "manaPrompt",
        unit_id: 11,
      },
      {
        id: 76,
        page_number: 76,
        title: null,
        type: "text",
        content:
          "What is mindfulness? It is also known as meditation and it is valuable skill for handling |pain, |distress, and |depression. It has roots in religious and spiritual contexts (Christianity, Buddhism, Judaism, Islam) and has been used for generations to as an early form of psychotherapy.",
        can_save: true,
        unit_id: 11,
      },
      {
        id: 77,
        page_number: 77,
        title: "Mindfulness",
        type: "summary",
        content:
          "Mindfulness is the ability to be aware of your thoughts, emotions, physical sensations, and actions - in the present moment - without judging or criticizing yourself, others, or your experience.",
        can_save: true,
        unit_id: 11,
      },
      {
        id: 78,
        page_number: 78,
        title: null,
        type: "text",
        content:
          "At any given moment, you may be feeling, thinking, sensing, or doing many things at once.;While reading through this chapter you may be sitting or standing, breathing deeply or shallowly, muscles tensed or loosened.;You may be thinking of something else while reading, such as an experience you had earlier today or an expectation of an event later.;You may feel happy, sad, angry, tired, or excited.;You can even be doing something subconsciously like playing with your hair or shaking your leg.",
        can_save: true,
        unit_id: 11,
      },
      {
        id: 79,
        page_number: 79,
        title: null,
        type: "text",
        content:
          "There are a lot of sensations and thoughts to be aware of and the truth is nobody is 100% mindful at all times. However, the more mindful you are of your experiences the more control you will gain over your life.",
        can_save: true,
        unit_id: 11,
      },
    ])
    .then(() => {
      return knex("finishData").insert({
        id: 11,
        content:
          "Mana is joyful to learn how to take control of her own life through these lessons!",
      });
    })
    .then(() => {
      return knex("pages").insert([
        {
          id: 80,
          page_number: 80,
          title: null,
          type: "text",
          content:
            "It is necessary to be mindful of your experiences without judgment, a concept from Distress Tolerance called |Radical |Acceptance.;If you view your experiences with criticism, then you are not really paying attention to the present moment. Instead you tend to worry about the mistakes you’ve made or the people you’ve affected. This takes your thoughts from the now to the painful past or future.",
          can_save: true,
          unit_id: 12,
        },
        {
          id: 81,
          page_number: 81,
          title: "Being Mindless",
          type: "list",
          content:
            "Mana feels that she needs some practice being more considerate about her life. Here are some experiences where she felt she was not being mindful. Think to yourself if you shared in these experiences.",
          images: "manaPrompt",
          list: "Not remembering or being present along the route you had taken while driving; Having a sudden realization that you do not know what another person is talking about; In a conversation, already thinking about what you’re going to say before the other person has finished talking; While reading, suddenly realizing you’ve stopped processing what you were reading and have been thinking of something else; Walking into a room and forgetting what you came to get; After putting something down, you forget where you had left it; While showering, you’re planning your day out and had forgotten you had already washed your hair or part of your body; During sex, you’re thinking of other things or people",
          can_save: true,
          unit_id: 12,
        },
        {
          id: 82,
          page_number: 82,
          title: null,
          type: "text",
          content:
            "Mindfulness allows us to focus on a present moment which gives us better control over overwhelming emotion. Mindfulness also allows us to tell apart judgmental thoughts, which tend to worsen overwhelming emotion. Mindfulness will lead to the development of a crucial skill, the |wise |mind.",
          can_save: true,
          unit_id: 12,
        },
        {
          id: 83,
          page_number: 83,
          title: "Wise Mind",
          type: "text",
          content:
            "Wise mind refers to making |healthy, |rational |decisions about your life based on appropriate thoughts and emotions.;When either your thoughts or emotions are intense or out of control, it is difficult to make informed, responsible decisions and you may act in a manner contradictory to what you value. Having a wise mind allows you to balance the reasoning of your thoughts with the needs of your emotions. This concept will be expanded on in a later chapter.",
          can_save: true,
          unit_id: 12,
        },
      ]);
    })
    .then(() => {
      return knex("finishData").insert({
        id: 12,
        content:
          "The next unit will provide some much needed exercises to get you thinking in a mindful way. See you there!",
      });
    })
    .then(() => {
      return knex("pages").insert([
        {
          id: 84,
          page_number: 84,
          title: null,
          type: "text",
          content:
            "This unit will go over a few mindfulness exercises for you to observe your |thoughts and |emotions. They will focus on the |‘what’ of the situation, a specific target or subject of the exercise.",
          can_save: true,
          unit_id: 13,
        },
        {
          id: 85,
          page_number: 85,
          title: "Focus on a Single Minute",
          type: "technique",
          content:
            "A simple exercise to consider your own perception of time. We may perceive time quickly, often rush through things and thinking of the next step. Or we may perceive time slowly and fail at being punctual. Consider the following technique.;Afterwards, reflect on how much time had actually passed versus when you decided to look. Consider how this affects your day to day life. Remember, being mindful is being more aware of moment to moment experiences including your sense of time.",
          transcript: true,
          can_save: true,
          unit_id: 13,
        },
        {
          id: 86,
          page_number: 86,
          title: "Focus on a Single Object",
          type: "technique",
          content:
            "This exercise will help you focus and maintain your attention on something presently in front of you. We often get distracted from our current task and learning how to train your mental muscle to refocus will improve your attention span. Pick out a small object, find a comfortable spot to sit, and consider this technique.; During this exercise if you find yourself distracted, bring your attention back to the object without criticizing yourself. Just take note that it had occurred.",
          transcript: true,
          can_save: true,
          unit_id: 13,
        },
        {
          id: 87,
          page_number: 87,
          title: "Band of Light",
          type: "technique",
          content:
            "This technique will provide further practice with living in the present moment. Consider the following technique.; Remember, if you find your focus drifting, bring your wandering mind back to the present.",
          transcript: true,
          can_save: true,
          unit_id: 13,
        },
      ]);
    })
    .then(() => {
      return knex("finishData").insert({
        id: 13,
        content: "Mana has inspected everything in her room quite closely.",
      });
    })
    .then(() => {
      return knex("transcripts").insert([
        {
          id: 85,
          content:
            "To begin this exercise, find a comfortable place to sit in a room where you won’t be disturbed for a few minutes and turn off any distracting sounds. Begin timing yourself with your watch or smartphone. Then, without counting the seconds or looking at the watch, simply sit wherever you are. When you think that one minute has passed, check the watch again, or stop the timer. Note how much time really has passed.",
          audio: null,
        },
        {
          id: 86,
          content:
            "To begin, sit comfortably and take a few slow, deep breaths. Then, without touching the object, begin looking at it and exploring its different surfaces with your eyes. Take your time exploring what it looks like. Then try to imagine the different qualities that the object possesses.;What does the surface of the object look like?;Is it shiny or dull?;Does it look smooth or rough?;Does it look soft or hard?;Does it have multiple colors or just one color?;What else is unique about the way the object looks?;Take your time observing the object. Now hold the object in your hand or reach out and touch the object. Begin noticing the different ways it feels.;Is it smooth or is it rough?;Does it have ridges or is it flat?;Is it soft or is it hard?;Is it bendable or is it rigid?;Does the object have areas that feel different from each other?;What does the temperature of the object feel like?;If you can hold it in your hand, notice how much it weighs.;What else do you notice about the way it feels?;Continue exploring the object with both your sight and your sense of touch. Continue to breathe comfortably. When your attention begins to wander, return your focus to the object. Keep on exploring the object until your alarm goes off or until you have fully explored all the qualities of the object.",
          audio: null,
        },
        {
          id: 87,
          content:
            "To begin, find a comfortable place to sit in a room where you won’t be disturbed for ten minutes. Turn off any distracting sounds. Take a few slow, long breaths and then close your eyes. Using your imagination, envision a narrow band of white light circling the top of your head like a halo. As this exercise progresses, the band of light will slowly move down your body, and as it does, you will become aware of the different physical sensations you’re feeling beneath the band of light.;As you continue to breathe with your eyes closed, continue to see the band of white light encircling the top of your head and notice any physical sensations you feel on that part of your body. Perhaps you will notice your scalp tingling or itching. Whatever sensations you notice are okay.;Slowly the band of light begins to descend around your head, passing over the tops of your ears, your eyes, and the top of your nose. As it does, become aware of any sensations you feel there, even small sensations.;Notice any muscle tension you may be feeling on the top of your head.;As the band of light slowly descends over your nose, mouth, and chin, continue to focus on any physical sensations you might be feeling there.;Pay attention to the back of your head where you may be having sensations.;Notice any sensations you may be feeling in your mouth, on your tongue, or on your teeth.;Continue to watch the band of light in your imagination descend around your neck, and notice any feelings in your throat or any muscle tension on the back of your neck.;Now the band widens and begins to move down your torso, across the width of your shoulders.;Notice any sensations, muscle tension, or tingling you might be feeling in your shoulders, upper back, upper arms, and upper chest area.;As the band of light continues to descend down around your arms, notice any feelings you’re aware of in your upper arms, elbows, forearms, wrists, hands, and fingers. Become aware of any tingling, itching, or tension you might be holding in those places.;Now become aware of your chest, the middle of your back, the side of your torso, your lower back, and stomach. Again, notice any tension or sensations, no matter how small they might be.;As the band continues to move down your lower body, become aware of any sensations in your pelvic region, buttocks, and upper legs.;Be sure to pay attention to the backs of your legs and notice any feelings there.;Continue to watch the band of light descend around your lower legs, around your calves, shins, feet, and toes. Notice any feelings or tension you’re experiencing.;Then as the band of light disappears after completing its descent, take a few more slow, long breaths, and when you feel comfortable, slowly open your eyes and return your focus to the room.",
          audio: null,
        },
      ]);
    })
    .then(() => {
      return knex("pages").insert([
        {
          id: 88,
          page_number: 88,
          title: "Inner-Outer Experience",
          type: "technique",
          content:
            "The previous techniques taught you how to be mindful of an external object as well as your own sensation. We will now combine the two and teach you how to recognize and focus on your thoughts, emotions, and physical sensations. This is done by shifting your focus in a mindful manner between your |internal and |external experiences.",
          transcript: true,
          can_save: true,
          unit_id: 14,
        },
        {
          id: 89,
          page_number: 89,
          title: "Record Three Minutes of Thought",
          type: "technique",
          content:
            "This exercise will involve you recording down the number of thoughts you have over the course of 3 minutes. There is no recorded instruction, but the steps are simple.;Set a timer for 3 minutes and then begin writing down every thought you have during this period of time. You can use simple language, like a word or phrase, to describe each thought.;See how many thoughts appear! Multiply this number by 20 to get an estimate of how many you may have in an hour.",
          transcript: false,
          can_save: true,
          unit_id: 14,
        },
        {
          id: 90,
          page_number: 90,
          title: "Thought Defusion",
          type: "technique",
          content:
            "When negative or distressing thoughts come, you may find yourself constantly repeating them in your mind which prevents you from focusing onto other things. This technique will teach you to mindfully observe these thoughts without being caught up on them, and then |letting |them |go. This will also give you more freedom in choosing which thoughts to focus on and which ones to discard.;This technique works by visualizing your thoughts as harmless pictures or words. Something to observe before they float away without further repetition or analysis. Consider the instructions below.",
          transcript: true,
          can_save: true,
          unit_id: 14,
        },
        {
          id: 91,
          page_number: 91,
          title: "Describe Your Emotion",
          type: "technique",
          content:
            "The previous techniques were focused on recognizing physical sensations and thoughts. This one will focus on being mindful with your emotions through expression and attributing qualities to said emotion.;Pick a specific emotion, ideally one that you are feeling now unless that feeling is overwhelmingly sad or self-destructive. If it is, you should wait until that feeling is more under control before beginning this exercise. If you are having trouble identifying an emotion, please reference the external resource link at the top of this slide for a list of examples.;Now consider the technique below.",
          transcript: true,
          can_save: true,
          links: "emotion-log",
          unit_id: 14,
        },
        {
          id: 92,
          page_number: 92,
          title: "Focus Shifting",
          type: "technique",
          content:
            "We sometimes can find ourselves caught up in our emotions. A negative comment you hear may cause you to fall into an emotional trap and feel upset all day. Although this is common, someone dealing with overwhelming emotion may experience these occurrences more frequently than normal;This technique expands on the |Inner-Outer |Experience earlier, highlighting more on the |separation of your emotional state from the present-moment experience.;Before you start, it is important to acknowledge how you are currently feeling and keep this in mind while going through the technique below.",
          transcript: true,
          can_save: true,
          unit_id: 14,
        },
        {
          id: 93,
          page_number: 93,
          title: "Mindful Breathing",
          type: "technique",
          content:
            "This is a continuation of the basics of mindful breathing covered in the previous chapter, Advanced Distress Tolerance. With the concepts of mindfulness fresh on your mind, the experience of mindful breathing is a simple yet effective way of relaxation.;Before engaging in the exercise, these are some of the steps to consider. Count your breaths to focus your attention on this number and not your thoughts. Focus on the physical sensation of breathing and the flow of air in and out of your lungs. Be aware of any distracting thoughts that come during this exercise and employ thought defusion to let them go, refocusing on your breathing.;Then, consider the exercise below.",
          transcript: true,
          can_save: true,
          unit_id: 14,
        },
        {
          id: 94,
          page_number: 94,
          title: "Mindful Awareness of Emotions",
          type: "technique",
          content:
            "This technique begins with mindful breathing and translates into an |assessment of your emotions and what you feel in the present moment. Observe these emotions and their nuances, how they come in as a wave and as such grow, change, and diminish.;Reflect on two realizations after completing the technique. One is that feelings have a natural life span and by watching them, you can notice their peaks and their |gradual |decline and disappearance. Secondly, describing an emotion gives you some degree of |control over them and reduces the likelihood of being overwhelmed.",
          transcript: true,
          can_save: true,
          unit_id: 14,
        },
      ]);
    })
    .then(() => {
      return knex("finishData").insert({
        id: 14,
        content:
          "Mana would have been overwhelmed with all these new techniques but by practicing mindfulness, she is able to take them on one by one, picking out her favourite.",
      });
    })
    .then(() => {
      return knex("transcripts").insert([
        {
          id: 88,
          content:
            "To begin, find a comfortable place to sit in a room where you won’t be disturbed for ten minutes. Turn off any distracting sounds. Take a few slow, long breaths and relax.;Now, keeping your eyes open, focus your attention on an object in the room. Notice what the object looks like. Notice its shape and color. Imagine what that object would feel like if you could hold it. Imagine what the object must weigh. Describe the object silently to yourself, being as descriptive as possible. Take a minute to do this. Keep breathing. If your focus begins to drift, simply return your attention to the exercise without criticizing yourself.;When you have finished describing the object, return your focus to your body. Notice any physical sensations that you might be experiencing. Scan your body from your head to your feet. Notice any muscle tension you might be holding, any tingling you might be experiencing, or any other sensations of which you are aware. Take a minute to do this, and keep breathing slow, deep breaths.;Now redirect your attention to your sense of hearing. Notice any sounds that you can hear. Notice sounds you hear coming from outside your room and note to yourself what they are. Now become aware of any sounds you hear coming from inside the room and note to yourself what they are. Try to notice even small sounds, such as the ticking of a clock, the sound of the wind, or the beating of your heart. If you become distracted by any thoughts, return your focus to your sense of hearing. Take a minute to do this, and keep breathing.;When you have finished listening to the sounds that you can notice, return your focus to your body. Again, notice any physical sensations. Become aware of the weight of your body resting in the chair. Notice the weight of your feet resting on the floor. Notice the weight of your head resting on top of your neck. Notice in general how your body feels. If you become distracted by your thoughts, just notice what they are and refocus your attention as best you can on your physical sensations. Take a minute to do this, and keep breathing slow, deep breaths.;Once again, redirect your attention. This time, put your focus on your sense of smell. Notice any smells that are in the room, pleasant or otherwise. If you don’f notice any smells, just become aware of the flow of air moving into your nostrils af you breathe in through your nose. Try your best to maintain your focus on youf sense of smell. If you become distracted by any thoughts, return your focus to youf nose. Take a minute to do this, and keep breathing.;When you have finished using your sense of smell, once again return your focus to your physical sensations. Notice any sensations that you might be feeling. Once again, scan your body from your head to your feet and become aware of any muscle tension, tingling, or other physical feelings. If your thoughts distract you, do your best to return your focus to your physical sensations. Take a minute to do this, and keep breathing slow, deep breaths.;Now, finally, redirect your attention to your sense of touch. Reach out with one of your hands to touch an object that is within reach. Or, if there is no object within reach, touch the chair you’re sitting on or touch your leg. Notice what the object feels like. Notice if it’s smooth or rough. Notice if it’s pliable or rigid. Notice if it’s soft or solid. Notice what the sensations feel like on the skin of your fingertips. If your thoughts begin to distract you, simply return your focus to the object that you’re touching. Take a minute to do this, and keep breathing slow, deep breaths.",
          audio: null,
        },
        {
          id: 90,
          content:
            "To begin, find a comfortable place to sit in a room where you won’t be disturbed for as long as you’ve set your timer. Turn off any distracting sounds. Take a few slow, long breaths, relax, and close your eyes.;Now, in your imagination, picture yourself in the scenario that you chose, watching your thoughts come and go, whether it’s on the beach, near a stream, in a field, in a room, or wherever. Do your best to imagine yourself in that scene. After you do, start to become aware of the thoughts that you’re having. Start to observe the thoughts that are coming up, whatever they are. Don’t try to stop your thoughts, and do your best not to criticize yourself for any of the thoughts. Just watch the thoughts arise, and then, using whatever technique you’ve chosen, watch the thoughts disappear. Whatever the thought is, big or small, important or unimportant, watch the thought arise in your mind and then let it float away or disappear by whichever means you’ve chosen.;Just continue to watch the thoughts arise and disappear. Use pictures to represent the thoughts or words, whatever works best for you. Do your best to watch the thoughts arise and disappear without getting hooked into them and without criticizing yourself.;If more than one thought comes up at the same time, see them both arise and disappear. If the thoughts come very quickly, do your best to watch them all disappear without getting hooked on any of them. Continue to breathe and watch the thoughts come and go until your timer goes off.;When you’ve finished, take a few more slow, long breaths and then slowly open your eyes and return your focus to the room.",
          audio: null,
        },
        {
          id: 91,
          content:
            "After choosing an emotion to focus on, write it down on a piece of paper.;Then, using your imagination, draw a picture of what your emotion might look like. This might sound hard to do, but just do the best you can. For example, if you are feeling happy, maybe a picture of the sun expresses how you feel or maybe a picture of an ice-cream cone would do better. The picture doesn’t have to make sense to anyone else but you. Just give it a try.;Next, try to think of a sound that would further describe the emotion. For example, if you are feeling sad, maybe the sound of a groan would describe how you feel, such as 'ugh.' Or maybe a certain song expresses your emotion better. Describe the sound as best you can, and write it near your drawing.Then describe an action that 'fits' your emotion. For example, if you are feeling bored, maybe the action would be to take a nap. Or if you are feeling shy, maybe the action would be to run away and hide. Do your best to describe the action, and write it near your drawing.;The next step of this exercise is to describe the intensity of the emotion on which you’re focusing. This will require some thought. Do your best to describe the strength of this emotion. Feel free to be creative and use metaphors if you need to. For example, if you are feeling very nervous, you might write that the feeling is so strong that your 'heart feels like a drum at a rock concert.' Or if you are only feeling a little angry, you might write that the intensity is like a 'mosquito bite.';After describing the intensity of the emotion, briefly describe the overall quality of what the emotion feels like. Again, feel free to be as creative as you need to be in your description. If you are nervous, maybe it makes you feel like your 'knees are made of jelly.' Or if you are getting angry, it might make you feel like 'water that’s about to boil.' Be as accurate as you can in your description and be as creative as you need to be in order to convey your feelings.;Finally, add any thoughts that arise due to your emotion. But be clear that what you describe is a thought and not another emotion. For example, don’t choose any of the words in the list above to describe your thoughts. Those are emotions, not thoughts. Your thoughts should be able to finish the following sentences: “My emotion makes me think that…” or 'My emotion makes me think about…'. It’s important that you begin separating your thoughts and your emotions because this will give you better control over both of them in the future. Here are some examples of thoughts that can arise from emotions. If you are feeling confident, a related thought might be that you think you can ask your boss for a raise, or it makes you remember other times in your life when you felt confident and were successful. Or if you are feeling fragile, a related thought could be that you think you can’t handle any more stress in your life, or it makes you think about how you’re going to struggle with future problems if you don’t get stronger.",
          audio: null,
        },
        {
          id: 92,
          content:
            "To begin, find a comfortable place to sit in a room where you won’t be disturbed for ten minutes. Turn off any distracting sounds. Take a few slow, long breaths, and relax.;Now close your eyes and focus your attention on how you are feeling. Name the emotion silently to yourself. Use your imagination to envision what your emotion might look like if it had a shape. The image doesn’t have to make sense to anyone but you. Just allow your imagination to give your emotion a form or shape. Take a minute to do this, and keep breathing slow breaths.;Now open your eyes and put your focus on an object in the room where you’re sitting. Notice what the object looks like. Notice its shape and color. Imagine what that object might feel like if you could hold it. Imagine what the object must weigh. Describe the object silently to yourself, being as descriptive as possible. Take a minute to do this. Keep breathing. If your focus begins to drift, simply return your attention to the exercise without criticizing yourself.;When you’ve finished describing the object, close your eyes and return your focus to your emotion. Think of a sound that might be related to your emotion. The sound can be anything that you think describes your emotion. It can be a noise, a song, or whatever. When you’re done describing the sound to yourself, think of an action related to your emotion. Again, it can be anything that further enhances your understanding of your emotion. Take a minute to do this, and keep breathing slow, deep breaths.;Now, keeping your eyes closed, redirect your attention to your sense of hearing. Notice any sounds that you can hear. Notice sounds you hear coming from outside your room and note to yourself what they are. Now become aware of any sounds you hear coming from inside the room and note to yourself what they are. Try to notice even small sounds, such as the ticking of a clock, the sound of the wind, or the beating of your heart. If you become distracted by any thoughts, return your focus to your sense of hearing. Take a minute to do this, and keep breathing.;When you have finished listening to the sounds that you can notice, return your focus to your emotion. Keeping your eyes closed, silently describe the intensity and quality of your emotion to yourself. Again, feel free to be creative and use comparisons if you need to. Take a minute to do this, and keep breathing slow, deep breaths.;Once again, redirect your attention. This time, put your focus on your sense of smell. Notice any smells that are in the room, pleasant or otherwise. If you don’t notice any smells, just become aware of the flow of air moving into your nostrils as you breathe in through your nose. Try your best to maintain your focus on your sense of smell. If you become distracted by any thoughts, return your focus to your nose. Take a minute to do this, and keep breathing.;When you have finished using your sense of smell, once again return your focus to your emotion. Notice any thoughts you might be having that are related to your emotion. Be as specific about the thought as you can, and make sure your thought isn’t really another emotion. Take a minute to do this, and keep breathing slow, deep breaths.;Now, finally, redirect your attention to your sense of touch. Reach out with one of your hands to touch an object that is within reach. Or if there is no object within reach, touch the chair you’re sitting in or touch your leg. Notice what the object feels like. Notice if it’s smooth or rough. Notice if it’s pliable or rigid. Notice if it’s soft or solid. Notice what the sensations feel like on the skin of your fingertips. If your thoughts begin to distract you, simply return your focus to the object that you’re touching. Take a minute to do this, and keep breathing slow, deep breaths.;When you’ve finished, take three to five slow, long breaths and return your focus to the room.",
          audio: null,
        },
        {
          id: 93,
          content:
            "First, find a comfortable place to sit in a room where you won’t be disturbed for as long as you’ve set your timer. Turn off any distracting sounds. If you feel comfortable closing your eyes, do so to help you relax.;To begin, take a few slow, long breaths, and relax. Place one hand on your stomach. Now slowly breathe in through your nose and then slowly exhale through your mouth. Feel your stomach rise and fall as you breathe. Imagine your belly filling up with air like a balloon as you breathe in, and then feel it effortlessly deflate as you breathe out. Feel the breath moving in across your nostrils, and then feel your breath blowing out across your lips, as if you’re blowing out candles. As you breathe, notice the sensations in your body. Feel your belly move as you activate the diaphragm muscle and allow your lungs to fill up with air. Notice the weight of your body resting on whatever you’re sitting on. With each breath, notice how your body feels more and more relaxed.;Now, as you continue to breathe, begin counting your breaths each time you exhale. You can count either silently to yourself or aloud. Count each exhalation until you reach 4 and then begin counting at 1 again. To begin, breathe in slowly through your nose, and then exhale slowly through your mouth. Count 1. Again, breathe in slowly through your nose and slowly out through your mouth. Count 2. Repeat, breathing in slowly through your nose, and then slowly exhale. Count 3. Last time—breathe in through your nose and out through your mouth. Count 4. Now begin counting at 1 again.;This time, though, as you continue to count, occasionally shift your focus to how you’re breathing. Notice the rising and falling of your chest and abdomen as you inhale and exhale. Again, feel the breath moving in through your nose and slowly out through your mouth. If you want to, place one hand on your abdomen and feel your breath rise and fall. Continue counting as you take slow, long breaths. Feel your belly expand like a balloon as you breathe in, and then feel it deflate as you breathe out. Continue to shift your focus back and forth between counting and the physical experience of breathing.;Now, lastly, begin to notice any thoughts or other distractions that remove your focus from your breathing. These distractions might be memories, sounds, physical sensations, or emotions. When your mind begins to wander and you catch yourself thinking of something else, return your focus to counting your breath. Or return your focus to the physical sensation of breathing. Try not to criticize yourself for getting distracted. Just keep taking slow, long breaths into your belly, in and out. Imagine filling up your belly with air like a balloon. Feel it rising with each inhalation and falling with each exhalation. Keep counting each breath, and with each exhalation, feel your body relaxing, more and more deeply.;Keep breathing until your alarm goes off. Continue counting your breaths, noticing the physical sensation of your breathing and letting go of any distracting thoughts or other stimuli. Then, when your alarm goes off, slowly open your eyes and return your focus to the room.",
          audio: null,
        },
        {
          id: 94,
          content:
            "Take a long, slow breath and notice the feeling of the air moving in through your nose, going down the back of your throat, and into your lungs. Take another breath and watch what happens in your body as you inhale and let go. Keep breathing and watching. Keep noticing the sensations in your body as you breathe.;Now turn your attention to what you feel emotionally. Look inside and find the emotion you are experiencing right now. Or find an emotion that you felt recently. Notice whether the emotion is a good or a bad feeling. Notice whether it is pleasant or unpleasant. Just keep your attention on the feeling until you have a sense of it.;Now look for words to describe the emotion. For example, is it elation, contentment, or excitement? Or is it sadness, anxiety, shame, or loss? Whatever it is, keep watching and describing the emotion in your mind. Notice any change in the feeling and describe what’s different. If any distractions or thoughts come to mind, do your best to let them go without getting stuck on them. Notice if your feeling is intensifying or diminishing, and describe what that’s like.;Keep observing your emotion and letting go of distractions. Keep looking for words to describe the slightest change in the quality or intensity of your feeling. If other emotions begin to weave in, continue to describe them. If your emotion changes into an altogether new emotion, just keep observing it and finding the words to describe it.;Thoughts, physical sensations, and other distractions will try to grab your attention. Notice them, let them go, and return your focus to your emotion. Stay with it. Continue observing it. Keep going until you’ve observed your emotion change or diminish.",
          audio: null,
        },
      ]);
    })
    .then(() => {
        return knex('chapters').where('id', 3).update({units: 8})
    })
};

exports.down = function (knex) {
  return knex("pages")
    .whereIn(
      "id",
      [
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94,
      ]
    )
    .del()
    .then(() => {
      return knex("finishData").whereIn("id", [11, 12, 13, 14]).del();
    })
    .then(() => {
      return knex("transcripts")
        .whereIn("id", [85, 86, 87, 88, 90, 91, 92, 93, 94])
        .del();
    })
    .then(() => {
        return knex('chapters').where('id', 3).update({units: null})
    })
};
