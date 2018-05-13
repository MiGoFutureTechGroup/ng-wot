import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Material } from '../../../models/material';
import { BackendsService } from '../../../services/backends.service';

@Injectable()
export class MaterialDetailResolverService implements Resolve<Material> {

  constructor(
      private service: BackendsService,
      private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Material> {
    let id = route.paramMap.get('id');

    return this.service.backends[0].get(parseInt(id)).take(1).map(material => {
      if (material) {
        return material;
      } else {
        //this.router.navigate(['/404']);
        return null;
      }
    });
  }

}
