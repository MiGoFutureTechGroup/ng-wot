import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { MaterialDetail } from './material-detail.component';

@Injectable()
export class MaterialDetailResolverService implements Resolve<MaterialDetail> {

  constructor() { }

}
