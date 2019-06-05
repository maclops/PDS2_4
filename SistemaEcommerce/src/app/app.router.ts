import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'clientes',
        loadChildren: 'app/clientes/clientes.module#ClientesModule'
    }, {
        path: 'cds',
        loadChildren: 'app/cds/cds.module#CdsModule'
    }, {
        path: 'filmes',
        loadChildren: 'app/filmes/filmes.module#FilmesModule'
    }, {
        path: 'livros',
        loadChildren: 'app/livros/livros.module#LivrosModule'
    }
]

export const RoutingModule = RouterModule.forRoot(routes)