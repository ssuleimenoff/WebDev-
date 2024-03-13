import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../album-list/service/album';
import { BASE_URL } from '../../constants';
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailAPIService {
  private url = "albums/"

  constructor(private http: HttpClient) { }


  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`${BASE_URL}${this.url}${id}`)
  }

  saveChanges(album: Album){
    return this.http.put(`${BASE_URL}${this.url}${album.id}`, album).subscribe((data)=>console.log(data))
  }
}