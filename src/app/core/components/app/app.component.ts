import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public isInRoot: boolean;
  public styles;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.url.subscribe(
      url => {
        this.isInRoot = url[0].path === '';
        this.styles = {
          docs: `${this.isInRoot ? '': 'two'} wide column`,
          main: `${this.isInRoot ? 'sixteen': 'fourteen'} wide center aligned column`
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
