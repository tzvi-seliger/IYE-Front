import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private authorization: AuthService) { }

  blogs = [
    {
      title: 'Tell me something I dont know',
      subtitle: '',
      mainsubject: '',
      content: 'Just wanted to talk about the weather',
      tags: ['', ''],
      date: ''
    },
    {
      title: 'Relevancy is irrelevant ',
      subtitle: '',
      mainsubject: '',
      content: 'We have to be more employee centric',
      tags: ['', ''],
      date: ''
    },
    {
      title: 'Walk the talk, and talk the walk',
      subtitle: '',
      mainsubject: '',
      content: 'Agree with me - Humanity is selfish',
      tags: ['', ''],
      date: ''
    }
  ];
  ngOnInit() {
    console.log(this.authorization.user.userName);
  }

}
