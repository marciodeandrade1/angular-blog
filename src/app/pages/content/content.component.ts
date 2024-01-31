import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://th.bing.com/th/id/OIP.v1cPk-6MbE5g0B4_I-BvSQHaE7?rs=1&pid=ImgDetMain"
  contentTitle:string = "notícia exemplo"
  contentDescription:string = "bla bla bla "
  constructor() { }

  ngOnInit(): void {
  }

}
