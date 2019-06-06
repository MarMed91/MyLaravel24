@extends('layout.home-layout')
@section('content')

      <h1>Hello World</h1>
      <ul>
        <div id="app">
              <h1>@{{ hello }}</h1>
              <h1 v-html="hello"></h1>
              <img src="{{ asset('img/download.png') }} " width="100px" height="100px" >
              <img v-bind:src="imgsrc">
        </div>
        <div id="CIAO">
              <h1>@{{ hello }}</h1>
        </div>
        <div id="comp_input">
          FirstName: <input type="text" v-model="fname">
          LastName : <input type="text" v-model="lname">
          <h1>Hello to @{{ fname }} @{{ lname }}</h1>
          <h1>Hello to @{{ getFullName }}</h1>
        </div>
        <div id="comp-meth">
            <h1>Computed rnd: @{{ rndVal }}</h1>
            <h1>Computed rnd: @{{ rndVal }}</h1>
            <h1>Method rnd: @{{ getRnd() }}</h1>
            <h1>Method rnd: @{{ getRnd() }}</h1>
        </div>
        @foreach ($posts as $post)
          <li>{{ $post -> title }}</li>
        @endforeach
      </ul>
@stop
