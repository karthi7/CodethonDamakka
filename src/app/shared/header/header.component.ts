import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteConfig } from 'src/app/app-route-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  curretTheme = 'Light';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTheme();
    this.setTheme();
  }

  getTheme() {
    let theme = JSON.parse(localStorage.getItem('theme'));
    this.curretTheme = theme ? theme : 'Light';
  }

  onThemeSelection(event) {
    this.curretTheme = (this.curretTheme === 'Light') ? 'Dark' : 'Light';
    localStorage.setItem('theme', JSON.stringify(this.curretTheme));
    this.setTheme();
  }

  setTheme() {
    if(this.curretTheme === 'Dark') {
      document.body.classList.add('dark_mode');
    }
    else {
      document.body.classList.remove('dark_mode');
    }
  }

  goToProfile() {
    this.router.navigate([RouteConfig.PROFILE], {relativeTo: this.route});
  }

}
