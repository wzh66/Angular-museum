import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap as observableMargeMap} from 'rxjs/operators';
import {Observable, of as observableOf} from 'rxjs';
import {formData} from '../../../utils/utils';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(@Inject('PREFIX_URL') private prefix_url, private http: HttpClient) {
  }

  search(word?): Observable<any> {
    return this.http.get(this.prefix_url + 'getProductList' + '&word=' + word)
      .pipe(observableMargeMap((res: any) => {
        return this.processResult(res);
      }));
  }

  protected processResult(res): Observable<any> {
    if (res.code === '0000') {
      return observableOf(res.result);
    } else {
      return observableOf(null);
    }
  }
}
