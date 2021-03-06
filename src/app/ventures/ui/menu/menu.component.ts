import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../../services/contentful.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public header: Entry<any>;
  public show: boolean;

  constructor(private contentfulService: ContentfulService) {
    this.show = false;
   }

  toggle(event: any) {
    this.show = !this.show;
    event.stopPropagation();
  }

  /**
   * Closes the menu
   */
  closeMenu(): void {
    this.show = false;
  }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'navigation',
      'sys.id': '3f6Nj4v8Nad2kVNId4eBL7',
      include: 3
    }).then(header => {
      this.header = header.items[0];
      console.log(this.header)

    })
  }

}
