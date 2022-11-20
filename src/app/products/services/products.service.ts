import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
amountFromDetais!:number;

  getAllProducts(){
    return this.http.get(environment.dataApi+".Json");
      }
      getAsingleProduct(id:any){
        return this.http.get(environment.dataApi+id+".Json");
          }

}






























      // getSingleProduct(id:any){
      //   this.getAllProducts().subscribe((res: any) => {
      //     this.allProducts=res.filter((item:any) => {
      //       item.id=id;
      //     })  
      //   } , error=>{
      //     alert(error.message);
        
      //   });
      // }