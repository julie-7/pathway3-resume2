export const TopNavBar = ({ username, navBarcontent }) => {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">

                <a class="navbar-brand" href="#">Nav</a>

                <span class="navbar-toggler-icon"></span>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="Home.jsx">Home</a>
                            <a class="nav-link active" aria-current="page" href="Projects.jsx">Projects</a>
                            <a class="nav-link active" aria-current="page" href="About.jsx">About</a>
                            <a class="nav-link active" aria-current="page" href="Contacts.jsx">Contacts</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>



        </>
    )
}
