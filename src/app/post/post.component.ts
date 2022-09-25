import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  info:{
    firstName: string,
    lastName: string
  } = {
    firstName: "Kalon",
    lastName: "Ohmstede",
  }


  ngOnInit(): void {
  }

}
