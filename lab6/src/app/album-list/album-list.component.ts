import { Component } from '@angular/core';
import { AlbumListAPIService } from './service/album-list-api.service';
import { Album } from './service/album';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent {
  albums: Album[] = []

  constructor(private api: AlbumListAPIService){}

  ngOnInit(){
    this.api.getAlbums().subscribe((data) =>{
      console.log(data)
      this.albums = data
    })
  }


  delete(id: number){
    this.api.deleteAlbumById(id)
    this.albums = this.albums.filter((data)=>data.id != id)
  }

  create(){    
    let album = {
      id: 0,
      title: "Dummy",
      userId: 0
    }
    this.api.createAlbum(album)
    this.albums.push(album)
  }
}