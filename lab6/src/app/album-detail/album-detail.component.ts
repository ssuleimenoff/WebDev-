import { Component } from '@angular/core';
import { Album } from '../album-list/service/album';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AlbumDetailAPIService } from './service/album-detail-api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album!: Album;

  constructor(private http: AlbumDetailAPIService, private route: ActivatedRoute, private location: Location){}


  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.http.getAlbum(id).subscribe((album)=>this.album = album)
  }

  back(){
    this.location.back()
  }

  save(){
    this.http.saveChanges(this.album)
  }
}