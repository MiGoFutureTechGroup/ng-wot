import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

import { Material } from '../models/material';

@Injectable()
export class MaterialService {

  private static materialsCount: number = 0;
  private materials: BehaviorSubject<Material[]> = new BehaviorSubject<Material[]>(MATERIALS);

  constructor() { }

  getMaterials() {
    return this.materials;
  }

  getMaterial(id: number | string) {
    return this.getMaterials().map(materials => materials.find(material => material.id == id));
  }

  addMaterial(material: Material) {
    if (material) {
      MATERIALS.push(material);
      this.materials.next(MATERIALS);
    }
  }
}

const MATERIALS: Material[] = [
];
