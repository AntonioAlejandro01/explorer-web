import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ServerService } from 'src/app/services/server.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  private mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  private observer: IntersectionObserver;
  address: string;
  itemsNav = [
    {
      icon: 'inbox',
      name: 'Chest',
      redirection: '/chest'
    },
    {
      icon: 'map',
      name: 'Creator',
      redirection: '/creator'
    }
  ];
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sidenavService: SidenavService,
    private serverService: ServerService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  toggleSnav(): void {
    if (this.sidenav) {
      this.sidenavService.toggle();
    }
  }

  closeSideNav(): void {
    this.sidenavService.close();
  }

  changeAddress(){
    this.serverService.setServer(this.address);
    
    
  }

}
