// projectData.js
const projectData = {
  thepresidentialchoir: {
    title: "The Presidential Choir",
    technologies: "Audio-visual installation. Text-to-speech, data scraping, music composition",
    details: `The Presidential Choir is an audio-visual installation that reimagines the 2024 U.S. presidential debate as a four-voice choir accompanied by an organ. Drawing inspiration from the Baroque era’s recitativo secco style—where speech and melody blur to convey narrative with minimal accompaniment— the voices here are generated using text-to-speech technology, emphasising the mechanical and performative nature of the debate.
<br><br>As the choir performs, a teleprompter displays the lyrics—direct transcripts of the debate—guiding viewers through the orchestrated rhetoric. This visual element underscores the scripted nature of political theatre, inviting audiences to engage with the fleeting, often nonsensical content. Though the text is available for scrutiny, it reveals little of substance.
<br><br>The Presidential Choir confronts viewers with the absurdity of contemporary political communication, where spectacle overshadows substance and form masquerades as truth, echoing the dynamics of a debate where performance triumphs over meaning.<br><br> The piece is also presented as a website. Visit it <a href="https://antoniodenuevo.github.io/the-presidential-choir/" target="_blank" rel="noopener noreferrer">here</a>.`,
fullWidthMedia: { type: 'video', src: 'https://player.vimeo.com/video/1005846352' },
media: [
      { type: 'image', src: require('./assets/thepresidentialdebate/thepresidentialchoir02.jpg') },
      { type: 'image', src: require('./assets/thepresidentialdebate/thepresidentialchoir05.jpg') },
      { type: 'image', src: require('./assets/thepresidentialdebate/thepresidentialchoir01.jpg') },
      { type: 'image', src: require('./assets/thepresidentialdebate/thepresidentialchoir03.jpg') },
      { type: 'image', src: require('./assets/thepresidentialdebate/thepresidentialchoir04.jpg') },

    ]
  },
  stilllife: {
    title: "Still Life",
    technologies: "[Max MSP, Ableton Live, 3 webcams, projector, speakers]",
    details: `Still Life marks the first instalment in a series of interactive audiovisual installations that transform a simple still life setup into a space where digital technology meets traditional artistry.<br><br>

Using video cameras, the installation captures diverse perspectives from a carefully arranged scene. Data from the cameras is processed and translated into a generative musical composition and video projection, creating a dynamic sensory experience. This transformation continuously reshapes the viewer's perception through the interplay of sound, light, and movement.`,
    fullWidthMedia: { type: 'video', src: 'https://player.vimeo.com/video/936356832' },
    media: [
      { type: 'image', src: require('./assets/stilllife/stilllifedetail3.jpg') },
      { type: 'image', src: require('./assets/stilllife/stilllifedetail2.jpg') },
      { type: 'image', src: require('./assets/stilllife/stilllifepatch.jpg') },
    ]
  },
  landscape: {
    title: "Landscape",
    technologies: "[Max MSP, Ableton Live, 3 webcams]",
    details: `Positioned strategically along the Thames River, three surveillance cameras capture the changing light over an industrial area as the sun sets.<br><br>

This visual data is converted into a dynamic soundscape that evolves with the shifting light—from bright and rapid sounds in daylight to deep, low tones as darkness falls.<br><br>.

Mirroring the river's subtle, persistent flow, the soundscape of "Landscape #1" offers a nuanced auditory experience that evolves almost imperceptibly. Engaging closely with the piece reveals its continuous, gentle transformation, reflecting the ever-changing yet seemingly static landscape.`,
    fullWidthMedia: { type: 'video', src: 'https://player.vimeo.com/video/945507727' },
    media: [
      { type: 'image', src: require('./assets/landscape/landscapedetail2.jpg') },
      { type: 'image', src: require('./assets/landscape/landscapedetail3.jpg') },
      { type: 'image', src: require('./assets/landscape/landscapedetail4.jpg') },
    ]
  },
  echoesofsadness: {
    title: "Echoes Of Sadness: A Generative Film Odyssey",
    technologies: "[p5js, personal video archive, projector, speaker]",
    details: `Using borrowed TV footage from the 1990s and material from my family archive, this generative film operates autonomously, weaving together visuals and sounds to present a non-linear, evolving exploration of emotions, with a particular focus on the complexities and nuances of sadness.<br><br>

The concept of this project is anchored in exploring human emotions, particularly sadness. Despite decades of research into the psychophysiology of emotion, there has been no consensus on the specific physiological pattern of this emotion.<br><br>

A discrete emotions perspective is useful for understanding individual differences in the dimension of affective valence. Categorical theories are based on the assumption that there is a limited set of basic emotion categories, such as joy, sadness, fear, anger, and disgust. In contrast, dimensional theories do not distinguish between discrete emotions, but view emotions as states that can be represented as points within a continuous space defined by two or three dimensions.<br><br>

This dichotomy between the discrete and the continuous mirrors the initial interest in the difference between online (discrete) and offline (continuous) human interactions. The realisation that emotions, especially sadness, can be both universal and unique to each individual, led to a deeper investigation into their nature and representation.<br><br>

The choice of film as the medium is supported by its effectiveness in eliciting emotions. Films, with their dynamic visual and auditory components, offer a more intense representation of stories and emotions than text alone. Influenced by filmmakers like Steve McQueen and Wong Kar-Wai, the project employs various cinematic techniques to convey feelings of loneliness, longing, and melancholy. It explores the use of fragmentation, ellipsis, and pause in creating mood and allowing for reflection, both on the meaning and the feeling of events.<br><br>

Videos were sourced from personal archives and Spanish TV footage from the 1990s, chosen for their emotional resonance and cultural nuances. The chosen content ranged from urban floods and images of religious celebrations to family albums evoking nostalgia. The music has been created by mixing found royalty-free sounds with my own sounds, which I've then turned into soundscapes. The voice heard as narration also comes from various sources of Spanish TV.`,
    fullWidthMedia: { type: 'video', src: 'https://player.vimeo.com/video/981796039' },
    media: []
  }
};

export default projectData;

