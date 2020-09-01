import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '';
  image: any;
  constructor(private http: HttpClient) { }

  spaceXdata : Object;
  launches:any;
  


  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://api.spaceXdata.com/v3/launches?limit=100').subscribe(data => {

      this.spaceXdata = data;
      //this.launches = data;
      console.log(data);
    });
  }
  getData(launches){
    this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014?launch_year="+this.launch_year').subscribe(data => {

      this.launches = data;
      console.log(data);    });

  }
  getImage(imageUrl: string) {
    
    this.http.get('https://images2.imgbox.com/40/e3/GypSkayF_o.png', { responseType: 'blob' }).subscribe(result => {
      console.log(result);
      
      return result;
    });
  }
  
  getFiles(url: string): Observable<any> {
    return this.http.get('https://images2.imgbox.com/40/e3/GypSkayF_o.png'); 
  }
}




