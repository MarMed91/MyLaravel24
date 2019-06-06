@extends('layout.home-layout')
@section('content')

  @include('components.post-component')




<div id="app">

  <div class="row">

 @foreach ($posts as  $post)

    {{--@php
      $post = $posts[0];
    @endphp--}}

    <post-card
      post-id = "{{ $post -> id }}"
      title="{{ $post -> title}}"
      content="{{ $post -> content }}"
      likes = " {{ $post -> likes }} ">
    </post-card>
  @endforeach 

  </div>
</div>





@stop
