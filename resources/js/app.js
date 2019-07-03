

require('./bootstrap');
window.Vue = require('vue');

function init2() {

  console.log("Hello World");

  const vue1 = new Vue({
    el:'#app',
    data: {
      hello:'Hello world from Vue.js'
    }
  });
  const vue2 = new Vue({
    el:'#CIAO',
    data: {
      hello:'Ciao mondo da  Vue.js',
      fname:"Marko",
      lname:"Medic",
      rname:"Marko",
      imgsrc:'img/download.png'
    }
  });
  const vue3 = new Vue({
    el:'#comp_input',
    data: {
      fname:"",
      lname:""
    },
    computed:  {

      fname:function(){
      return this.fname + " " + this.lname;
      }
    },
    methods: {

      getFullName: function(){

        return this.fname + " " + this.lname;
      }
    }
  });
  const vue4 = new Vue({

    el:"#comp-meth",
    methods: {

      getRnd: function() {

        return Math.floor(Math.random() * 100);
      }
    },
    computed: {
      rndVal: function() {

        return Math.floor(Math.random() * 100);
      }
    }
  });
}
function init() {

  token = $('meta[name="csrf-token"]').attr('content');
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

  Vue.component('post-card', {

    template: '#post-card',
    data: function() {
      return {

        deleted:false,
        liked:false // 1) mettiamo qui un liked, !)punti esenziali avere una variabile che possa cambiare
      }
    },
    props: {

      postId: String,
      title:String,
      content:String,
      likes:String
    },
    computed: {
      shortcontent: function() {

        var sc = this.content.substring(0, 150);
        return sc + (this.content.length > 150 ? "..." : " ");
        //if (sc.lenght >150) {

        //  sc = sc.trim() + "...";
        //}
        //return sc;
      },
      hearticon : function() { //1) se è liked  mwttiamo fas altrimenti far 3) e poi avere una computed che in base al valore della variabile ci ritorna qualcosa di diverso o la classe per riempire l'icona o svuotarla

        //if (this.liked) {

        //  return "fas"
        //} else {

        //  return"far"
        //}
                   //condizione    //in base al valore del dato io ti do il necessario per svuotare o riempire;
        return x = this.liked ? "fas" : "far"; //condizione vera allora prendiamo prima parte se è falsa prendiamo seconda parte;
      },
      postLikes: function() { // dobbiamo avere una variabile prendere quel valore e invcrementarlo se l'utente mi ha likato eritornare indietro se l'utente mi dislika;

        var tmpLikes = Number(this.likes) + (this.liked ? 1 : 0); //prendo numero di like e dico se me l'hai likato ti aggiungo uno altrimenti ti sommo zero;

        return tmpLikes;
      }
    },
    methods: {
      setLiked() {

        this.liked = !this.liked; //2)Inverte il valore della variabile liked, se è falsa diventa vera e viceversa 2) avere una funzione che modifichi la variabile a cui associamo un evento in html;
      },
      destroy() {

        axios.delete("/post/destroy/" + this.postId)
              .then((response) =>{

                this.deleted = true;
                console.log(response.data);
              }).catch((error) => {
                console.log(error.response.data);
              });
      }
    }
  });
  new Vue({
    el:"#app"
  });
}

$(document).ready(init);
