import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoAuthGuard } from "@core/guards/no-auth.guard";
import { INTERNAL_PATH } from "@data/constants/routes";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: INTERNAL_PATH.AUTH_LOGIN,
        component: LoginComponent,
        canActivate: [NoAuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
