import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: Object;
  userId: String;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userId = params.id);
  }

  ngOnInit() {
    this.dataService.getUser(this.userId).subscribe(
      result => this.user = result
    );
  }

}
