class accessToDocument{
	constructor(container,tag,_classList,_innerHTML,){
        this.container = container;
        this._classList = _classList;
        this._innerHTML=_innerHTML;
        this.tag = tag;
        
  }
	
  ADD(){
  	let father = document.querySelector('.'+ `${this.container}`);
    let san = document.createElement(`${this.tag}`);
    san.classList.add(this._classList);
    san.innerHTML = this._innerHTML;
    father.appendChild(san);
    }
    
    REMOVE() {
        
    }

}

let alo;
export default  alo = [
  {
    name: "Demon slayer",
    img: "demon_slayer.jpg",
    class: "kimetsu_no_yaiba_btn",
    type: "Series",
    isFav: true,
    epLenth: 4,//number of episods,
    spc: ['shonin', ' adventure'],
    about:"A boy raised by boars, who wears a boar's head, boards the Infinity Train on a new mission with the Flame Pillar along with another boy who reveals his true power when he sleeps. Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it."

  },
  {
    name: "Made in Abyss",
    img: "made_in_abyss_1.jpg",
    class: "made_in_abyss_btn",
    type: "Series",
    isFav: true,
       epLenth: 12,//number of episods,
    spc: ['shonin', 'adventure'],
        about:"Plot. An orphaned girl named Riko lives in the Belchero Orphanage in the town of Orth. The town surrounds a strange, giant hole descending deep into the earth, which is known as the Abyss. ... Riko, determined to find her mother, bids farewell to her friends and secretly departs into the Abyss with Reg as her companion."
  },
  {
    name: "Made in Abyss Movie",
    img: "made_in_abyss_movie.jpg",
    class: "made_in_abyss_movie_btn",
    type: "Movie",
    isFav: false,
       epLenth: 1,//number of episods,
    spc: ['shonin', 'adventure'],
     about: "Riko, Reg and a new friend encounter the mysterious Bondrewd while venturing to the Sea of Corpses.",
  },
  {
    name: "Vinland Saga",
    img: "vinland_saga.jpg",
    class: "vinland_saga_btn",
    type: "Series",
    isFav: false,
       epLenth: 12,//number of episods,
    spc: ['shonin', 'adventure'],
        about:"The story combines a dramatization of King Cnut the Great's historical rise to power with a revenge plot centered on the historical explorer Thorfinn, the son of a murdered ex-warrior who serves under a group of mercenaries responsible for the deed; the story progresses through several story arcs beyond this, ..."
  },
  {
    name: "Violet Evergarden",
    img: "violet_evergarden.jpg",
    class: "violet_evergarden_btn",
    type: "Series",
    isFav: false,
       epLenth: 12,//number of episods,
    spc: ['shonin', 'adventure'],
        about:"Former soldier Violet Evergarden tutors a young lady at a private women's academy, but still grieves for the only person who ever brought her happiness."
  },
  {
    name: "Mushoku Tensei",
    img: "mushoku_tensei.jpg",
    class: "mushoku_tensei_btn",
    type: "Series",
    isFav: false,
       epLenth: 12,//number of episods,
    spc: ['shonin', 'adventure'],
        about:"A 34-year-old NEET is kicked out of his home following the death of his parents. He comes upon a speeding truck heading towards a group of teenagers, and manages to pull one of them out of the way before dying. He then awakens in a baby's body and realizes he has been reincarnated in a world of sword and sorcery."
  },
  {
    name: "Re:Zero kara Hajimeru",
    img: "re_zero.jpg",
    class: "re_zero_btn",
    type: "Series",
    isFav: false,
       epLenth: 12,//number of episods,
    spc: ['shonin', 'adventure'],
        about:"The series tells a story of Natsuki Subaru, a normal young man that lives his normal life in the modern Japan. However, one day, he is summoned to another world. Without knowing the person that summoned him, or the reason for being summoned in the new world, he soon befriends a silver-haired-half-elf girl, Emilia."
  },
  {
    name: "Takt Op. Destiny",
    img: "takt_op_destiny.jpg",
    class: "takt_op_destiny_btn",
    type: "Series",
    isFav: false,
       epLenth: 12,//number of episods,
    spc: ['shonin', 'adventure'],
        about:"Plot. Takt Op is set in the year 2047, a future world where music cannot be played freely because it attracts monsters called \"D2s.\" ... They hate the music produced by humans and are drawn to the music source and attempt to destroy it as it is the only thing that can hurt and kill them."
  },
  {
    name: "Owari no Seraph",
    img: "owari_no_seraph.jpg",
    class: "owari_no_seraph_btn",
    type: "Series",
    isFav: false,
       epLenth: 12,//number of episods,
    spc: ['shonin', 'adventure'],
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti veniam voluptates molestias totam numquam reprehenderit eveniet in, eius reiciendis veritatis? Voluptatibus mollitia reiciendis quasi ducimus suscipit! Recusandae fugit culpa ullam animi, quae corrupti blanditiis dicta praesentium minima aperiam eligendi'
  },
  {
    name: "Fate/Zero",
    img: "fate_zero.jpg",
    class: "fate_zero_btn",
    type: "Series",
    isFav: false,
       epLenth: 12,//number of episods,
    spc: ['shonin', 'adventure'],
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti veniam voluptates molestias totam numquam reprehenderit eveniet in, eius reiciendis veritatis? Voluptatibus mollitia reiciendis quasi ducimus suscipit! Recusandae fugit culpa ullam animi, quae corrupti blanditiis dicta praesentium minima aperiam eligendi'
  },
  {
    name: "The Stranger by the Beach",
    img: "the_stranger_by_the_beach.jpg",
    class: "the_stranger_by_the_beach_btn",
    type: "Movie",
    isFav: false,
       epLenth: 1,//number of episods,
    spc: ['shonin', 'adventure'],
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti veniam voluptates molestias totam numquam reprehenderit eveniet in, eius reiciendis veritatis? Voluptatibus mollitia reiciendis quasi ducimus suscipit! Recusandae fugit culpa ullam animi, quae corrupti blanditiis dicta praesentium minima aperiam eligendi'
  },
  {
    name: "White Snake 2 Green Snake",
    img: "white_snake_2_green_snake.jpg",
    class: "white_snake_2_green_snake_btn",
    type: "Movie",
    isFav: false,
       epLenth: 1,//number of episods,
    spc: ['shonin', 'adventure'],
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti veniam voluptates molestias totam numquam reprehenderit eveniet in, eius reiciendis veritatis? Voluptatibus mollitia reiciendis quasi ducimus suscipit! Recusandae fugit culpa ullam animi, quae corrupti blanditiis dicta praesentium minima aperiam eligendi'
  },
  {
    name: "Ciao Alberto",
    img: "ciao_alberto.jpg",
    class: "ciao_alberto_btn",
    type: "Movie",
    isFav: false,
       epLenth: 1,//number of episods,
    spc: ['shonin', 'adventure'],
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti veniam voluptates molestias totam numquam reprehenderit eveniet in, eius reiciendis veritatis? Voluptatibus mollitia reiciendis quasi ducimus suscipit! Recusandae fugit culpa ullam animi, quae corrupti blanditiis dicta praesentium minima aperiam eligendi'
  },
  {
    name: "Away",
    img: "away.jpg",
    class: "away_btn",
    type: "Movie",
    isFav: false,
       epLenth: 1,//number of episods,
    spc: ['shonin', 'adventure'],
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti veniam voluptates molestias totam numquam reprehenderit eveniet in, eius reiciendis veritatis? Voluptatibus mollitia reiciendis quasi ducimus suscipit! Recusandae fugit culpa ullam animi, quae corrupti blanditiis dicta praesentium minima aperiam eligendi'
  },
  {
    name: "test",
    img: "the_stranger_by_the_beach.jpg",
    class: "test_btn",
    type: "Movie",
    isFav: false,
       epLenth: 0,//number of episods,
    spc : ['shonin','action'],
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti veniam voluptates molestias totam numquam reprehenderit eveniet in, eius reiciendis veritatis? Voluptatibus mollitia reiciendis quasi ducimus suscipit! Recusandae fugit culpa ullam animi, quae corrupti blanditiis dicta praesentium minima aperiam eligendi'
  },
];

function fromArrToJSON(animes){
myStr = ""
myStr += ("[");
for (let i = 0; i < animes.length; i++) {
    let anime = animes[i];
    myStr += (`{"name": "${anime[0]}","img": "${anime[1]}","class": "${anime[2]}","type": "${anime[3]}","isFav": ${anime[4]}}`);
    if (i != animes.length -1){
      myStr+=","
    }
}
myStr += ("]");
return JSON.parse(myStr)
}


