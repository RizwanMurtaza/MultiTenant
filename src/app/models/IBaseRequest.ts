import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export abstract class BaseRequest {
   TenantKey: string;
   EndPoint: string;
   FullUrl : string
   Header : HttpHeaders;
   constructor(endPoint: string) {
    this.TenantKey = environment.ApplicationKey;
    this.EndPoint = endPoint;
    this.FullUrl = environment.apiUrl +'/'+ this.EndPoint;
    this.Header = new HttpHeaders({
      'Content-Type': 'application/json'
  });
    }

    ToJson()
    {
      return JSON.stringify(this);
    }
}
