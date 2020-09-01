import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public isInRoot: boolean = true;
  public styles = {
    docs: `wide column`,
    main: `sixteen wide center aligned column`
  };;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sub = this.router.events.subscribe(changes => {
      if (changes instanceof NavigationEnd) {
        this.isInRoot = changes.url === '/welcome' || changes.url === '/';
        this.styles = {
          docs: `${this.isInRoot ? '' : 'two'} wide column`,
          main: `${this.isInRoot ? 'sixteen' : 'fourteen'} wide center aligned column`
        };
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
