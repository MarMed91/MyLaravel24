

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
        liked:false
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
      hearticon : function() {

        //if (this.liked) {

        //  return "fas"
        //} else {

        //  return"far"
        //}

        return x = this.liked ? "fas" : "far";
      },
      postLikes: function() {

        var tmpLikes = Number(this.likes) + (this.liked ? 1 : 0);

        if (this.liked) {

          tmpLikes += 1;
        }

        return this.likes;
      }
    },
    methods: {
      setLiked() {

        this.liked = !this.liked;
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
