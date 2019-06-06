<script type="text/x-template" id="post-card">
  <div class="card" v-show ="!deleted">
    <div class="card-header">
      <i class="fa fa-trash-alt" @click="destroy()"></i>
        <h1 class="card-header-title">@{{ title }}</h1>
    </div>
    <div class="card-content">
      <p class="card-content-text">@{{ content }}</p>
    </div>
    <div class="card-footer">
      <div @click="setLiked()">
        @{{ postLikes }}
        <i class="fa-heart" v-bind:class="hearticon"></i>
      </div>
    </div>
  </div>
</script>
