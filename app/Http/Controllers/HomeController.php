<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class HomeController extends Controller
{
    function index() {

      $posts = Post::all();
      return view('page.home', compact('posts'));
    }
    function getPosts() {

      $posts = Post::all();
      return view('page.posts', compact('posts'));
    }

    function deletePost($id) {

      $post = Post::findOrFail($id);
      $post ->delete();

      return response() -> json("deleted". $id.  "post", 200);

    }
}
