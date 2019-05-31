<template>
   <nav class="navbar navbar-dark bg-dark">
        <router-link to="/"><a class="navbar-brand">Stock Trader</a></router-link>
        <ul class="nav nav-pills">
                <router-link tag="li" to="/portofolio" ><a class="nav-link">Portofolio</a></router-link>
                <router-link tag="li" to="/stocks"><a class="nav-link">Stocks</a></router-link>

            <li class="nav-item dropdown">
                <a 
                    class="nav-link dropdown-toggle" 
                    data-toggle="dropdown" 
                    href="#" role="button" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Save & Load
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#one">Save Data</a>
                    <a class="dropdown-item" href="#two">Load Data</a>
                </div>
            </li>
        </ul>
</nav>
</template>
