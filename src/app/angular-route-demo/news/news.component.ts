import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  nid: String;
  constructor(private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.routeActive.params.subscribe((params) => this.nid = params.nid);
    console.log(this.nid);
  }
}