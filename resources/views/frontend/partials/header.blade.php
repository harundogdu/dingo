<header class="main_menu @yield('navClass','home_menu')">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="index.html"> <img src="{{asset('frontend/dingo/img/logo.png')}}" alt="logo"> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse main-menu-item justify-content-end"
                        id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="{{route('home')}}">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{route('about')}}">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{route('menu')}}">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{route('chefs')}}">Chefs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{route('blog')}}">Blog</a>
                            </li>
                            {{-- <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blog
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="blog.html">Blog</a>
                                    <a class="dropdown-item" href="single-blog.html">Single blog</a>
                                    <a class="dropdown-item" href="elements.html">Elements</a>
                                </div>
                            </li> --}}
                            <li class="nav-item">
                                <a class="nav-link" href="{{route('contact')}}">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="menu_btn">
                        <a href="{{ route('admin.dashboard') }}" class="@yield('btnTop','btn_1 d-none d-sm-block')">book a tabel</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
