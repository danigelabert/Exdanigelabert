import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit{

  constructor(private http:HttpClient) {
    this.http.get("http://localhost:3000/danigelabert/jugadors").subscribe((web) => {
      console.log(web)

    })

    this.http.post<any>("http://localhost:3000/danigelabert/mvp", {nom: "messi"}).subscribe()
  }

  ngOnInit(): void {
  }
}
