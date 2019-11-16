import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  notificationCounter = 0;

  constructor(private events: Events) { }

  ngOnInit() {
    this.events.subscribe('new_notification', () => {
      this.notificationCounter++;
    });
  }

}
