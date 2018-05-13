import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Material } from '../models/material';

@Injectable()
export class BackendsService {

  private data: { [key: string]: BackendData<any> };

  constructor(
    private http: HttpClient,
    public backends: Backend[],
  ) {
    this.backends.push(new Backend('real_material',
      // retrieve
      (pagesize: number = 20, page: number = 1) => {

        if (pagesize > 0 && pagesize % 10 == 0 && page > 0) {
          let url = '/api/materials/1/' + pagesize + '/' + (page - 1) + '/';

          this.http.get<Material[]>(url).subscribe((materials: Material[]) => {
            // TODO
            if (this.data['real_material'] === undefined) {
              this.data['real_material'] = new BackendData<Material>(new BehaviorSubject<Material[]>(materials));
            } else {
              this.data['real_material'].bs.next(materials);
            }
          });

        }

      },
      // find
      (pagesize: number = 20, page: number = 1, filter: Material) => {

        if (pagesize > 0 && pagesize % 10 == 0 && page > 0) {
          let url = '/api/materials/1/' + pagesize + '/' + (page - 1) + '/find/';

          this.http.post<Material[]>(url, filter).subscribe((materials: Material[]) => {
            // TODO
            if (this.data['real_material'] === undefined) {
              this.data['real_material'] = new BackendData<Material>(new BehaviorSubject<Material[]>(materials));
            } else {
              this.data['real_material'].bs.next(materials);
            }
          });

        }

      },
      // get
      (materialId?: number) => {
        let bs = this.data['real_material'].bs;

        if (materialId === undefined) {
          return bs;
        } else {
          // TODO get by id
          return bs.map(materials => materials.find(material => material.id == materialId));;
        }
      },
      // create
      (material: Material) => {
        this.http.post<Material>('/api/materials/1/new', material);
      },
      // update
      (material: Material) => {
        this.http.put<Material>('/api/materials/1/' + material.id, material);
      },
      // del
      (material: Material) => {
        this.http.delete<Material>('/api/materials/1/' + material.id);
      },
    ));
  }

}

class Backend {
  constructor(
    public name: string,
    public retrieve: Function,
    public find: Function,
    public get: Function,
    public create: Function,
    public update: Function,
    public del: Function,
  ) {}
}

class BackendData<T> {
  constructor(
    public bs: BehaviorSubject<T[]>,
  ) { }
}
