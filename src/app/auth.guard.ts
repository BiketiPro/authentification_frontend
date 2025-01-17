import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,GuardResult,MaybeAsync,Router, RouterStateSnapshot } from "@angular/router";
 
@Injectable({
    providedIn:'root'
})
 
export class AuthGuard implements CanActivate{
    constructor(private router:Router){
 
    }
    token:any;
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this.token=localStorage.getItem('token');
    if(this.token){
        return true;
    }
    else{
        this.router.navigate(['login'])
        return false
    }
 
 
  }
}
 